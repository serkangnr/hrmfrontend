import React, { useEffect, useState } from 'react'
import { IUpdateManager } from '../models/IUpdateManager'
import { HrmDispatch, useAppSelector } from '../store';
import { useDispatch } from 'react-redux';
import { fetchDeleteManager, fetchgetManager, fetchUpdateManager } from '../store/feature/managerSlice';
import Swal from 'sweetalert2';
import { fetchEditEmployee, fetchgetEmployeeByToken } from '../store/feature/employeeSlice';
import ContactCard from '../component/molecules/ContactCard';
import EmployeeSidebar from '../component/molecules/Sidebar/EmployeeSidebar';
import { fetchgetCompanyByToken, fetchUpdateCompanyByManager } from '../store/feature/companySlice';
import ManagerSidebar from '../component/molecules/Sidebar/ManagerSidebar';



function UpdateEmployee() {
  const dispatch = useDispatch<HrmDispatch>();
  const company = useAppSelector(state => state.company.editCompany);
  const token = useAppSelector(state => state.auth.token);
  const [editCompany, setEditCompany] = useState(company);



  useEffect(() => {
    dispatch(fetchgetCompanyByToken(token)).then((res) => {
      setEditCompany(res.payload.data)
    })

  }, [])

  const updateCompany = async () => {

    dispatch(fetchUpdateCompanyByManager({
      token: token,
      id: editCompany ? editCompany.id : '',
      name: editCompany ? editCompany.name : '',
      title: editCompany ? editCompany.title : '',
      description: editCompany ? editCompany.description : '',
      address: editCompany ? editCompany.address : '',
      phone: editCompany ? editCompany.phone : '',
      email: editCompany ? editCompany.email : '',
      website: editCompany ? editCompany.website : '',
      logo: editCompany ? editCompany.logo : '',
      sector: editCompany ? editCompany.sector : '',
      taxNumber: editCompany ? editCompany.taxNumber : '',
      taxOffice: editCompany ? editCompany.taxOffice : '',
      mersisNo: editCompany ? editCompany.mersisNo : '',
      vision: editCompany ? editCompany.vision : '',
      mission: editCompany ? editCompany.mission : '',
      country: editCompany ? editCompany.country : '',
      city: editCompany ? editCompany.city : '',
      founded: editCompany ? editCompany.founded : '',
      foundingYear: editCompany ? editCompany.foundingYear : '',
      linkedin: editCompany ? editCompany.linkedin : ''




    })).then(() => {
      Swal.fire('Güncelleme', 'Şirket bilgileri başarı ile güncellendi.', 'success').then(() => {
        dispatch(fetchgetCompanyByToken(token));
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
            <div className="d-flex justify-content-center mt-5 ">
              <img src="./image/logo.png" style={{ width: "200px", height: "200px" }} />


            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <form className="p-4" style={{
  maxWidth: '600px', 
  width: '100%', 
  backgroundColor: '#EEEEEE', 
  borderRadius: '10px', 
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', 
  height: '600px', 
  overflowY: 'auto'
}}>

                <div className="mb-3 input-group">
                  <label htmlFor="name" className="input-group-text">Ad</label>
                  <input type="text" className="form-control" id="name" name="name" placeholder="Ad" value={editCompany?.name || ''} onChange={evt => {
                    if (editCompany) setEditCompany({ ...editCompany, name: evt.target.value });
                  }} />
                </div>

                <div className="mb-3 input-group">
                  <label htmlFor="title" className="input-group-text">Başlık</label>
                  <input type="text" className="form-control" id="title" name="title" placeholder="Başlık" value={editCompany?.title || ''} onChange={evt => {
                    if (editCompany) setEditCompany({ ...editCompany, title: evt.target.value });
                  }} />
                </div>

                <div className="mb-3 input-group">
                  <label htmlFor="description" className="input-group-text">Açıklama</label>
                  <input type="text" className="form-control" id="description" name="description" placeholder="Açıklama" value={editCompany?.description || ''} onChange={evt => {
                    if (editCompany) setEditCompany({ ...editCompany, description: evt.target.value });
                  }} />
                </div>

                <div className="mb-3 input-group">
                  <label htmlFor="address" className="input-group-text">Adres</label>
                  <input type="text" className="form-control" id="address" name="address" placeholder="Adres" value={editCompany?.address || ''} onChange={evt => {
                    if (editCompany) setEditCompany({ ...editCompany, address: evt.target.value });
                  }} />
                </div>

                <div className="mb-3 input-group">
                  <label htmlFor="phone" className="input-group-text">Telefon</label>
                  <input type="text" className="form-control" id="phone" name="phone" placeholder="Telefon" value={editCompany?.phone || ''} onChange={evt => {
                    if (editCompany) setEditCompany({ ...editCompany, phone: evt.target.value });
                  }} />
                </div>

                <div className="mb-3 input-group">
                  <label htmlFor="email" className="input-group-text">Email</label>
                  <input type="email" className="form-control" id="email" name="email" placeholder="Email" value={editCompany?.email || ''} onChange={evt => {
                    if (editCompany) setEditCompany({ ...editCompany, email: evt.target.value });
                  }} />
                </div>

                <div className="mb-3 input-group">
                  <label htmlFor="website" className="input-group-text">Web Sitesi</label>
                  <input type="text" className="form-control" id="website" name="website" placeholder="Web Sitesi" value={editCompany?.website || ''} onChange={evt => {
                    if (editCompany) setEditCompany({ ...editCompany, website: evt.target.value });
                  }} />
                </div>

                <div className="mb-3 input-group">
                  <label htmlFor="logo" className="input-group-text">Logo</label>
                  <input type="text" className="form-control" id="logo" name="logo" placeholder="Logo" value={editCompany?.logo || ''} onChange={evt => {
                    if (editCompany) setEditCompany({ ...editCompany, logo: evt.target.value });
                  }} />
                </div>

                <div className="mb-3 input-group">
                  <label htmlFor="sector" className="input-group-text">Sektör</label>
                  <input type="text" className="form-control" id="sector" name="sector" placeholder="Sektör" value={editCompany?.sector || ''} onChange={evt => {
                    if (editCompany) setEditCompany({ ...editCompany, sector: evt.target.value });
                  }} />
                </div>

                <div className="mb-3 input-group">
                  <label htmlFor="taxNumber" className="input-group-text">Vergi Numarası</label>
                  <input type="text" className="form-control" id="taxNumber" name="taxNumber" placeholder="Vergi Numarası" value={editCompany?.taxNumber || ''} onChange={evt => {
                    if (editCompany) setEditCompany({ ...editCompany, taxNumber: evt.target.value });
                  }} />
                </div>

                <div className="mb-3 input-group">
                  <label htmlFor="taxOffice" className="input-group-text">Vergi Dairesi</label>
                  <input type="text" className="form-control" id="taxOffice" name="taxOffice" placeholder="Vergi Dairesi" value={editCompany?.taxOffice || ''} onChange={evt => {
                    if (editCompany) setEditCompany({ ...editCompany, taxOffice: evt.target.value });
                  }} />
                </div>

                <div className="mb-3 input-group">
                  <label htmlFor="mersisNo" className="input-group-text">Mersis No</label>
                  <input type="text" className="form-control" id="mersisNo" name="mersisNo" placeholder="Mersis No" value={editCompany?.mersisNo || ''} onChange={evt => {
                    if (editCompany) setEditCompany({ ...editCompany, mersisNo: evt.target.value });
                  }} />
                </div>

                <div className="mb-3 input-group">
                  <label htmlFor="vision" className="input-group-text">Vizyon</label>
                  <input type="text" className="form-control" id="vision" name="vision" placeholder="Vizyon" value={editCompany?.vision || ''} onChange={evt => {
                    if (editCompany) setEditCompany({ ...editCompany, vision: evt.target.value });
                  }} />
                </div>

                <div className="mb-3 input-group">
                  <label htmlFor="mission" className="input-group-text">Misyon</label>
                  <input type="text" className="form-control" id="mission" name="mission" placeholder="Misyon" value={editCompany?.mission || ''} onChange={evt => {
                    if (editCompany) setEditCompany({ ...editCompany, mission: evt.target.value });
                  }} />
                </div>

                <div className="mb-3 input-group">
                  <label htmlFor="country" className="input-group-text">Ülke</label>
                  <input type="text" className="form-control" id="country" name="country" placeholder="Ülke" value={editCompany?.country || ''} onChange={evt => {
                    if (editCompany) setEditCompany({ ...editCompany, country: evt.target.value });
                  }} />
                </div>

                <div className="mb-3 input-group">
                  <label htmlFor="city" className="input-group-text">Şehir</label>
                  <input type="text" className="form-control" id="city" name="city" placeholder="Şehir" value={editCompany?.city || ''} onChange={evt => {
                    if (editCompany) setEditCompany({ ...editCompany, city: evt.target.value });
                  }} />
                </div>

                <div className="mb-3 input-group">
                  <label htmlFor="founded" className="input-group-text">Kuruluş Tarihi</label>
                  <input type="text" className="form-control" id="founded" name="founded" placeholder="Kuruluş Tarihi" value={editCompany?.founded || ''} onChange={evt => {
                    if (editCompany) setEditCompany({ ...editCompany, founded: evt.target.value });
                  }} />
                </div>

                <div className="mb-3 input-group">
                  <label htmlFor="foundingYear" className="input-group-text">Kuruluş Yılı</label>
                  <input type="text" className="form-control" id="foundingYear" name="foundingYear" placeholder="Kuruluş Yılı" value={editCompany?.foundingYear || ''} onChange={evt => {
                    if (editCompany) setEditCompany({ ...editCompany, foundingYear: evt.target.value });
                  }} />
                </div>

                <div className="mb-3 input-group">
                  <label htmlFor="linkedin" className="input-group-text">LinkedIn</label>
                  <input type="text" className="form-control" id="linkedin" name="linkedin" placeholder="LinkedIn" value={editCompany?.linkedin || ''} onChange={evt => {
                    if (editCompany) setEditCompany({ ...editCompany, linkedin: evt.target.value });
                  }} />
                </div>

                <button onClick={updateCompany} type="button" className="btn btn-secondary w-100">Şirketi Güncelle</button>
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