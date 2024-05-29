import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    setFilters(state, action) {
      state.name = action.payload;
    },
  },
});

export const { setFilters } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;

export const selectFiltersName = (state) => state.filters.name;
