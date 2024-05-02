import React from "react";
import { IoIosAdd } from "react-icons/io";

const Navbar = ({ onClick, Tasks }) => {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <>
      <div className="flex justify-between px-3 py-4 border-b border-[#b0adc1] mb-6">
        <div>
          <h1 className="text-[1.8rem] font-semibold text-[#726ee4]">
            {weekdays[new Date().getDay()]}, {new Date().getDate()}
          </h1>
          <h3 className="text-[#b0adc1] font-normal">
            {month[new Date().getMonth()]}
          </h3>
        </div>
        <div className="text-[#b0adc1] pt-3 font-medium">{Tasks} Tasks</div>
      </div>
      <button
        className="bg-[#fb6c6a] rounded-full p-1 absolute right-4 top-20"
        onClick={onClick}
      >
        <IoIosAdd size={"2em"} color={"white"} />
      </button>
    </>
  );
};

export default Navbar;
