import FeedCaption from "../../molecules/profile/feedbox/FeedCaption";
import FeedImg from "../../molecules/profile/feedbox/FeedImg";
import FeedHeader from "../../molecules/profile/feedbox/FeedHeader";
import FeedSocial from "../../molecules/profile/feedbox/FeedSocial";


function FeedBox() {
  return (
    <div className="bg-white p-5 text-[#1E293B] rounded-lg w-full flex flex-col  h-fit shadow-main-shadow">
      <FeedHeader />
      <FeedCaption />
      <FeedImg/>
      <FeedSocial/>
    </div>
  );
}

export default FeedBox;
