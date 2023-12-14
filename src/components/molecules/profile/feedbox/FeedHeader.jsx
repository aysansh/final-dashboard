import ProfilePicture from "../../../../assets/img/profile-picture.png";
import ProfileMainImage from "../ProfileMainImage";
import { PiDotsThreeOutlineVerticalBold } from "react-icons/pi";

function FeedHeader() {
  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center gap-2">
       <ProfileMainImage styleImg={"w-10 h-10 rounded-full"} pictures={ProfilePicture}/>
        <div className="flex flex-col font-medium">
          <h4 className="text-base ">Jitu Chauhan</h4>
          <p className="text-[#64748B]">19 minutes ago</p>
        </div>
      </div>
      <div className="w-4 h-4">
        <PiDotsThreeOutlineVerticalBold className="text-[#94A3B8]" />
      </div>
    </div>
  );
}

export default FeedHeader;
