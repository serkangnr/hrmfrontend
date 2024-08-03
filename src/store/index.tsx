import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import authSlice from './feature/authSlice'
import { useSelector } from 'react-redux';

const store = configureStore({
  reducer:{
    auth:authSlice
  }
});

export type HrmDispatch =typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector = useSelector.withTypes<RootState>();
export default store;