import React from "react"
import ManImage from "../../assets/imgs/man.png";
import SmallBtn from "../atoms/SmallBtn";

export default function GeneralSettingsAvatar (){

    const handleChangeClick = () => {
        
      };
      
    const handleRemoveClick = () => {
        
    };
    return (
        <div className="flex flex-col sm:flex-row items-center gap-1 mt-6 w-full">
            <span className="text-gray-900 text-[15px] font-normal w-1/3 hidden sm:block">Avatar</span>
            <div className=" flex flex-col sm:flex-row flex-start gap-y-2 items-center w-2/3">
                <img src={ManImage} className="rounded-full mr-5 min-w-[48px] min-h-[48px] max-w-[48px] max-h-[48px]" ></img>
                <div className="flex flex-row gap-x-2 ">
                <SmallBtn onClick={handleChangeClick} >Change</SmallBtn>
                <SmallBtn onClick={handleRemoveClick} >Remove</SmallBtn>
                </div>
                
            </div>
        </div>
    )
         
}