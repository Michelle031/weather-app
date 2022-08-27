import React from "react";

function ProgressBar({ value }) {
  value = value + "%";
  value.toString();
  return (
    <div className="w-[229px] flex flex-col">
      <label className="w-full flex justify-between text-[#A09FB1]">
        <span>0</span>
        <span>50</span>
        <span>100</span>
      </label>
      <div className="w-[229px] h-[8px] rounded-[80px] bg-[#E7E7EB]">
        <div
          style={{ width: value }}
          className={`bg-[#FFEC65] h-[8px] rounded-[80px]`}
        ></div>
      </div>
      <label className="self-end text-[#A09FB1]">%</label>
    </div>
  );
}

export default ProgressBar;
