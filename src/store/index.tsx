import { configureStore } from '@reduxjs/toolkit'
import React from 'react'

import { useSelector } from 'react-redux';
import { adminSlice,authSlice,managerSlice } from './feature';

const store = configureStore({
  reducer:{
    auth:authSlice,
    admin:adminSlice,
    manager:managerSlice

  }
});

export type HrmDispatch =typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector = useSelector.withTypes<RootState>();
export default store;