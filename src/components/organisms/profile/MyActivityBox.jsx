import { myActivityList } from "../../../assets/js/profileData";
import ProfileMainBox from "../../templates/profile/ProfileMainBox";
import ProfileMainImage from "../../molecules/profile/ProfileMainImage";
import ProjectText from "../../molecules/profile/projectComponents/ProjectText";





function MyActivityBox() {
  return (
    <ProfileMainBox title="My Activity">
      <div className="flex flex-col  items-center gap-6">
        {myActivityList.map((item, index) => (
          <div
            className="flex items-center justify-between gap-3 w-full"
            key={index}
          >
            <div className="flex gap-3">
              <ProfileMainImage
                pictures={item.picture}
                styleImg={"w-10 h-10 rounded-full"}
              />
              <div className="flex flex-col gap-3">
                <ProjectText
                  projectTitle={item.title}
                  projectSubTitle={item.subTitle}

                />
                <span className="text-[#475569] text-xs">{item.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ProfileMainBox>
  );
}

export default MyActivityBox;
