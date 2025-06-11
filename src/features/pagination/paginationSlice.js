import { createSlice } from "@reduxjs/toolkit";
// Redux State Slice
const paginationSlice = createSlice({
  name: "paginationSlice",
  initialState: {
    paginationPage: 1,
  },

  reducers: {
    setPaginationPage: (state, action) => {
      state.paginationPage = action.payload;
    },
  },
});

export const { setPaginationPage } = paginationSlice.actions;
export default paginationSlice.reducer;
