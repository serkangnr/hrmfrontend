import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { HrmDispatch, useAppSelector } from '../../store';
import { fetchgetAdminToken } from '../../store/feature/adminSlice';
import { IAdminList } from '../../models/IAdminList';
import './usercard/permit.css'
import { setToken } from '../../store/feature/authSlice';




function AdminCard() {


  const dispatch = useDispatch<HrmDispatch>();
    
  const admin =useAppSelector(state=>state.admin.admin)

  const token = useAppSelector(state => state.auth.token);

  useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
          dispatch(setToken(token));
      }
  }, [dispatch]);

  useEffect(() => {
      if (token) {
          dispatch(fetchgetAdminToken(token));
      }
  }, [dispatch, token]);
  





  return (
    <div className="card user-card shadow" >
    <img src={admin?.avatar} className=""  />
    <h2>{admin?.name}&nbsp;&nbsp;&nbsp;{admin?.surname}</h2>
    <div className="card-body">
      <h5 className="card-title"></h5>
      <p className="card-text"></p>
    </div>
    <ul className="list-group list-group-flush">
    <li className="list-group-item">Email: {admin?.email} </li>
      <li className="list-group-item">Telefon: {admin?.phone} </li>
      <li className="list-group-item">Adres:{admin?.address} </li>
    </ul>
    <div className="card-body">
     
    </div>
  </div>
  )
}

export default AdminCard