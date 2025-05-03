import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = {
  status: "all",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filterInitialState,

  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;

export default filtersSlice.reducer;

// Selectors

export const selectStatusFilter = (state) => state.filters.status;
