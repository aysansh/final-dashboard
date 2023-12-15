// import required data files
import "./ActiveProject.scss"
import BasicTable from "../../../components/organisms/general/BasicTable/BasicTable";
const ActiveProjects = () => {
  return <div className="listContainer shadow-main-shadow">
       <div className="listTitle">
         <h1 className="p-4 rounded-t-lg">Active Projects</h1>
       </div>
           <BasicTable />
           
  </div>;
};

export default ActiveProjects;
