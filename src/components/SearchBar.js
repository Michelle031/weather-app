import { GpsFixed } from "@mui/icons-material";
import React, { useEffect } from "react";
import { useGeolocated } from "react-geolocated";
import { useDispatch } from "react-redux";
import { setLocation } from "../features/locationSlice";

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
    dispatch(
      setLocation({
        lat: coords?.latitude,
        long: coords?.longitude,
      })
    );
  }, [coords, dispatch]);

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
