import React from "react";

export default function PrimaryBtn({children,cls,onchange}){
    return(
        <button onChange={onchange} className={"flex items-center px-5 py-3.5 bg-[#624BFF] rounded-lg text-white text-sm font-semibold " + cls}>{children}</button>
    )
}