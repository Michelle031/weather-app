import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  weather: [],
};



export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setWeather: (state, action) => {
      state.weather = action.payload;
    },
  },
  

});

export const { setWeather } = weatherSlice.actions;


export default weatherSlice.reducer;
