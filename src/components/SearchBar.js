import { GpsFixed } from "@mui/icons-material";
import React, { useEffect } from "react";
import { useGeolocated } from "react-geolocated";
import { useDispatch } from "react-redux";
import { setName } from "../features/locationSlice";

function SearchBar({ onClick }) {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: true,
      },
      watchPosition: true,
      geolocationProvider: navigator.geolocation,
      isOptimisticGeolocationEnabled: true,
    });

  const dispatch = useDispatch();

  useEffect(() => {
    const getName = async () => {
      if (coords) {
        const res = await fetch(
          `https://api.weatherbit.io/v2.0/current?lat=${coords.latitude}96&lon=${coords.longitude}&key=25800db482254c18b92aa6ba2620bd4c`
        )
          .then((data) => data.json())
          .catch((err) => console.log(err));
        dispatch(setName(res.data?.[0].city_name));
      }
    };
    setTimeout(getName, 3000);
  }, []);

  return (
    <div
      className="flex items-center text-[#E7E7EB] justify-between w-full"
      onClick={onClick}
    >
      <button className="py-3 px-5 bg-[#6E707A]">Search for places</button>
      <GpsFixed
        sx={{
          background: "#6E707A",
          padding: "8px",
          borderRadius: "50%",
          fontSize: "40px",
        }}
      />
    </div>
  );
}

export default SearchBar;
