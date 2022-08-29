import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputs: [],
};

export const inputSlice = createSlice({
  name: "input",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    addInputs: (state, action) => {
      state.inputs.push(action.payload);
    },
  },
});

export const { addInputs } = inputSlice.actions;

export default inputSlice.reducer;
