import { myTeamList } from "../../../assets/js/profileData";
import ProfileMainBox from "../../templates/profile/ProfileMainBox";
import ProfileMainImage from "../../molecules/profile/ProfileMainImage";
import ProjectText from "../../molecules/profile/projectComponents/ProjectText";
import { BiPhoneCall } from "react-icons/bi";
import { LuVideo } from "react-icons/lu";

function MyTeamBox() {
  return (
    <ProfileMainBox title="My Team">
      <div className="flex flex-col  items-center gap-6">
        {myTeamList.map((item, index) => (
          <div className="flex items-center justify-between gap-3 w-full" key={index}>
            <div className="flex gap-3">
              <ProfileMainImage pictures={item.picture} styleImg={"w-10 h-10 rounded-full"} />
            <div className="flex gap-10">
              <ProjectText
                projectTitle={item.title}
                projectSubTitle={item.subTitle}
              />
            </div>
            </div>
              <div className="flex gap-8 text-[#64748B]">
                  <BiPhoneCall /> 
                  <LuVideo />
              </div>
     
            
          </div>
        ))}
      </div>
    </ProfileMainBox>
  );
}

export default MyTeamBox;
