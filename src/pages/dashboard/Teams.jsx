import TeamForm from "../../components/organisms/general/TeamsForm/TeamForm";
function Teams() {
  return (
    <div className="border pl-3 col-span-2 p-4 rounded-lg bg-white shadow-main-shadow ">
         <h1 className="p-4 rounded-t-lg">Teams</h1>
      <TeamForm />
    </div>
  );
}

export default Teams;
