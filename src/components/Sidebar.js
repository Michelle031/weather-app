import React, { useRef, useState } from "react";
import SearchBar from "./SearchBar";
import { Place, Close, Search, ChevronRight } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { formatDate } from "../lib/getDate";
import { addInputs, setInput } from "../features/inputSlice";
import { getImage } from "../lib/getImage";

function Sidebar() {
  const [hide, setHide] = useState(true);
  const inputRef = useRef();

  const weather = useSelector((state) => state.weather.weather);
  const location = useSelector((state) => state.location.name);
  const temp = useSelector((state) => state.temp.temp);
  let inputs = useSelector((state) => state.input.inputs);
  inputs = [...new Set(inputs)];
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setInput(inputRef.current.value));
    dispatch(addInputs(inputRef.current.value));
    inputRef.current.value = "";
  };

  return (
    <div
      className={`clouds flex flex-col items-center bg-[#1E213A] w-full md:min-w-[450px] md:max-w-[450px]  text-[#A09FB1] p-5  md:p-10 text-base ${
        hide ? "justify-between space-y-20" : " space-y-8 h-screen"
      }  `}
    >
      {hide ? (
        <>
          <SearchBar onClick={() => setHide(false)} />
          <div>
            <img
              src={`/images/${getImage(weather?.[0].weather.description)}.png `}
              alt=""
            />
          </div>
          <p className="text-[144px] text-[#E7E7EB] font-medium">
            {Math.round(weather?.[0]?.temp)}
            <span className="text-2xl text-[#A09FB1]">
              &#176;{temp === "M" ? "C" : "F"}
            </span>
          </p>
          <p className="font-semibold text-4xl text[#A09FB1]">
            {weather?.[0]?.weather.description}
          </p>
          <div className="space-y-2 flex flex-col items-center justify-center">
            <div className="flex space-x-3">
              <p>Today</p>
              <span>•</span>
              <p>{formatDate(weather?.[0]?.valid_date)}</p>
            </div>
            <p className="flex items-center">
              <Place /> {location}
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="self-end" onClick={() => setHide(true)}>
            <Close />
          </div>
          <form
            className="flex flex-col md:flex-row w-full space-y-3 items-center"
            onSubmit={submitHandler}
          >
            <div className="border text-sm md:text-base max-w-full border-[#E7E7EB] p-4 flex  space-x-4 items-center justify-between text-[#616475]">
              <Search />
              <input
                type="text"
                placeholder="search location"
                className="bg-transparent outline-none border-none"
                ref={inputRef}
              />
            </div>
            <button className="px-5 py-4  md:ml-4 text-[#E7E7EB] text-base bg-[#3C47E9]">
              Search
            </button>
          </form>
          <div className="flex flex-col space-y-2 w-full">
            {inputs.map((input, i) => (
              <p
                key={i}
                onClick={() => dispatch(setInput(input))}
                className="w-full px-3 py-6 flex items-center group justify-between text-[#E7E7EB] text-base hover:border hover:border-[#E7E7EB]"
              >
                {input}
                <div className="hidden group-hover:inline-flex">
                  <ChevronRight />
                </div>
              </p>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Sidebar;
