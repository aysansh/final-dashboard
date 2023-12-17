import React from "react";
import GeneralSettingsHeader from "../../molecules/generalSettings/GeneralSettingsHeader.mol";
import BasicInfoInput from "../../molecules/generalSettings/BasicInfoInput.mol";
import InputSelect from "../../molecules/generalSettings/InputSelect.mol";
import PrimaryBtn from "../../atom/generalSettings/PrimaryBtn";
import { languages } from "../../../../src/assets/js/configs/languages";
import { timeZone } from "../../../../src/assets/js/configs/timeZone";
import { dateFormat } from "../../../../src/assets/js/configs/dateFormat";

function Prefrences() {
  return (
    <div className="flex flex-col gap-y-4 pt-6 pb-3.5 ps-6 pe-6 mt-6 w-full  border rounded-lg shadow-md">
      <GeneralSettingsHeader
        title="Preferences"
        content="Preferences settings affect your view of the entire application."
      />
      <BasicInfoInput title="Language">
        <InputSelect array={languages} cls="w-2/3"></InputSelect>
      </BasicInfoInput>



      

      <BasicInfoInput title="Time Zone">
        <InputSelect array={timeZone}></InputSelect>
      </BasicInfoInput>

      <BasicInfoInput title="Date Format">
        <InputSelect array={dateFormat}></InputSelect>
      </BasicInfoInput>

      <BasicInfoInput title="Default">
        <div className="flex flex-row justify-start items-center gap-x-6  w-2/3">
          <div>
            <input
              type="radio"
              id="on"
              name="Default"
              value="On"
              className="mr-1"
            ></input>
            <label for="on">On</label>
          </div>
          <div>
            <input
              type="radio"
              id="off"
              name="Default"
              value="Off"
              className="mr-1"
            ></input>
            <label for="off">Off</label>
          </div>
        </div>
      </BasicInfoInput>

      <BasicInfoInput title="Choose option default">
        <div className="flex flex-col justify-start gap-1 w-2/3">
          <div>
            <input type="checkbox" name="options" id="option1" value="" className="mr-2"></input>
            <label for="option1">Tell me</label>
          </div>
          <div>
            <input type="checkbox" name="options" id="option2" value="" className="mr-2"></input>
            <label for="option2">Open e-mail</label>
          </div>
          <div>
            <input type="checkbox" name="options" id="option3" value="" className="mr-2"></input>
            <label for="option3">Show default</label>
          </div>
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

export default Prefrences;
