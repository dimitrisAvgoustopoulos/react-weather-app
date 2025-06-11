import { createSlice } from "@reduxjs/toolkit";
// Redux State Slice
const dataHandlingSlice = createSlice({
  name: "dataHandling",
  initialState: {
    isLoading: false,
    data: [],
    error: null,
  },

  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setIsLoading, setData, setError } = dataHandlingSlice.actions;
export default dataHandlingSlice.reducer;
