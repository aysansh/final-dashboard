import React from "react";
export default function GeneralSettingsHeader ({title,cls,content,email,children}){

    return(
        
        <div className=" flex flex-col gap-y-4">
            <h4 className={"text-xl font-bold flex justify-start text-[#161C24] " + cls}>{title}</h4>
            <p className="flex justify-start text-[12px] font-medium text-[#637381] border-b-[1px] pb-[18px] border-[#F4F6F8]">{content}<a href="#" className="text-[#624BFF]">{email}</a></p>
            {children}
        </div>
     
    )
}