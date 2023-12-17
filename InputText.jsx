import React from "react";

export default function InputText({cls,children, ...props}){
    return(
        <input className={"border border-solid-[#DFE3E8] rounded-md px-2 py-1 sm:px-5 sm:py-3  placeholder-[#919EAB] w-2/3  " + cls } {...props}>
            {children}
        </input>
    )
}