import SeriesPictures from "../SeriesPictures";

function FeedLikes() {
  return (
    <div className="flex justify-start gap-3">
      <SeriesPictures />
      <p>You and 20 more liked this</p>
    </div>
  );
}

export default FeedLikes;
