import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      actionLoginReducer: (_state, _action) => {},

      actionLogoutReducer: (_state) => {},
   },
   extraReducers: (builder) => {
      builder;
   },
});
