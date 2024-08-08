import { configureStore } from '@reduxjs/toolkit'
import React from 'react'

import { useSelector } from 'react-redux';
<<<<<<< HEAD
import { adminSlice,authSlice,managerSlice } from './feature';
=======
import { adminSlice,authSlice,companySlice } from './feature';
>>>>>>> master

const store = configureStore({
  reducer:{
    auth:authSlice,
    admin:adminSlice,
<<<<<<< HEAD
    manager:managerSlice

=======
    company:companySlice
>>>>>>> master
  }
});

export type HrmDispatch =typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector = useSelector.withTypes<RootState>();
export default store;