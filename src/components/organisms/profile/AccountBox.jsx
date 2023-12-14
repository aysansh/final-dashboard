import EditProfileBtn from "../../molecules/profile/EditProfileBtn";
import ProfilePicture from "../../molecules/profile/ProfilePicture";
import EditBtn from "../../molecules/profile/EditBtn";
import ColorTabs from "../../molecules/profile/TabComp";

function AccountBox() {
  return (
    <div className="bg-white rounded-lg w-full px-6 pt-[10px] flex flex-col gap-6  bg-profile-cover bg-top bg-no-repeat bg-contain h-[307px] shadow-main-shadow">
      <EditBtn />
      <div className="flex flex-row items-end w-full gap-4 h-[234px]">
        <ProfilePicture />
        <EditProfileBtn />
      </div>
      <div className="flex items-center border-t border-gray-200">
    
        <ColorTabs/>
      </div>
    </div>
  );
}

export default AccountBox;
