import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subscriptionPlanList: [],
  blogsList: {},
  faqs: {},
};

const staticDataReducer = createSlice({
  name: "staticData",
  initialState,
  reducers: {
    subscriptionPlanList: (state, action) => {
      state.subscriptionPlanList = action.payload
    },
    blogsList: (state, action) => {
      state.blogsList = action.payload
    },
    faqs: (state, action) => {
      state.faqs = action.payload
    },
    resetData: () => initialState
  },
});

export const { subscriptionPlanList, blogsList, faqs, resetData } = staticDataReducer.actions;
export default staticDataReducer.reducer;