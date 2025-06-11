import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "suggestionSlice",
  initialState: {
    suggestion: "",
  },

  reducers: {
    setSuggestion: (state, action) => {
      state.suggestion = action.payload;
    },
  },
});

export const { setSuggestion } = formSlice.actions;
export default formSlice.reducer;
