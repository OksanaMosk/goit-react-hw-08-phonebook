import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filterTerm: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterTerm(state, { payload }) {
      return {
        ...state,
        filterTerm: payload,
      };
    },
  },
});

export const { filterTerm } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
