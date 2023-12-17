import React from "react";
import GeneralSettingsHeader from "../molecules/GeneralSettingsHeader.mol";
import InputText from "../atoms/InputText";
import BasicInfoInput from "../molecules/BasicInfoInput.mol";
import InputSelect from "../molecules/InputSelect.mol";
import PrimaryBtn from "../atoms/PrimaryBtn";
// import QuIcon from "@/components/atoms/QuIcon";
import QuIcon from "@/components/atoms/QuIcon";
import { countries } from "@/assets/configs/countries";
// import QuIcon from "@";

export default function BasicInfo() {
  return (
    <>
      <GeneralSettingsHeader
        title="Basic information"
        content="Update some personal information. Your address will never be publicly available."
      />
      <div className="flex flex-col gap-y-4 mt-6">
        <BasicInfoInput title="Full name">
          <div className="flex flex-col sm:flex-row sm:justify-between justify-center w-2/3 items-center sm:gap-x-4 gap-y-4">
            <InputText
              placeholder="first name"
              type="text"
              name="firstName"
              cls="w-full"
            ></InputText>
            <InputText
              placeholder="last name"
              type="text"
              name="lastName"
              cls="w-full"
              required
            ></InputText>
          </div>
        </BasicInfoInput>

        <BasicInfoInput title="Email">
          <InputText
            placeholder="Email"
            type="email"
            name="email"
            cls="w-2/3"
          />
        </BasicInfoInput>
        <BasicInfoInput title="Phone" op="(Optional)">
          <InputText placeholder="Phone" type="tel" name="phone" cls="w-2/3" />
        </BasicInfoInput>

        <BasicInfoInput title="Location">
          <InputSelect
            array={countries}
            children="Select country"
            cls=" w-2/3"
          ></InputSelect>
        </BasicInfoInput>

        <BasicInfoInput title="Address line 1">
          <InputText
            placeholder="Address"
            type="text"
            name="address1"
            cls="w-2/3"
          />
        </BasicInfoInput>
        <BasicInfoInput title="Address line 2 " op="(Optional)">
          <InputText
            placeholder="Address"
            type="text"
            name="address2"
            cls="w-2/3"
          />
        </BasicInfoInput>

        <BasicInfoInput title="Zip code" icon={<QuIcon />}>
          <InputText
            placeholder="Zip code"
            type="text"
            name="ZipCode"
            cls="w-2/3"
          />
        </BasicInfoInput>

        <BasicInfoInput>
          <div className="flex flex-row justify-start items-center gap-4 w-2/3">
            <PrimaryBtn cls="w-[133px] h-[42px]">Save Changes</PrimaryBtn>
          </div>
        </BasicInfoInput>
      </div>
    </>
  );
}
