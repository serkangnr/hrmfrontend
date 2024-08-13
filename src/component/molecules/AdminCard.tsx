import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { HrmDispatch, useAppSelector } from '../../store';
import { fetchgetAdminToken } from '../../store/feature/adminSlice';
import { IAdminList } from '../../models/IAdminList';
import './usercard/permit.css'




function AdminCard() {


    const dispatch = useDispatch<HrmDispatch>();
    const token = useAppSelector(state => state.auth.token)
   const admin =useAppSelector(state=>state.admin.admin)

    console.log('aaaaaaaaaaaaaa  '+token)
    console.log('aaaaaaaaaaaaaaa  '+ admin)
    useEffect(() => {
        dispatch(fetchgetAdminToken(token));

    }, [])
             





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