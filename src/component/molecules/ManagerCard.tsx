import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { HrmDispatch, useAppSelector } from '../../store';
import { fetchgetAdminToken } from '../../store/feature/adminSlice';
import { IAdminList } from '../../models/IAdminList';
import './usercard/permit.css'
import { setToken } from '../../store/feature/authSlice';
import { fetchgetManager } from '../../store/feature/managerSlice';




function ManagerCard() {


  const dispatch = useDispatch<HrmDispatch>();
    
  const manager =useAppSelector(state=>state.manager.manager)

  const token = useAppSelector(state => state.auth.token);

  useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
          dispatch(setToken(token));
      }
  }, [dispatch]);

  useEffect(() => {
      if (token) {
          dispatch(fetchgetManager(token));
      }
  }, [dispatch, token]);
  





  return (
    <div className="card user-card shadow" >
    <img src={manager?.avatar} className=""  />
    <h2>{manager?.name}&nbsp;&nbsp;&nbsp;{manager?.surname}</h2>
    <div className="card-body">
      <h5 className="card-title"></h5>
      <p className="card-text"></p>
    </div>
    <ul className="list-group list-group-flush">
    <li className="list-group-item">Email: {manager?.email} </li>
      <li className="list-group-item">Telefon: {manager?.phone} </li>
      <li className="list-group-item">Adres:{manager?.address} </li>
    </ul>
    <div className="card-body">
     
    </div>
  </div>
  )
}

export default ManagerCard