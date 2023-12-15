import Bag from "../../../../assets/img/icons/briefcase.svg";
import List from "../../../../assets/img/icons/project-icon-3.svg";
import Plist from "../../../../assets/img/icons/project-icon-2.svg";
import Target from "../../../../assets/img/icons/target.svg";

const data = [
  {
    title: "Projects",
    icon: Bag,
    backgroundColor: "#E0DCFE",
    value: 18,
    completed: {
      count: 2,
      label: "Completed",
    },
  },
  {
    title: "Active Task",
    icon: List,
    backgroundColor: null,
    value: 132,
    completed: {
      count: 28,
      label: "Completed",
    },
  },
  {
    title: "Teams",
    icon: Plist,
    backgroundColor: null,
    value: 12,
    completed: {
      count: 1,
      label: "Completed",
    },
  },
  {
    title: "Productivity",
    icon: Target,
    backgroundColor: "#EAF6EC",
    value: "76%",
    completed: {
      count: 5,
      label: "Completed",
    },
  },
];

function ProjectsMol() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center justify-center mt-8 px-8 gap-[25px]">
      {data.map((item, index) => (
        <div
          key={index}
          className={`border border-light-300 rounded-lg flex flex-col p-6 bg-white shadow-main-shadow ${
            item.backgroundColor ? `bg-${item.backgroundColor}` : ""
          }`}
        >
          <div className="flex items-start justify-between">
            <p className="text-4 font-bold leading-tight tracking-tighter text-black">
              {item.title}
            </p>
            <img
              src={item.icon}
              alt="My Icon"
              className={`${
                item.backgroundColor
                  ? "bg-[#E0DCFE] p-2 rounded-md"
                  : "rounded-md"
              }`}
            />
          </div>
          <div className="text-[42px] font-bold gap-2">{item.value}</div>
          <div className="flex gap-2">
            <p className="text-[14px] font-bold">{item.completed.count}</p>
            <p className="text-[12px] font-normal items-center flex">{item.completed.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectsMol;
