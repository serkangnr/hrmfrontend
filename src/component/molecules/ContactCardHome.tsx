import React from 'react'
import { ICompanyContact } from '../../models/ICompanyContact'
import { clearToken } from '../../store/feature/authSlice';
import { useDispatch } from 'react-redux';
import { HrmDispatch } from '../../store';
import { useNavigate } from 'react-router-dom';

function ContactCardHome(props:ICompanyContact) {
 


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
          <div className="col-2 pt-2">
            <p>{props.companyEmail}</p>

            
          </div>
          
        </div>
    </>
  )
}

export default ContactCardHome