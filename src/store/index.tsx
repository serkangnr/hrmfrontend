import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import authSlice from './feature/authSlice'
import { useSelector } from 'react-redux';
import { adminSlice } from './feature';

const store = configureStore({
  reducer:{
    auth:authSlice,
    admin:adminSlice
  }
});

export type HrmDispatch =typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector = useSelector.withTypes<RootState>();
export default store;