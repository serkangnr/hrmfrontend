import React, { useEffect, useState } from 'react'
import { IUpdateManager } from '../models/IUpdateManager'
import { HrmDispatch, useAppSelector } from '../store';
import { useDispatch } from 'react-redux';
import { fetchDeleteManager, fetchgetManager, fetchUpdateManager } from '../store/feature/managerSlice';
import Swal from 'sweetalert2';
import { fetchEditEmployee, fetchgetEmployeeByToken } from '../store/feature/employeeSlice';
import ContactCard from '../component/molecules/ContactCard';
import EmployeeSidebar from '../component/molecules/Sidebar/EmployeeSidebar';



function UpdateEmployee() {
    const dispatch = useDispatch<HrmDispatch>();
    const employee = useAppSelector(state => state.employee.editEmployee);
    const token = useAppSelector(state => state.auth.token);
    const [editEmployee, setEditEmployee] = useState(employee);
    


    useEffect(() => {
        dispatch(fetchgetEmployeeByToken(token)).then((res) => {
            setEditEmployee(res.payload.data)
        })

    }, [])
    
    const updateEmployee = async () => {
        
            dispatch(fetchEditEmployee({
                token: token,
                id: editEmployee ? editEmployee.id : '',
                name: editEmployee ? editEmployee.name : '',
                surname: editEmployee ? editEmployee.surname : '',
                identityNumber: editEmployee ? editEmployee.identityNumber : '',
                birthDate: editEmployee ? editEmployee.birthDate : '',
                email: editEmployee ? editEmployee.email : '',
                phoneNumber: editEmployee ? editEmployee.phoneNumber : '',
                address: editEmployee ? editEmployee.address : '',
                driverLicense: editEmployee ? editEmployee.driverLicense : '',
                avatar: editEmployee ? editEmployee.avatar : '',
                
                
                
            
            })).then(() => {
                Swal.fire('Güncelleme', 'Kullanıcı bilgileri başarı ile güncellendi.', 'success').then(() => {
                    dispatch(fetchgetEmployeeByToken(token));
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
            <EmployeeSidebar />
          </div>
          <div className="col-9">
          <div className="d-flex justify-content-center mt-5 ">
                          <img src="./image/logo.png" style={{ width: "200px", height: "200px" }} />


                        </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh',  }}>
          <form className="p-4" style={{ maxWidth: '600px', width: '100%', backgroundColor: '#EEEEEE', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
      
            <div className="mb-3 input-group">
              <label htmlFor="name" className="input-group-text">Ad</label>
              <input type="text" className="form-control" id="name" name="name" placeholder="Ad" defaultValue={editEmployee?.name} onChange={evt => {
                if (editEmployee)
                  setEditEmployee({ ...editEmployee, name: evt.target.value })
              }} />
            </div>
      
            <div className="mb-3 input-group">
              <label htmlFor="surname" className="input-group-text">Soyad</label>
              <input type="text" className="form-control" id="surname" name="surname" placeholder="Soyad" defaultValue={editEmployee?.surname} onChange={evt => {
                if (editEmployee)
                  setEditEmployee({ ...editEmployee, surname: evt.target.value })
              }} />
            </div>

            <div className="mb-3 input-group">
              <label htmlFor="identityNumber" className="input-group-text">Tc</label>
              <input type="text" className="form-control" id="identityNumber" name="identityNumber" placeholder="Tc" defaultValue={editEmployee?.identityNumber} onChange={evt => {
                if (editEmployee)
                  setEditEmployee({ ...editEmployee, identityNumber: evt.target.value })
              }} />
            </div>
      
            <div className="mb-3 input-group">
              <label htmlFor="email" className="input-group-text">Email</label>
              <input type="email" className="form-control" id="email" name="email" placeholder="Email" defaultValue={editEmployee?.email} onChange={evt => {
                if (editEmployee)
                  setEditEmployee({ ...editEmployee, email: evt.target.value })
              }} />
            </div>
      
            <div className="mb-3 input-group">
              <label htmlFor="phone" className="input-group-text">Telefon</label>
              <input type="text" className="form-control" id="phone" name="phone" placeholder="Telefon" defaultValue={editEmployee?.phoneNumber} onChange={evt => {
                if (editEmployee)
                  setEditEmployee({ ...editEmployee, phoneNumber: evt.target.value })
              }} />
            </div>
      
            <div className="mb-3 input-group">
              <label htmlFor="address" className="input-group-text">Adres</label>
              <input type="text" className="form-control" id="address" name="address" placeholder="Adres" defaultValue={editEmployee?.address} onChange={evt => {
                if (editEmployee)
                  setEditEmployee({ ...editEmployee, address: evt.target.value })
              }} />
            </div>

            <div className="mb-3 input-group">
              <label htmlFor="driverLicense" className="input-group-text">Ehliyet</label>
              <input type="text" className="form-control" id="driverLicense" name="driverLicense" placeholder="Ehliyet" defaultValue={editEmployee?.driverLicense} onChange={evt => {
                if (editEmployee)
                  setEditEmployee({ ...editEmployee, driverLicense: evt.target.value })
              }} />
            </div>
      
            <div className="mb-3 input-group">
              <label htmlFor="avatar" className="input-group-text">Avatar</label>
              <input type="text" className="form-control" id="avatar" name="avatar" placeholder="Avatar" defaultValue={editEmployee?.avatar} onChange={evt => {
                if (editEmployee)
                  setEditEmployee({ ...editEmployee, avatar: evt.target.value })
              }} />
            </div>
      
            
      
            <div className="mb-3 input-group">
              <label htmlFor="birthdate" className="input-group-text">Doğum Tarihi</label>
              <input type="text" className="form-control" id="birthdate" name="birthdate" placeholder="Doğum Tarihi" defaultValue={editEmployee?.birthDate} onChange={evt => {
                if (editEmployee)
                  setEditEmployee({ ...editEmployee, birthDate: evt.target.value })
              }} />
            </div>
      
            <button onClick={updateEmployee} type="button" className="btn btn-secondary w-100">Hesabımı Güncelle</button>
           <br />
          
            
         
          </form>
        </div>
          </div>
        </div>
        
        
        </div>
        
      </>
      
    )
}

export default UpdateEmployee