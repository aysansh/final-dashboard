import ReactLoading from "react-loading";
import Logo from "../../components/atom/auth/Logo";
import DefaultInput from "../../components/atom/general/DefaultInput";
import LargeButton from "../../components/atom/general/LargeButton";
import RememberCheckBox from "../../components/molecules/auth/RememberCheckBox";
import Links from "../../components/molecules/auth/Links";
import axios from "../../service/axios";
import AuthLayout from "../../components/templates/auth/AuthLayout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { blue } from "@mui/material/colors";

function SignInPage() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [faild, setFaild] = useState("");
  const [load, setLoad] = useState(false);

  const navigate = useNavigate();
  const handleChangeUser = (e) => {
    setUser(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleClick = () => {
    setLoad(true);
    axios({
      method: "post",
      url: "/auth/login",
      data: {
        email: user,
        password,
      },
    })
      .then((res) => {
        localStorage.setItem("token", res.data.access_token);
        navigate("/profile");
      })
      .catch((err) => {
        setFaild(err.response.data.message);
        setLoad(false);
      });
  };

  return (
    <AuthLayout>
      <div className="flex flex-col gap-8 text-[#1E293B] bg-white p-8 rounded-xl w-[369px] h-[456] font-normal">
        <Logo subText="Please enter your user information." />
        <div className="flex flex-col gap-4">
          <DefaultInput
            value={user}
            type="text"
            inputLable="User Name"
            name="user name"
            onChange={handleChangeUser}
          />
          <DefaultInput
            value={password}
            type="password"
            inputLable="Password"
            name="password"
            onChange={handleChangePassword}
          />
          <RememberCheckBox checkboxText="Remember Me" />
          <LargeButton
            btnName="Signin"
            btnStyle={"bg-[#624BFF] text-white  rounded-lg py-[14px] px-5"}
            onClick={handleClick}
          />
          <div className="flex justify-between">
            <NavLink to={"/signup"}>
              <Links
                linkName="Create An Account"
                linkStyle={"text-[#624BFF]"}
              />
            </NavLink>
            <NavLink to={"/forget"}>
              <Links linkName="Forgot Password" linkStyle={"text-[#1E293B]"} />
            </NavLink>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          {load ? (
            <ReactLoading
              type={"spokes"}
              color={"blue"}
              height={30}
              width={40}
            />
          ) : (
            <p className="text-center text-red-800 text-lg font-bold">{faild}</p>
          )}
        </div>
      </div>
    </AuthLayout>
  );
}

export default SignInPage;
