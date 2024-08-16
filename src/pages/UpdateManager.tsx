import React, { useEffect, useState } from 'react'
import { IUpdateManager } from '../models/IUpdateManager'
import { HrmDispatch, useAppSelector } from '../store';
import { useDispatch } from 'react-redux';
import { fetchDeleteManager, fetchgetManager, fetchUpdateManager } from '../store/feature/managerSlice';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import ContactCard from '../component/molecules/ContactCard';
import ManagerSidebar from '../component/molecules/Sidebar/ManagerSidebar';



function UpdateManager() {
    const dispatch = useDispatch<HrmDispatch>();
    const manager = useAppSelector(state => state.manager.manager);
    const token = useAppSelector(state => state.auth.token);
    const [editManager, setEditManager] = useState(manager);
    const id = useAppSelector(state => state.manager.manager?.id);
    const navigate = useNavigate();

    const goToChangePassword=()=>{
      navigate("/changepassword")
    }

    const deleteAccount = () => {
        if (editManager?.id) {
            dispatch(fetchDeleteManager(editManager?.id))
                .then((response) => {
                    if (response.payload.code === 200) {
                        Swal.fire('Başarı!', 'Manager silindi', 'success');
                    } else {
                        Swal.fire('Hata!', response.payload.message, 'error');
                        throw new Error(response.payload.message);
                    }
                })
                .catch((error) => {
                    console.error("Hata oluştu:", error);
                });
        } else {
            Swal.fire('Hata!', 'Manager ID mevcut değil.', 'error');
        }
    };


    console.log('manager bilgileri', editManager);
    console.log('token', token);

    useEffect(() => {
        dispatch(fetchgetManager(token)).then((res) => {
            setEditManager(res.payload.data)
        })

    }, [])
    
    const updateManager = async () => {
        
            dispatch(fetchUpdateManager({
                
                name: editManager ? editManager.name : '',
                surname: editManager ? editManager.surname : '',
                email: editManager ? editManager.email : '',
                phone: editManager ? editManager.phone : '',
                address: editManager ? editManager.address : '',
                avatar: editManager ? editManager.avatar : '',
                gender: editManager ? editManager.gender : '',
                token: token,
                birthdate: editManager ? editManager.birthdate : '',
            
            })).then(() => {
                Swal.fire('Güncelleme', 'Kullanıcı bilgileri başarı ile güncellendi.', 'success').then(() => {
                    dispatch(fetchgetManager(token));
                });
            })
        
    }


    return (
        <>
       <div className="contaniner " style={{ backgroundColor: '#EEEEEE' }}>
        <div className="row shadow" style={{ height: '50px', backgroundColor: '#EEEEEE' }}>
        <ContactCard companyPhone="5555555555" companyEmail="assim@gmail.com" />
        </div>
       <div className="row">
        <div className="col-2">
          <ManagerSidebar />
        </div>
        <div className="col-9">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',  }}>
          <form className="p-4" style={{ maxWidth: '600px', width: '100%', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
      
            <div className="mb-3 input-group">
              <label htmlFor="name" className="input-group-text">Ad</label>
              <input type="text" className="form-control" id="name" name="name" placeholder="Ad" defaultValue={editManager?.name} onChange={evt => {
                if (editManager)
                  setEditManager({ ...editManager, name: evt.target.value })
              }} />
            </div>
      
            <div className="mb-3 input-group">
              <label htmlFor="surname" className="input-group-text">Soyad</label>
              <input type="text" className="form-control" id="surname" name="surname" placeholder="Soyad" defaultValue={editManager?.surname} onChange={evt => {
                if (editManager)
                  setEditManager({ ...editManager, surname: evt.target.value })
              }} />
            </div>
      
            <div className="mb-3 input-group">
              <label htmlFor="email" className="input-group-text">Email</label>
              <input type="email" className="form-control" id="email" name="email" placeholder="Email" defaultValue={editManager?.email} onChange={evt => {
                if (editManager)
                  setEditManager({ ...editManager, email: evt.target.value })
              }} />
            </div>
      
            <div className="mb-3 input-group">
              <label htmlFor="phone" className="input-group-text">Telefon</label>
              <input type="text" className="form-control" id="phone" name="phone" placeholder="Telefon" defaultValue={editManager?.phone} onChange={evt => {
                if (editManager)
                  setEditManager({ ...editManager, phone: evt.target.value })
              }} />
            </div>
      
            <div className="mb-3 input-group">
              <label htmlFor="address" className="input-group-text">Adres</label>
              <input type="text" className="form-control" id="address" name="address" placeholder="Adres" defaultValue={editManager?.address} onChange={evt => {
                if (editManager)
                  setEditManager({ ...editManager, address: evt.target.value })
              }} />
            </div>
      
            <div className="mb-3 input-group">
              <label htmlFor="avatar" className="input-group-text">Avatar</label>
              <input type="text" className="form-control" id="avatar" name="avatar" placeholder="Avatar" defaultValue={editManager?.avatar} onChange={evt => {
                if (editManager)
                  setEditManager({ ...editManager, avatar: evt.target.value })
              }} />
            </div>
      
            <div className="mb-3 input-group">
              <label htmlFor="gender" className="input-group-text">Cinsiyet</label>
              <input type="text" className="form-control" id="gender" name="gender" placeholder="Cinsiyet" defaultValue={editManager?.gender} onChange={evt => {
                if (editManager)
                  setEditManager({ ...editManager, gender: evt.target.value })
              }} />
            </div>
      
            <div className="mb-3 input-group">
              <label htmlFor="birthdate" className="input-group-text">Doğum Tarihi</label>
              <input type="text" className="form-control" id="birthdate" name="birthdate" placeholder="Doğum Tarihi" defaultValue={editManager?.birthdate} onChange={evt => {
                if (editManager)
                  setEditManager({ ...editManager, birthdate: evt.target.value })
              }} />
            </div>
            <div className="mb-3 input-group">
            <a style={{ color: 'red' }} href=""onClick={goToChangePassword}>Şifremi Değiştir</a>
            </div>
           
      
            <button onClick={updateManager} type="button" className="btn btn-secondary w-100">Hesabımı Güncelle</button>
           <br />
          <br />
            <button onClick={deleteAccount} type="button" className="btn btn-danger w-100">Hesabımı Sil</button>
            
         
          </form>
        </div>
        </div>
       </div>
          

       
        </div>
        
      </>
      
    )
}

export default UpdateManager