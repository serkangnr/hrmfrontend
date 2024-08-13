import { configureStore } from '@reduxjs/toolkit'
import React from 'react'

import { useSelector } from 'react-redux';
import { adminSlice,authSlice,managerSlice,companySlice } from './feature';
import employeeSlice from './feature/employeeSlice';


const store = configureStore({
  reducer:{
    auth:authSlice,
    admin:adminSlice,
    manager:managerSlice,

    company:companySlice,
    employee:employeeSlice
  }
});

export type HrmDispatch =typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector = useSelector.withTypes<RootState>();
export default store;