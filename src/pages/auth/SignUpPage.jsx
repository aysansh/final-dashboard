import Logo from "../../components/atom/auth/Logo";
import DefaultInput from "../../components/atom/general/DefaultInput";
import LargeButton from "../../components/atom/general/LargeButton";
import RememberCheckBox from "../../components/molecules/auth/RememberCheckBox";
import Links from "../../components/molecules/auth/Links";
import { NavLink } from "react-router-dom";
import AuthLayout from "../../components/templates/auth/AuthLayout";

function SignUpPage() {
  const handleClick = () => {
    alert("hi lovely");
  };
  return (
    <AuthLayout>
      <div className="flex flex-col gap-8 text-[#1E293B] bg-white p-8 rounded-xl w-[364px] h-[639] font-normal">
        <Logo subText="Please enter your user information." />
        <div className="flex flex-col gap-4">
          <DefaultInput
            cls=""
            type="text"
            inputLable="User Name"
            name="user name"
          />
          <DefaultInput cls="" type="email" inputLable="E-mail" name="E-mail" />
          <DefaultInput
            cls=""
            type="password"
            inputLable="Password"
            name="password"
          />
          <DefaultInput
            cls=""
            type="password"
            inputLable="Confirm "
            name="Confirm  "
          />
          <RememberCheckBox
            checkboxText=" By creating an account, you agree the"
            checkboxlink={
              <a className="text-[#624BFF]" href="">
                terms and conditions.
              </a>
            }
          />
          <LargeButton
            btnName="Signin"
            btnStyle={"bg-[#624BFF]  rounded-lg text-white py-[14px] px-5"}
            onClick={handleClick}
          />
          <div className="flex justify-between">
            <NavLink to={"/"}>
              <Links
                linkName="Already member? Login"
                linkStyle={"text-[#624BFF]"}
              />
            </NavLink>
            <NavLink to={"/forget"}>
              <Links linkName="Forgot Password" linkStyle={"text-[#1E293B]"} />
            </NavLink>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}

export default SignUpPage;
