import React, { useEffect } from "react";
import "./App.css";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import { useSelector, useDispatch } from "react-redux";
import { setWeather } from "./features/weatherSlice";
import { setName } from "./features/locationSlice";
import { CircularProgress } from "@mui/material";

function App() {
  const { lat, long } = useSelector((state) => state.location);
  const temp = useSelector((state) => state.temp.temp);
  const input = useSelector((state) => state.input.input);
  const weather = useSelector((state) => state.weather.weather);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      if (lat && long) {
        const res = await fetch(
          `https://api.weatherbit.io/v2.0/current?lat=${lat}96&lon=${long}&key=f50fe99d799c4c3085241e8380601997`
        )
          .then((data) => data.json())
          .catch((err) => console.log(err));
        const name = res.data?.[0].city_name;

        if (input) {
          dispatch(setName(input));
          const res2 = await fetch(
            `https://api.weatherbit.io/v2.0/forecast/daily?city=${input}&key=f50fe99d799c4c3085241e8380601997&days=6&units=${temp}`
          )
            .then((data) => data.json())
            .catch((err) => console.log(err));
          dispatch(setWeather(res2.data));
        } else {
          dispatch(setName(name));
          const res2 = await fetch(
            `https://api.weatherbit.io/v2.0/forecast/daily?city=${name}&key=f50fe99d799c4c3085241e8380601997&days=6&units=${temp}`
          )
            .then((data) => data.json())
            .catch((err) => console.log(err));
          dispatch(setWeather(res2.data));
        }
      } else {
        if (input) {
          dispatch(setName(input));
          const res2 = await fetch(
            `https://api.weatherbit.io/v2.0/forecast/daily?city=${input}&key=f50fe99d799c4c3085241e8380601997&days=6&units=${temp}`
          )
            .then((data) => data.json())
            .catch((err) => console.log(err));
          dispatch(setWeather(res2.data));
        } else {
          const res = await fetch(
            `https://api.weatherbit.io/v2.0/forecast/daily?city=Helsinki&key=f50fe99d799c4c3085241e8380601997&days=6&units=${temp}`
          )
            .then((data) => data.json())
            .catch((err) => console.log(err));
          dispatch(setName("Helsinki"));
          dispatch(setWeather(res.data));
        }
      }
    };
    fetchData();
  }, [temp, input, lat, long]);

  return (
    <div className="App h-full flex flex-col md:flex-row ">
      {weather.length === 0 ? (
        <CircularProgress />
      ) : (
        <>
          <Sidebar />
          <Main />
        </>
      )}
    </div>
  );
}

export default App;
