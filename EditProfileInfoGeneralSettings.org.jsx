import React from "react";
import GeneralSettingsHeader from "../molecules/GeneralSettingsHeader.mol";
import GeneralSettingsAvatar from "../molecules/GeneralSettingsAvatar.mol";
import GeneralSettingsCoverPhoto from "../molecules/GeneralSettingsCoverPhoto.mol";



export default function EditProfileInfoGeneralSettings(){
    return(
        <div className="flex flex-col ">
            <GeneralSettingsHeader title="General Settings" content="Your current Primary email address is &nbsp;" email=" dashprops@example.com" />
            <GeneralSettingsAvatar />
            <GeneralSettingsCoverPhoto />   
        </div>
    )
}