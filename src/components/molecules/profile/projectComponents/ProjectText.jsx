function ProjectText({projectTitle,projectSubTitle}) {
  return (
    <div className="flex flex-col ">
      <h4 className="text-[#0F172A] text-base">{projectTitle}</h4>
      <span className="text-[#64748B]">{projectSubTitle}</span>
    </div>
  );
}

export default ProjectText;
