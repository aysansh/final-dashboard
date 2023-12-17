import React from "react";


export default function BasicInfoInput({title,op,icon,cls,children}){
    return(
    <div className={"flex  sm:flex-row justify-between w-full gap-y-1 " + cls}>
        <span className="flex flex-wrap max-h-[34px] w-1/3">{title}<p className="text-[#919EAB]">{op} {icon}</p></span>
        {children}
    </div>
    )
}