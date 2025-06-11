import { configureStore } from "@reduxjs/toolkit";
//Import each Slice Reducers
import dataHandlingReducer from "../features/dataHandling/dataHandlingSlice";
import paginationReducer from "../features/pagination/paginationSlice";
import editCityReducer from "../features/editCity/editCitySlice";
import formReducer from "../features/form/formSlice";

export default configureStore({
  reducer: {
    dataHandling: dataHandlingReducer,
    pagination: paginationReducer,
    editCity: editCityReducer,
    form: formReducer,
  },
});
