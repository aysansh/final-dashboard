import ActiveProjects from "./ActiveProject/ActiveProject";
import Chart from "./Chart";
import Projects from "./Projects";
import Teams from "./Teams";
import Layout from "../../components/templates/general/Layout";
function Dashboard() {
  return (
    <Layout>
    <div className="grid  h-[100vh] w-full">
      <div className="w-full  bg-[#624BFF] h-[191px]">
        <div className="flex justify-between items-center mt-8 mx-[35px]">
          <p className="sm:text-4 md:text-[28px] font-bold leading-tight text-white">
            Projects
          </p>
          <a
            href="/"
            className="sm:text-[10px] sm:px-5  md:px-5 sm:py-[16px] md:py-[14px] border-gray-300 border rounded-lg shadow-main-shadow md:text-[14px] font-medium text-[#624BFF] bg-white"
          >
            Create New Projects
          </a>
        </div>
        <Projects />

        <div className="mx-8">
          <ActiveProjects />
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[28px] gap-5">
            <Chart />
            <Teams />
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
}

export default Dashboard;
