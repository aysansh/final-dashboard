import React from "react";

function Button({cls, children, onClick }) {
  return (
    <button
      className={"py-3.5 px-5 text-sm font-semibold bg-[#624BFF] text-white rounded-lg  flex justify-center items-center " + cls}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
