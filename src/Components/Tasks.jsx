import React from "react";

const Tasks = ({ Task, Time, id, onChange, Status }) => {
  return (
    <div className="flex justify-between py-1 px-3 mt-3 border-b border-[#b0adc1]">
      <div className="flex gap-8">
        <input
          type="checkbox"
          className="accent-[#fb6c6a]"
          onChange={() => {
            onChange(id);
          }}
        />
        {Status ? (
          <h2 className="line-through opacity-60">{Task ? Task : "Dummy"}</h2>
        ) : (
          <h2>{Task ? Task : "Dummy"}</h2>
        )}
      </div>
      <div className="text-[#b0adc1] text-xs flex items-end">
        {Time ? (parseInt(Time) < 12 ? `${Time} AM` : `${Time} PM`) : "7:00 AM"}
      </div>
    </div>
  );
};

export default Tasks;
