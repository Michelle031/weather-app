import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Helsinki",
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setName } = locationSlice.actions;

export default locationSlice.reducer;
