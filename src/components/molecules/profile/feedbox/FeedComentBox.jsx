import ProfilePicture from "../../../../assets/img/profile-picture.png";
import DefaultInput from "../../../atom/general/DefaultInput";
import LargeButton from "../../../atom/general/LargeButton";
import ProfileMainImage from "../ProfileMainImage";

function FeedComentBox() {
  return (
    <div className="flex justify-between">
      <ProfileMainImage
        styleImg={"w-10 h-10 rounded-full"}
        pictures={ProfilePicture}
      />
      <div className="flex justify-end gap-2 w-10/12">
        <DefaultInput
          type="text"
          placeholder="What are your thoughts?"
          name="coment"
          cls={"w-[80%]"}
          inputCls={"py-5"}
          //   value={value}
          //   onChange={onChange}
        />

        <LargeButton btnStyle={"bg-[#624BFF]  rounded-lg text-white py-[14px] px-5"} btnName="Send" />
      </div>
    </div>
  );
}

export default FeedComentBox;
