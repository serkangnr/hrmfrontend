import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { HrmDispatch, useAppSelector } from '../../store';


import './usercard/permit.css'
import { setToken } from '../../store/feature/authSlice';
import { fetchgetEmployeeByToken } from '../../store/feature/employeeSlice';






function EmployeeCard() {


  const dispatch = useDispatch<HrmDispatch>();
    
  const employee =useAppSelector(state=>state.employee.employee)

  const token = useAppSelector(state => state.auth.token);
    console.log("eeeeee"+employee)
  useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
          dispatch(setToken(token));
      }
  }, [dispatch]);

  useEffect(() => {
      if (token) {
          dispatch(fetchgetEmployeeByToken(token));
      }
  }, [dispatch, token]);
  





  return (
    <div className="card user-card shadow" >
    <img src={employee?.avatar} className=""  />
    <h2>{employee?.name}&nbsp;&nbsp;&nbsp;{employee?.surname}</h2>
    <div className="card-body">
      <h5 className="card-title"></h5>
      <p className="card-text"></p>
    </div>
    <ul className="list-group list-group-flush">
    <li className="list-group-item">Email: {employee?.email} </li>
      <li className="list-group-item">Telefon: {employee?.phoneNumber} </li>
      <li className="list-group-item">Adres:{employee?.address} </li>
    </ul>
    <div className="card-body">
     
    </div>
  </div>
  )
}

export default EmployeeCard