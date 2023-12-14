import { layoutAndPages } from "../../../../assets/js/sideBarConfig";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LayoutAndPages() {
  const navigate = useNavigate();
  const [drop, setDrop] = useState(false);

  return (
    <ul className="flex flex-col gap-4">
      {layoutAndPages.map((item, index) => (
        <li
          onClick={(e) => setDrop(!drop)}
          key={index}
          className="flex flex-col justify-between text-[#637381]"
        >
          <div className="flex justify-between">
            <div className="flex items-center gap-3">
              {item.icon}
              <span className="hover:text-white cursor-pointer">
                {item.title}
              </span>
            </div>
            {item.dropIcon}
          </div>

          <ul className={`${drop ? "flex flex-col" : "hidden"} ml-4 `}>
            {item.child.map((i, index) => (
              <li
                key={index}
                onClick={(e)=>navigate(i.url)}
                className="flex items-center  text-[#637381]"
              >
                {i.dotIcon}
                <span className="hover:text-white cursor-pointer">
                  {i.title}
                </span>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default LayoutAndPages;
