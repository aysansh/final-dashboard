import React from "react";
import GeneralSettingsHeader from "../../molecules/generalSettings/GeneralSettingsHeader.mol";
import GeneralSettingsAvatar from "../../molecules/generalSettings/GeneralSettingsAvatar.mol"
import GeneralSettingsCoverPhoto from "../../molecules/generalSettings/GeneralSettingsCoverPhoto.mol"



export default function EditProfileInfoGeneralSettings(){
    return(
        <div className="flex flex-col ">
            <GeneralSettingsHeader title="General Settings" content="Your current Primary email address is &nbsp;" email=" dashprops@example.com" />
            <GeneralSettingsAvatar />
            <GeneralSettingsCoverPhoto />   
        </div>
    )
}