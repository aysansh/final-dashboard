import ProfilePicture from "../../../assets/img/profile-picture.png";
import DefaultInput from "../../atom/general/DefaultInput";
import { FiBell } from "react-icons/fi";
import { Badge } from "@mui/material";

function NavBar() {
  return (
    <div className="flex justify-between py-3 px-8 bg-white shadow-main-shadow rounded-tr-lg">
      <DefaultInput
        inputCls={"w-[282px] px-5 py-4"}
        placeholder={"search"}
        type={"search"}
      />
      <div className="flex items-center gap-5">
        <button>
          <Badge badgeContent={4} color="error">
            <FiBell className="text-xl text-[#637381]" />
          </Badge>
        </button>
        <div className="cursor-pointer">
          <img className="h-10 w-10 rounded-full" src={ProfilePicture} />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
