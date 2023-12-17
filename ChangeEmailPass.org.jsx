import React from "react";
import GeneralSettingsHeader from "../molecules/GeneralSettingsHeader.mol";
import BasicInfoInput from "../molecules/BasicInfoInput.mol";
import InputText from "../atoms/InputText";
import PrimaryBtn from "../atoms/PrimaryBtn";

export default function ChangeEmailPass() {
  return (
    <div className="flex flex-col gap-y-4 pt-6 pb-3.5 ps-6 pe-6 mt-6 w-full border rounded-lg shadow-md ">
      <GeneralSettingsHeader
        title="Change your password"
        content="Your current Primary email address is "
        email="dashprops@example.com"
      />

      <BasicInfoInput title="Current password">
        <InputText
          placeholder="Enter Current password"
          type="password"
          name="email"
          
        />
      </BasicInfoInput>

      <BasicInfoInput title="New passwords">
        <InputText
          placeholder="Enter New Password"
          type="password"
          name="email"
          
        />
      </BasicInfoInput>

      <BasicInfoInput title="Confirm new password">
        <InputText
          placeholder="Confirm new password"
          type="password"
          name="email"
          
        />
      </BasicInfoInput>

      <BasicInfoInput>
        <div className="flex flex-col justify-start gap-1 w-2/3">
          <p className="flex justify-start text-sm font-black text-[#161C24]">
            Password requirements:
          </p>
          <p className="text-xs font-medium text-[#637381]">
            Ensure that these requirements are met:
          </p>
          <ul className="text-xs font-medium text-[#637381] leading-4 list-disc pl-4">
            <li>
              <p>Minimum 8 characters long - the more, the better</p>
            </li>
            <li>
              <p>At least one lowercase character</p>
            </li>
            <li>
              <p>At least one uppercase character</p>
            </li>
            <li>
              <p>At least one number, symbol, or whitespace character</p>
            </li>
          </ul>
        </div>
      </BasicInfoInput>

      <BasicInfoInput>
        <div className="flex flex-row justify-start items-center gap-4 w-2/3">
          <PrimaryBtn cls="w-[133px] h-[42px]">Save Changes</PrimaryBtn>
        </div>
      </BasicInfoInput>
    </div>
  );
}
