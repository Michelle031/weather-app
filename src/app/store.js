import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "../features/locationSlice";
import weatherReducer from "../features/weatherSlice";
import tempReducer from "../features/tempSlice";
import inputReducer from "../features/inputSlice";

export const store = configureStore({
  reducer: {
    location: locationReducer,
    weather: weatherReducer,
    temp: tempReducer,
    input: inputReducer,
  },
});
