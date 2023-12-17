import React from "react";
import GeneralSettingsHeader from "../molecules/GeneralSettingsHeader.mol";
import EditProfileInfoGeneralSettings from "../organisms/EditProfileInfoGeneralSettings.org";
import BasicInfo from "../organisms/BasicInfo.org";
import GeneralSettingsEmail from "../organisms/GeneralSettingsEmail.org";
import ChangeEmailPass from "../organisms/ChangeEmailPass.org";
import Prefrences from "../organisms/Prefrences.org";
import TwoStepVerify from "../organisms/TwoStepVerify.org";
import SocialAccounts from "../organisms/SocialAccounts.org";
import DangerZone from "../organisms/DangerZone.org";

export default function GeneralSettingsPage() {
  return (
    // <Layout>
      <div >
      <div className="pt-6 pb-3.5 ps-6 pe-6 w-full  border rounded-lg shadow-md ">
        <EditProfileInfoGeneralSettings />
        <BasicInfo></BasicInfo>
      </div>
      <GeneralSettingsEmail></GeneralSettingsEmail>

      <ChangeEmailPass></ChangeEmailPass>
      <Prefrences></Prefrences>
      <TwoStepVerify></TwoStepVerify>

      <SocialAccounts></SocialAccounts>
      <DangerZone></DangerZone>
      </div> 
    // </Layout>
  );
}
