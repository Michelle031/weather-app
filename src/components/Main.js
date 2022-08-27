import React from "react";
import SmallCard from "./SmallCard";
import { NearMe } from "@mui/icons-material";
import ProgressBar from "./ProgressBar";
import { useDispatch, useSelector } from "react-redux";
import { setTemp } from "../features/tempSlice";
import { formatDate } from "../lib/getDate";

function Main() {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather.weather);
  const array = [...weather].slice(1, 6);

  const changeTemp = (e) => {
    dispatch(setTemp(e.target.title));
  };

  const getMiles = (m) => {
    m = Math.round((m / 1.609) * 10) / 10;
    m = m.toString();
    return m.replace(".", ",");
  };

  return (
    <div className="bg-[#100E1D] w-full  p-4 md:py-10 flex flex-col md:px-[150px]">
      <div className="space-x-6 flex self-end mr-5 md:mr-0">
        <button
          title="M"
          className=" temp bg-[#E7E7EB] text-[#110E3C]"
          onClick={changeTemp}
        >
          &#176;C
        </button>
        <button
          title="I"
          className="temp bg-[#585676] text-[#E7E7EB]"
          onClick={changeTemp}
        >
          &#176;F
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 mt-10 gap-7 px-6 md:px-0">
        {array.map((data, index) => (
          <SmallCard key={index} data={data} />
        ))}
      </div>

      <h2 className="font-bold text-[#E7E7EB] text-2xl my-10">
        Today’s Hightlights{" "}
      </h2>
      <div className="font-bold grid grid-cols-1 md:grid-cols-2 gap-11">
        <div className="card h-[200px]">
          <p className="title">Wind Status</p>
          <h1 className="big">
            {Math.round(weather?.[0]?.wind_spd * 2.23694)}{" "}
            <span className="big">mph</span>
          </h1>
          <h3 className="text-[14px] font-medium ">
            <span>
              <NearMe
                sx={{
                  background: "#FFFFFF4D",
                  padding: "6px",
                  borderRadius: "50%",
                  rotate: "180deg",
                  fontSize: "33px",
                  marginRight: "8px",
                }}
              />
            </span>{" "}
            WSW
          </h3>
        </div>
        <div className="card h-[200px]">
          <p className="title">Humidity</p>
          <h2 className="big">
            {weather?.[0]?.rh} <span className="small">% </span>
          </h2>
          <ProgressBar value={weather?.[0]?.rh} />
        </div>
        <div className="card h-[160px]">
          <p className="title">Visibility</p>
          <h2 className="big">
            {getMiles(weather?.[0]?.vis)}
            <span className="small"> miles</span>
          </h2>
        </div>
        <div className="card h-[160px]">
          <p className="title">Air Pressure</p>
          <h2 className="big">
            {Math.round(weather?.[0]?.pres)} <span className="small">mb</span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Main;
