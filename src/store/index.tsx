import { configureStore } from '@reduxjs/toolkit'
import React from 'react'

import { useSelector } from 'react-redux';
import { adminSlice,authSlice,managerSlice,companySlice,mailSlice, shiftSlice, equipmentSlice } from './feature';
import employeeSlice from './feature/employeeSlice';
import leaveSlice from './feature/leaveSlice';
import commentSlice from './feature/commentSlice';
import  expensesSlice from './feature/expensesSlice';



const store = configureStore({
  reducer:{
    auth:authSlice,
    admin:adminSlice,
    manager:managerSlice,
    mail:mailSlice,
    company:companySlice,
    employee:employeeSlice,
    leave:leaveSlice,
    shift:shiftSlice,

    comment:commentSlice,

    equipment:equipmentSlice,
    expenses:expensesSlice

  }
});

export type HrmDispatch =typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector = useSelector.withTypes<RootState>();
export default store;