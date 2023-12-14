import React from "react";
import NavBar from "../../organisms/general/NavBar";
import SideBar from "../../organisms/general/SideBar";

function Layout({ children }) {
  return (
    <div className="flex bg-[#F4F6F8] ">
     <SideBar/>
      <div className="flex flex-col h-screen w-full">
        <NavBar />
        <div className="flex justify-center overflow-scroll">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
