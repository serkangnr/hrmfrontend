import React from 'react'
import { ICompanyContact } from '../../models/ICompanyContact'
import { clearToken } from '../../store/feature/authSlice';
import { useDispatch } from 'react-redux';
import { HrmDispatch } from '../../store';
import { useNavigate } from 'react-router-dom';

function ContactCard(props:ICompanyContact) {
  const dispatch = useDispatch<HrmDispatch>();

  const navigate=useNavigate();

const goToLogin=()=>{
  navigate("/login")
}

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(clearToken());
}
const logout=()=>{
  goToLogin()
  handleLogout()
}
  return (
    <>
    <div className="row" style={{ height: 40 }}>
          <div className="col-1">
            <img src="./image/tel-logo.png" className="float-end" style={{ width: 40 }} alt="Telephone Logo" />
          </div>
          <div className="col-2 pt-2">
            <p>{props.companyPhone}</p>
          </div>
          <div className="col-6" />
          <div className="col-1">
            <img src="./image/mail-logo.png" className="float-end" style={{ width: 40 }} alt="Mail Logo" />
          </div>
          <div className="col-1 pt-2">
            <p>{props.companyEmail}</p>

            
          </div>
          <div className="col-1  align-content-center justify-content-center">
          <button type="button"onClick={logout} className="btn  btn-warning">Çıkış Yap</button>
          
          </div>
        </div>
    </>
  )
}

export default ContactCard