import { createSlice } from "@reduxjs/toolkit";
//Redux State Slice
const editCity = createSlice({
  name: "editCity",
  initialState: {
    cityNames: {}, // store city names by city key
  },

  reducers: {
    setCityName: (state, action) => {
      const { key, value } = action.payload;
      state.cityNames[key] = value;
    },
  },
});

export const { setCityName } = editCity.actions;
export default editCity.reducer;
