import { CiHeart } from "react-icons/ci";
import { GoComment } from "react-icons/go";
import { CiShare2 } from "react-icons/ci";
function FeedLikeAndShare() {
  return (
    <div className="flex gap-6">
      <div className="flex gap-2 items-center">
        <CiHeart />
        <span>20 Likes</span>
      </div>
      <div className="flex items-center">
        <GoComment />
        <span>12 Comment</span>
      </div>
      <div className="flex gap-2 items-center">
        <CiShare2 />
        <span>Share</span>
      </div>
    </div>
  );
}

export default FeedLikeAndShare;
