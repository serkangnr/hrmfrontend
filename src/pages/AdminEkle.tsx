import React, { useState } from 'react'


import AdminSidebar from '../component/molecules/Sidebar/AdminSidebar'
import { HrmDispatch } from '../store';
import { useDispatch } from 'react-redux';
import { fetchRegisterAdmin } from '../store/feature/authSlice';
import Swal from 'sweetalert2';


function AdminEkle() {
  const dispatch: HrmDispatch = useDispatch();

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const adminEkle = () => {
    dispatch(fetchRegisterAdmin({
      name, surname, email, password
    })).then(data => {
      if (data.payload.code === 200) {
        Swal.fire("Başarılı!", "Kullanıcı kayıt edilmiştir!", "success")

      }
    })
  }

  return (
    <>

      <div className="contaniner" >
        <div className="row" style={{ height: '50px', backgroundColor: 'black' }}>

        </div>
        <div className="row">
          <div className="col-2">

            <AdminSidebar /> </div>
          <div className="col-9">

           
              <div className="container">
                <section className="section register  d-flex flex-column  justify-content-center ">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                        <div className="d-flex justify-content-center ">
                          <img src="./image/logo.png" style={{ width: "200px", height: "200px" }} />


                        </div>
                        {/* End Logo */}
                        <div className="card mb-5" style={{ backgroundColor: 'rgba(255, 255, 255,0.3)' }}>
                          <div className="card-body">
                            <div className="pt-4 pb-2">
                              <h5 className="card-title text-center pb-0 fs-4">Admin Oluştur</h5>
                              <p className="text-center small">Kişisel bilgilerinizi girerek hesabınızı oluşturun</p>
                            </div>
                            <div className="row g-3 needs-validation" >
                              <div className="col-12 input-group">
                                <input type="text" onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Ad" aria-label="Ad" />
                                <input type="text" onChange={(e) => setSurname(e.target.value)} className="form-control" placeholder="Soyad" aria-label="Soyad" />
                                <div className="invalid-feedback">Lütfen adınızı ve soyadınızı giriniz!</div>
                              </div>
                              <div className="col-12 input-group ">
                                <input type="text" onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon2" />
                                {/* <span className="input-group-text" id="basic-addon2">@gmail.com</span> */}
                                <div className="invalid-feedback">Lütfen geçerli mail adresi giriniz!</div>
                              </div>
                              <div className="col-12">

                                <input type="tel" onChange={(e) => setPassword(e.target.value)} name="tel" className="form-control" id="tel" required placeholder='Password' />
                                <div className="invalid-feedback">Lütfen en az 8 haneli şifre giriniz</div>
                              </div>



                              <div className="col-12">

                              </div>

                              <div className="col-12">
                                <button onClick={adminEkle} className="btn btn-primary w-100" type="submit">Admin Ekle</button>
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
export default AdminEkle;