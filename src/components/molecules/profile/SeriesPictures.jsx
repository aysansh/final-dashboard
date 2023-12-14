import Pic1 from "../../../assets/img/34970e0bc620162a4bebb342be703c08.png";
import Pic2 from "../../../assets/img/bc80c9cf45dcd344648b1343f0ea39d5.png";
import Pic3 from "../../../assets/img/be4cd6ac0654e0e6ca81368a852b796b.png";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";




function SeriesPictures() {
  return (
    
      <AvatarGroup max={3}>
        <Avatar sx={{ width: 24, height: 24 }} src={Pic1} />
        <Avatar sx={{ width: 24, height: 24 }} src={Pic2} />
        <Avatar sx={{ width: 24, height: 24 }} src={Pic3} />
      </AvatarGroup>
   
  );
}

export default SeriesPictures;
