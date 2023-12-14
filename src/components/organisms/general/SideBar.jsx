import Dashboard from "../../molecules/general/sideBar/Dashboard";
import LayoutAndPages from "../../molecules/general/sideBar/LayoutAndPages";
import UIComponents from "../../molecules/general/sideBar/UIComponents";

function SideBar() {
  return (
    <div className="flex flex-col min-w-[256px] h-screen gap-4 text-[#637381] bg-[#212B36] p-6 font-medium">
      <h2 className="text-white text-[26px] font-extrabold">Dash UI</h2>
      <Dashboard />
      <div className="flex flex-col gap-4">
        <h3 className="text-xs font-bold pt-6 bp-4">Layouts & Pages</h3>
        <LayoutAndPages />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-xs font-bold pt-6 bp-4">UI Components</h3>
        <UIComponents />
      </div>
    </div>
  );
}

export default SideBar;
