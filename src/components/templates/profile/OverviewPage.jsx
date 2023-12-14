import AboutMeBox from "../../organisms/profile/AboutMeBox";
import FeedBox from "../../organisms/profile/FeedBox";
import ProjectsContributionBox from "../../organisms/profile/ProjectsContributionBox";
import MyTeamBox from "../../organisms/profile/MyTeamBox";
import MyActivityBox from "../../organisms/profile/MyActivityBox";
import "../../../assets/css/profileLayout.css";

function OverviewPage() {
  return (
    <div className="parent">
      <div className="div1 flex flex-col gap-8">
        <AboutMeBox />
        <FeedBox />
      </div>
      <div className="div2 flex flex-col gap-8">
        <ProjectsContributionBox />
        <MyTeamBox />
        <MyActivityBox />
      </div>
    </div>
  );
}

export default OverviewPage;
