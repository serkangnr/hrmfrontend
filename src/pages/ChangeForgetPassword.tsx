import React, { useEffect, useState } from 'react'
import ContactCard from '../component/molecules/ContactCard'
import ManagerSidebar from '../component/molecules/Sidebar/ManagerSidebar'
import { useDispatch } from 'react-redux';
import { HrmDispatch, useAppSelector } from '../store';
import { fetchChangePassword, fetchForgetChangePassword, setToken } from '../store/feature/authSlice';
import Swal from 'sweetalert2';
import { useLocation } from 'react-router-dom';

function ChangePassword() {
  const dispatch = useDispatch<HrmDispatch>();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const emailFromUrl = queryParams.get('email');
    setEmail(emailFromUrl || '');
  }, [location.search]);
  

  const changePassword = () => {
    
    
      dispatch(fetchForgetChangePassword({ email:email, password:password })).then(data => {
        console.log("Response from fetchForgetChangePassword: ", data);
        if (data.payload.code === 200) {
          Swal.fire("Başarılı!", "Şifreniz başarıyla değiştirildi.", "success");
        } else {
          Swal.fire("Hata!", "Şifre değiştirilemedi.", "error");
        }
      });
    
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center" style={{ height: '50vh', marginTop: '100px' }}>
        <div className="col-12">
          <form
            className="p-4 mx-auto"
            style={{
              maxWidth: '600px',
              width: '100%',
              borderRadius: '10px',
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
            }}
          >
            <div className="mb-3 input-group">
              <label htmlFor="newpassword" className="input-group-text">
                Yeni Şifre
              </label>
              <input
                type="password"
                className="form-control"
                id="newpassword"
                name="newpassword"
                placeholder="Yeni şifre"
                onChange={(evt) => setPassword(evt.target.value)}
              />
            </div>
            <button
              onClick={changePassword}
              type="button"
              className="btn btn-danger w-100"
            >
              Şifremi Değiştir
            </button>
          </form>
        </div>
        <div className="col-12 d-flex justify-content-center mt-4">
          <img
            className="img-fluid"
            src="https://i.pinimg.com/736x/6e/ae/4a/6eae4a13af8db638a5e6bc344364646a.jpg"
            alt="Example"
            style={{ maxWidth: '300px', borderRadius: '10px' }}
          />
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;