import AboutMeDetail from "../../molecules/profile/AboutMeDetail";
import ProfileMainBox from "../../templates/profile/ProfileMainBox";

function AboutMeBox() {
  return (
    <ProfileMainBox title="About Me">
      <div className="mb-6">     
        <h3 className="text-xs font-medium mb-2">BIO</h3>
        <p className="text-[#475569]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspen disse
          var ius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
       </div>
      <AboutMeDetail />
    </ProfileMainBox>
  );
}

export default AboutMeBox;
