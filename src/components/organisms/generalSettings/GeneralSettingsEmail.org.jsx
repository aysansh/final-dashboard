import React from "react";
import GeneralSettingsHeader from "../../molecules/generalSettings/GeneralSettingsHeader.mol";
import BasicInfoInput from "../../molecules/generalSettings/BasicInfoInput.mol";
import InputText from "../../atom/generalSettings/InputText";
import PrimaryBtn from "../../atom/generalSettings/PrimaryBtn";

export default function GeneralSettingsEmail(){

    return(
        <div className="flex flex-col gap-y-4 pt-6 pb-3.5 ps-6 pe-6 mt-6 w-full border rounded-lg shadow-md ">
            
            <GeneralSettingsHeader title="Email" content="Your current Primary email address is " email="dashprops@example.com"/>    
           
            <BasicInfoInput title="New email address" >
                    <InputText placeholder="Email" type="email" name="email" cls="2/3" />
            </BasicInfoInput>

            <BasicInfoInput>
                    <div className="flex flex-row justify-start items-center gap-4 w-2/3">
                        <PrimaryBtn cls="w-[133px] h-[42px]">Save Changes</PrimaryBtn>
                    </div>
                </BasicInfoInput>

                
            </div>
        
    )}