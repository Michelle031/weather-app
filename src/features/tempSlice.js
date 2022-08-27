import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  temp: "M",
};

export const tempSlice = createSlice({
  name: "temp",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setTemp: (state, action) => {
      state.temp = action.payload;
    },
  },
});

export const { setTemp } = tempSlice.actions;

export default tempSlice.reducer;
