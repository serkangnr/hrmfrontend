import React, { useState } from 'react'
import ContactCard from '../component/molecules/ContactCard'
import ManagerSidebar from '../component/molecules/Sidebar/ManagerSidebar'
import { useDispatch } from 'react-redux'
import { HrmDispatch, useAppSelector } from '../store'
import { fetchRegisterEmployee } from '../store/feature/authSlice'
import Swal from 'sweetalert2'

function CalisanEkle() {
    const dispatch= useDispatch<HrmDispatch>();

    const token=useAppSelector(state=>state.auth.token);

    const [name,setName]=useState('');
    const [surname,setSurname]=useState('');
    const [identityNumber,setIdentityNumber]=useState('');
    const [email,setEmail]=useState('');
    const [phoneNumber,setPhoneNumber]=useState('');   
    const [address,setAddress]=useState('');
    const [position, setPosition] = useState('');
    const [department, setDepartment] = useState('');
    const [occupation, setOccupation] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [jobStartDate, setJobStartDate] = useState('');


    const AddEmployee = () => {
        dispatch(fetchRegisterEmployee({
            managerToken: token,
            name: name,
            surname: surname,
            identityNumber: identityNumber,
            email: email,
            phoneNumber: phoneNumber,
            address: address,
            position: position,
            department: department,
            occupation: occupation,
            companyName: companyName,
            jobStartDate: jobStartDate
        })).then(data => {
            console.log(data)
            if (data.payload.code === 200) {
              Swal.fire("Başarılı!", "Kullanıcı kayıt edilmiştir!", "success")
      
            }else {
                Swal.fire("Hata!", "Kullanıcı kayıt edilemedi!", "error");
            }
          })
    }


    
  return (
    <>

    <div className="contaniner" style={{ backgroundColor: '#EEEEEE' }} >
    <div className="row shadow" style={{ height: '50px', backgroundColor: '#EEEEEE' }}>
      <ContactCard companyPhone="5555555555" companyEmail="assim@gmail.com" />
      </div>
      <div className="row">
        <div className="col-2">

          <ManagerSidebar /> </div>
        <div className="col-9">

         
        <div className="container">
  <section className="section register d-flex flex-column justify-content-center">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 d-flex flex-column align-items-center justify-content-center">
          <div className="d-flex justify-content-center">
            <img src="./image/logo.png" style={{ width: "200px", height: "200px" }} alt="Logo" />
          </div>
          {/* End Logo */}
          <div className="card mb-5" style={{ backgroundColor: 'rgba(255, 255, 255,0.3)' }}>
            <div className="card-body">
              <div className="pt-4 pb-2">
                <h5 className="card-title text-center pb-0 fs-4">Çalışan Oluştur</h5>
                <p className="text-center small">Kişisel bilgilerinizi girerek hesabınızı oluşturun</p>
              </div>
              <div className="row g-3 needs-validation">
                <div className="col-12">
                  <label htmlFor="ad" className="form-label">Ad</label>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="ad" placeholder="Ad" required />
                  <div className="invalid-feedback">Lütfen adınızı giriniz!</div>
                </div>
                <div className="col-12">
                  <label htmlFor="soyad" className="form-label">Soyad</label>
                  <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} className="form-control" id="soyad" placeholder="Soyad" required />
                  <div className="invalid-feedback">Lütfen soyadınızı giriniz!</div>
                </div>
                <div className="col-12">
                  <label htmlFor="tc" className="form-label">TC Kimlik No</label>
                  <input type="text" value={identityNumber} onChange={(e) => setIdentityNumber(e.target.value)} className="form-control" id="tc" placeholder="TC Kimlik No" required />
                  <div className="invalid-feedback">Lütfen geçerli TC kimlik numarası giriniz!</div>
                </div>
                <div className="col-12">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" placeholder="Email" required />
                  <div className="invalid-feedback">Lütfen geçerli bir email adresi giriniz!</div>
                </div>
                <div className="col-12">
                  <label htmlFor="tel" className="form-label">Telefon Numarası</label>
                  <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="form-control" id="tel" placeholder="Telefon Numarası" required />
                  <div className="invalid-feedback">Lütfen geçerli bir telefon numarası giriniz!</div>
                </div>
                <div className="col-12">
                  <label htmlFor="adres" className="form-label">Adres</label>
                  <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control" id="adres" placeholder="Adres" required />
                  <div className="invalid-feedback">Lütfen adresinizi giriniz!</div>
                </div>
                <div className="col-12">
                  <label htmlFor="pozisyon" className="form-label">Pozisyon</label>
                  <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} className="form-control" id="pozisyon" placeholder="Pozisyon" required />
                  <div className="invalid-feedback">Lütfen pozisyonunuzu giriniz!</div>
                </div>
                <div className="col-12">
                  <label htmlFor="departman" className="form-label">Departman</label>
                  <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} className="form-control" id="departman" placeholder="Departman" required />
                  <div className="invalid-feedback">Lütfen departmanınızı giriniz!</div>
                </div>
                <div className="col-12">
                  <label htmlFor="meslek" className="form-label">Meslek</label>
                  <input type="text" value={occupation} onChange={(e) => setOccupation(e.target.value)} className="form-control" id="meslek" placeholder="Meslek" required />
                  <div className="invalid-feedback">Lütfen mesleğinizi giriniz!</div>
                </div>
                <div className="col-12">
                  <label htmlFor="sirketAdi" className="form-label">Şirket Adı</label>
                  <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} className="form-control" id="sirketAdi" placeholder="Şirket Adı" required />
                  <div className="invalid-feedback">Lütfen şirket adını giriniz!</div>
                </div>
                <div className="col-12">
                  <label htmlFor="iseBaslamaTarihi" className="form-label">İşe Başlama Tarihi</label>
                  <input type="text" value={jobStartDate} onChange={(e) => setJobStartDate(e.target.value)} className="form-control" id="iseBaslamaTarihi" placeholder="İşe Başlama Tarihi" required />
                  <div className="invalid-feedback">Lütfen işe başlama tarihini giriniz!</div>
                </div>
                
                <div className="col-12">
                  <button onClick={AddEmployee} className="btn btn-primary w-100" type="submit">Çalışan Ekle</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

          </div>


        </div>
      </div>


  



  </>
  )
}

export default CalisanEkle