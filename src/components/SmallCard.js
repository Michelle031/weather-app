import React from "react";
import { useSelector } from "react-redux";
import { formatDate } from "../lib/getDate";
import { getImage } from "../lib/getImage";

function SmallCard({ data }) {
  const temp = useSelector((state) => state.temp.temp);
  const img = getImage(data?.weather.description);

  return (
    <div className=" h-[177px] text-base text-[#E7E7EB] bg-[#1E213A] flex flex-col justify-around items-center">
      <p>{formatDate(data.valid_date)}</p>
      <div className="h-[55px] flex items-center">
        <img
          src={`/images/${img}.png `}
          alt=""
          className="w-full h-full scale-105 object-contain"
        />
      </div>
      <div className="flex space-x-2">
        <p>
          {Math.round(data.max_temp)}&#176;{temp === "M" ? "C" : "F"}
        </p>
        <p className="text-[#A09FB1]">
          {Math.round(data.min_temp)}&#176;{temp === "M" ? "C" : "F"}
        </p>
      </div>
    </div>
  );
}

export default SmallCard;
