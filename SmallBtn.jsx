import React from "react";
// import {Button} from "@mui/material"

export default function SmallBtn({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className=" w-[74px] h-[30px] flex justify-center items-center text-[#624BFF] text-sm font-medium  border border-solid-[#DFE3E8] rounded shadow-[0px_1px_1px_0.5px_rgba(5, 44, 101, 0.06)]"
    >
      {children}
    </button>
  );
}
