import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import ApexChart from "../../components/organisms/general/ApexChart/ApexChart";
import { TrendingDown } from "@mui/icons-material";
import { TrendingUp } from "@mui/icons-material";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";

function Chart() {
  return (
    <div className="border p-2 w-auto rounded-lg bg-white shadow-main-shadow">
      <div className="flex justify-between items-center">
        <h3 className="text-[16px] font-normal text-[#0F172A]">
          Task Performance
        </h3>
        {<MoreVertOutlinedIcon style={{ width: "32px" }} />}
      </div>
      <ApexChart />
      <div className="flex justify-evenly items-center gap-[70px]">
        <div className="flex flex-col items-center gap-2">
          {<TaskAltRoundedIcon style={{ width: "32px", color: "#28A745" }} />}
          <div className="text-[24px] font-bold">76%</div>
          <p className="text-[14px]">Completed</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          {<TrendingUp style={{ width: "32px", color: "#F59E0B" }} />}
          <div className="text-[24px] font-bold">13%</div>
          <p className="text-[14px]">In-Progress</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          {<TrendingDown style={{ width: "24px", color: "#DC3545" }} />}
          <div className="text-[24px] font-bold">13%</div>
          <p className="text-[14px]">Behind</p>
        </div>
      </div>
    </div>
  );
}

export default Chart;
