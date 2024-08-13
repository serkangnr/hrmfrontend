import React, { useEffect, useState } from 'react'
import ContactCard from '../component/molecules/ContactCard'
import ManagerSidebar from '../component/molecules/Sidebar/ManagerSidebar'
import { useDispatch } from 'react-redux';
import { HrmDispatch, useAppSelector } from '../store';
import { fetchChangePassword } from '../store/feature/authSlice';
import Swal from 'sweetalert2';

function ChangePassword() {
    const dispatch = useDispatch<HrmDispatch>();
 
   const [oldPassword, setOldPassword] = useState("")
   const [newPassword, setNewPassword] = useState("")
   const token = useAppSelector(state => state.auth.token);

   const changePassword = () => {
       dispatch(fetchChangePassword({  token: token, oldPassword: oldPassword, newPassword: newPassword})).then((res) => {
          if (res.payload.code === 200) {
              Swal.fire('Başarı!', 'Şifre değiştirildi', 'success');
          } else {
              Swal.fire('Hata!', res.payload.message, 'error');
              throw new Error(res.payload.message);
          }
       })
   }
  return (
    <>
    <div className="contaniner " style={{ backgroundColor: '#EEEEEE' }}>
      <div className="row shadow" style={{ height: '50px', backgroundColor: '#EEEEEE' }}>
      <ContactCard companyPhone="5555555555" companyEmail="assim@gmail.com" />
      </div>
      <div className="row shadow">
        <div className="col-2">

          <ManagerSidebar />
          
        </div>
        <div className="col-9">
        <div className="d-flex justify-content-center mt-5">
                        <img src="./image/logo.png" style={{ width: "200px", height: "200px" }} />


                      </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
      <form className="p-4" style={{ maxWidth: '600px', width: '100%',  borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
 
        
 
        <div className="mb-3 input-group">
          <label htmlFor="password" className="input-group-text">Password</label>
          <input type="password" className="form-control" id="password" name="password" placeholder="password" onChange={evt =>setOldPassword(evt.target.value)} />
        </div>
 
        <div className="mb-3 input-group">
          <label htmlFor="newpassword" className="input-group-text">New Password</label>
          <input type="password" className="form-control" id="newpassword" name="newpassword" placeholder="newpassword" onChange={evt =>setNewPassword(evt.target.value)} />
        </div>
 
      
 
        
      <br />
        <button onClick={changePassword} type="button" className="btn btn-danger w-100">Şifremi Değiştir</button>
     
      </form>
    </div>
        </div>
      </div>
   
    </div>
    
  </>
  )
}

export default ChangePassword