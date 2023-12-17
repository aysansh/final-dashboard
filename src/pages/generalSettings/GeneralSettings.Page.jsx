import React from "react";
import EditProfileInfoGeneralSettings from "../../components/organisms/generalSettings/EditProfileInfoGeneralSettings.org";
import BasicInfo from "../../components/organisms/generalSettings/BasicInfo.org";
import GeneralSettingsEmail from "../../components/organisms/generalSettings/GeneralSettingsEmail.org";
import ChangeEmailPass from "../../components/organisms/generalSettings/ChangeEmailPass.org";
import Prefrences from "../../components/organisms/generalSettings/Prefrences.org";
import TwoStepVerify from "../../components/organisms/generalSettings/TwoStepVerify.org";
import SocialAccounts from "../../components/organisms/generalSettings/SocialAccounts.org";
import DangerZone from "../../components/organisms/generalSettings/DangerZone.org"
import Layout from "../../components/templates/general/Layout";

export default function GeneralSettingsPage() {
  return (
    <Layout>
      <div>
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
    
    </Layout>
    
  );
}
