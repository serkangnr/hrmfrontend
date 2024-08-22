import React, { useState } from 'react';
import { HrmDispatch } from '../store';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchRegisterManager } from '../store/feature/authSlice';
import swal from 'sweetalert2';

function Register() {
  const dispatch: HrmDispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [company, setCompany] = useState('');
  const [taxNumber, setTaxNumber] = useState('');

  const register = () => {
    dispatch(fetchRegisterManager({
      name, surname, email, phone, address, company, taxNumber
    })).then(data => {
      if (data.payload.code === 200) {
        swal.fire("Başarılı!", "Kullanıcı kayıt edilmiştir!", "success")

      }
    })
  }

  const goToLogin = () => {
    navigate('/login');
  }

  return (
    <div className="background" style={{
      backgroundImage: 'url("https://st2.depositphotos.com/2124221/46809/i/450/depositphotos_468095768-stock-photo-abstract-multicolored-background-poly-pattern.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100%'
    }}>
      <div className="container">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="d-flex justify-content-center py-4">
                  <img src="./image/logo.png" style={{ width: "200px", height: "200px" }} />


                </div>
                {/* End Logo */}
                <div className="card mb-3" style={{ backgroundColor: 'rgba(255, 255, 255,0.3)' }}>
                  <div className="card-body">
                    <div className="pt-4 pb-2">
                      <h5 className="card-title text-center pb-0 fs-4">Hesap Oluştur</h5>
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

                        <input type="tel" onChange={(e) => setPhone(e.target.value)} name="tel" className="form-control" id="tel" required placeholder='Telefon' />
                        <div className="invalid-feedback">Lütfen geçerli telefon numarası giriniz!</div>
                      </div>
                      <div className="col-12">
                        <input type="adres" onChange={(e) => setAddress(e.target.value)} name="adres" className="form-control" id="adres" required placeholder='Adres' />
                        <div className="invalid-feedback">Lütfen yaşadığınız şehri giriniz!</div>
                      </div>
                      <div className="col-12 ">
                        <input type="sirket" onChange={(e) => setCompany(e.target.value)} name="adres" className="form-control" id="sirket" required placeholder='Şirket Adı' />
                        <div className="invalid-feedback">Lütfen şirket adını giriniz!</div>
                      </div>
                      <div className="col-12 ">
                        <input type="vergiNo" onChange={(e) => setTaxNumber(e.target.value)} name="vergiNo" className="form-control" id="vergiNo" required placeholder='Vergi Numarası' />
                        <div className="invalid-feedback">Lütfen yaşadığınız şehri giriniz!</div>
                      </div>
                      <div className="col-12">
                        <div className="form-check">
                          <input className="form-check-input" name="terms" type="checkbox" value="" id="acceptTerms" required />
                          <label className="form-check-label" htmlFor="acceptTerms">
                            <a className='text-secondary small'> Aydınlatma Metni uyarınca kişisel verilerimin ASSİM İK tarafından işlenmesine rıza veriyorum.</a>
                          </label>
                          <div className="invalid-feedback">You must agree before submitting.</div>
                        </div>
                      </div>
                      
                      <div className="col-12">
                        <button onClick={register} className="btn btn-primary w-100" type="submit">Hesap Oluştur</button>
                      </div>
                      <div className="col-12">
                        <p className="small mb-0">Zaten hesabın var mı? <a onClick={goToLogin} href="#">Giriş Yap</a></p>
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


  );
}

export default Register;
