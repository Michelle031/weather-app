import React, { useEffect } from "react";
import "./App.css";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import { useSelector, useDispatch } from "react-redux";
import { setWeather } from "./features/weatherSlice";

import { CircularProgress } from "@mui/material";

function App() {
  const name = useSelector((state) => state.location.name);
  const temp = useSelector((state) => state.temp.temp);
  const weather = useSelector((state) => state.weather.weather);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const res2 = await fetch(
        `https://api.weatherbit.io/v2.0/forecast/daily?city=${name}&key=25800db482254c18b92aa6ba2620bd4c&days=6&units=${temp}`
      )
        .then((data) => data.json())
        .catch((err) => console.log(err));
      dispatch(setWeather(res2.data));
    };
    fetchData();
  }, [dispatch, name, temp]);

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
