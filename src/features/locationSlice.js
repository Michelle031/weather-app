import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lat: null,
  long: null,
  name: null,
};



export const locationSlice = createSlice({
  name: 'location',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setLocation: (state, action) => {
      state.lat = action.payload.lat;
      state.long = action.payload.long;
    },
    setName: (state, action) => {
      state.name = action.payload;
    }
  },
  

});

export const { setLocation, setName } = locationSlice.actions;



export default locationSlice.reducer;
