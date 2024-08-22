import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { HrmDispatch } from '../store';
import { fetchLogin } from '../store/feature/authSlice';
import Swal from 'sweetalert2';



function Login() {
    const dispatch: HrmDispatch = useDispatch();
   

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

  const backToHome = () => {
    navigate('/');
  }


    const login = () => {
        dispatch(fetchLogin({ email, password })).then(data => {
            if (data.payload.code === 200) {

                if (data.payload.data.role === 'MANAGER') {
                    navigate('/mdashboard'); 
                    console.log(data);
                }
                else if (data.payload.data.role === 'ADMIN') {
                    navigate('/adashboard');
                    console.log(data);
                }
                else if (data.payload.data.role === 'SUPER_ADMIN') {
                    navigate('/adashboard');
                    console.log(data);
                }
                else if (data.payload.data.role === 'EMPLOYEE') {
                    navigate('/edashboard');
                    console.log(data);
                }
                
            }else{
                Swal.fire('Hata!',data.payload.message,'error');
            }

        })
    }

    const goToRegister = () => {
        navigate('/register');
    }




    return (

        <>
            <div className="background" style={{
                backgroundImage: 'url("https://st2.depositphotos.com/2124221/46809/i/450/depositphotos_468095768-stock-photo-abstract-multicolored-background-poly-pattern.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100%'
            }}>
                <div className="container" >
                    <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                                    <div className="d-flex justify-content-center py-4">
                                        <img onClick={backToHome} src="./image/logo.png" style={{ width: "200px", height: "200px",cursor: 'pointer' }} />
                                    </div>
                                    {/* End Logo */}
                                    <div className="card mb-3" style={{ backgroundColor: 'rgba(255, 255, 255,0.3)' }}>
                                        <div className="card-body">
                                            <div className="pt-4 pb-2">
                                                <h5 className="card-title text-center pb-0 fs-4">
                                                    Hesabınıza Giriş Yapın
                                                </h5>
                                                <p className="text-center small">
                                                    Giriş yapmak için mail adresinizi ve şifrenizi giriniz.
                                                </p>
                                            </div>
                                            <form className="row g-3 needs-validation" noValidate>
                                                <div className="col-12">

                                                    <div className="input-group has-validation">
                                                        <input onChange={(e) => setEmail(e.target.value)}
                                                            type="text"
                                                            name="email"
                                                            className="form-control"
                                                            id="yourEmail"
                                                            placeholder="Email"
                                                            required
                                                        />
                                                        <div className="invalid-feedback">
                                                            Lütfen emailinizi giriniz.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12">

                                                    <input onChange={(e) => setPassword(e.target.value)}
                                                        type="password"
                                                        name="password"
                                                        className="form-control"
                                                        id="yourPassword"
                                                        placeholder='Sifre'
                                                        required
                                                    />
                                                    <div className="invalid-feedback">
                                                        Lütfen şifrenizi giriniz'!
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            name="remember"
                                                            id="rememberMe"
                                                        />
                                                        <label className="form-check-label" htmlFor="rememberMe">
                                                            Beni Hatırla
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <button onClick={login} className="btn btn-primary w-100" type="button">
                                                        Giriş Yap
                                                    </button>
                                                </div>
                                                <div className="col-12">
                                                    <p className="small mb-0">
                                                        Hesabınız yok mu? <a href='#' onClick={goToRegister}>Hesap Oluştur</a>
                                                    </p>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
            </div>

        </>
    );
}

export default Login;


