import React from "react";
import GeneralSettingsHeader from "../../molecules/generalSettings/GeneralSettingsHeader.mol";
import InputSelect from "../../molecules/generalSettings/InputSelect.mol"
import InputText from "../../atom/generalSettings/InputText";
import { codes } from "../../../../src/assets/js/configs/codes";
import Button from "../../atom/generalSettings/Button";
function TwoStepVerify() {
  return (
    <div className="flex flex-col gap-y-4 pt-6 pb-3.5 ps-6 pe-6 mt-6 w-full  border rounded-lg shadow-md">
      <GeneralSettingsHeader
        title="Two-step verification"
        content="You must setup a two factor authentication to go online with our security guidelines."
      />

      <div className="flex flex-col gap-y-5 mb-8 pb-8 border-b-[1px]">
        <span className="text-base font-bold text-[#161C24]">
          Add Phone Number
        </span>
        <div className="flex flex-row items-center gap-x-6">
          <InputSelect
            cls=" w-[151px] h-[42px] px-1 py-1"
            array={codes}
            children="India"
          ></InputSelect>
          <InputText
            cls="w-[581px] h-[42px]"
            type="tel"
            placeholder="Phone number"
          ></InputText>
        </div>
        <Button cls=" w-[71px] h-[42px] ">Next</Button>
      </div>

      <div className="gap-y-5 flex flex-col">
        <span className="text-base font-bold ">2 Step Verification</span>
        <div className="flex flex-row gap-x-2 ">
          <InputText type="text" cls="w-[42px] h-[42px] px-1 py-1"></InputText>
          <InputText type="text" cls="w-[42px] h-[42px] px-1 py-1"></InputText>
          <InputText type="text" cls="w-[42px] h-[42px] px-1 py-1"></InputText>
          <InputText type="text" cls="w-[42px] h-[42px] px-1 py-1"></InputText>
          <InputText type="text" cls="w-[42px] h-[42px] px-1 py-1"></InputText>
          <InputText type="text" cls="w-[42px] h-[42px] px-1 py-1"></InputText>
        </div>
        <div>
          <input type="checkbox" name="remember"  />
          <label for="remember" className="text-[#637381] text-sm font-medium ml-2">Remember me for 30 days</label>
        </div>
        <div className="flex flex-row gap-x-">
          <Button>Verify</Button>
          <Button cls="bg-[#F9FAFB] text-slate-900">Cancel</Button>
        </div>
        <a href="#" className="text-sm font-medium text-[#DC3545]">I need help getting my verification code.</a>
      </div>
    </div>
  );
}

export default TwoStepVerify;
