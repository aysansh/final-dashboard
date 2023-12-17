import React from "react";
import GeneralSettingsHeader from "../molecules/GeneralSettingsHeader.mol";
import Button from "../atoms/Button";

function DangerZone() {
  return (
    <div className="flex flex-col gap-y-4 pt-6 pb-3.5 ps-6 pe-6 mt-6 w-full  border rounded-lg shadow-md">
      <GeneralSettingsHeader
        title="Danger Zone"
        cls="text-[#DC3545]"
        content="Delete your profile, along with your authentication associations."
      />
      <p className="text-sm font-medium text-[#637381]">
        Delete any and all content you have, such as articles, comments, your
        reading list or chat messages.
        <br /> Allow your username to become available to anyone.
      </p>

      <Button cls="bg-[#DC3545] text-white w-[139px] h-[42px]">
        Delete Account
      </Button>
      <p className="flex justify-start text-sm font-medium text-[#637381] border-b-[1px] pb-[18px] border-[#F4F6F8]">
        Feel free to contact &nbsp; 
        <a href="#" className="text-[#624BFF]">
          dashprops@example.com
        </a>
         &nbsp; with any questions.
      </p>
    </div>
  );
}

export default DangerZone;
