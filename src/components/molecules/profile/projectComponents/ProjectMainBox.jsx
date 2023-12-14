import ProfileMainImage from "../ProfileMainImage";
import ProjectText from "../projectComponents/ProjectText";
import SeriesPictures from "../SeriesPictures";
import { projectList } from "../../../../assets/js/profileData";
import { PiDotsThreeOutlineVerticalBold } from "react-icons/pi";

function ProjectMainBox() {
  return (
    <div className="flex flex-col justify-center items-center gap-6">
        
      {projectList.map((item, index) => (
      
        <div className="flex items-center gap-3" key={index}>
         
          <ProfileMainImage pictures={item.picture} styleImg={"w-10 h-10"} />
          <div className="flex gap-10">
            <ProjectText
            projectTitle={item.title}
            projectSubTitle={item.subTitle}
          />
          <SeriesPictures />
          <PiDotsThreeOutlineVerticalBold className="text-[#94A3B8]" />
          </div>
          
        </div>
      ))}
    </div>
  );
}

export default ProjectMainBox;
