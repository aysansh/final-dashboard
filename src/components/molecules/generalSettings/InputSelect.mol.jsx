import React from "react";

export default function InputSelect({ array = [],cls, children, ...props }) {
  return (
    <select
      defaultValue={"DEFAULT"}
      className={
        "w-2/3 bg-white border border-solid px-2 py-1 sm:px-5 sm:py-2 rounded-md text-[#919EAB]" +
        cls
      }
    >
      <option value="DEFAULT" disabled selected hidden className="flex items-center">
        {children}
      </option>

      {array.map((item) => {
        return (
          <option value={item.title} key={item.id}>
            {item.title}
            
            
          </option>
        );
      })}
    </select>
  );
}
