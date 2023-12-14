import profilePicture from "../../../assets/img/profile-picture.png";
import starCheck from "../../../assets/img/star-check.png";
import greenDot from "../../../assets/img/green-dot.png";

function ProfilePicture() {
  return (
    <div className="flex flex-row items-center mb-4">
      <div className="rounded-full border-2 border-outline-inset">
        <img
          className="rounded-full"
          width={120}
          height={120}
          src={profilePicture}
        />
      </div>
      <div className="flex flex-col items-stretch justify-between h-20 -ml-4">
      
          <img width={24} height={24} src={starCheck} />     
          <img width={16} height={16} src={greenDot} />
        
      </div>
    </div>
  );
}

export default ProfilePicture;
