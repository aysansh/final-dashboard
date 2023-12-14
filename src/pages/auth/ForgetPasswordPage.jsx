import Logo from "../../components/atom/auth/Logo";
import DefaultInput from "../../components/atom/general/DefaultInput";
import LargeButton from "../../components/atom/general/LargeButton";
import RememberCheckBox from "../../components/molecules/auth/RememberCheckBox";
import Links from "../../components/molecules/auth/Links";
import { NavLink } from "react-router-dom";
import AuthLayout from "../../components/templates/auth/AuthLayout";

function ForgetPasswordPage() {
  const handleClick = () => {
    alert("hi lovely");
  };
  return (

   <AuthLayout>
     <div className="flex flex-col gap-6 text-[#1E293B] bg-white p-8 rounded-xl w-[364px] h-[420px] font-normal">
      <Logo
        subText={
          <span className="text-xs">
            Don't worry, we'll send you an email to reset your password.
          </span>
        }
      />
      <div className="flex flex-col gap-6">
        <DefaultInput
          cls=""
          type="text"
          inputLable="User Name"
          name="user name"
          placeholder="Enter Your User Name..."
        />

        <RememberCheckBox checkboxText=" Remember Me" />
        <LargeButton
          btnName="Reset Password"
          btnStyle={"bg-[#624BFF] text-white  rounded-lg py-[14px] px-5"}
          onClick={handleClick}
        />
      </div>
      <NavLink>
        <Links
          linkName={
            <span>
              Don't have an account?
              <a href="" className="text-[#624BFF]">
                Sign Up
              </a>
            </span>
          }
        />
      </NavLink>
    </div>
   </AuthLayout>
  );
}

export default ForgetPasswordPage;
