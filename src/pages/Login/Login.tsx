import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { HrmDispatch } from '../../store';
import { fetchLogin } from '../../store/feature/authSlice';



function Login() {
    const dispatch: HrmDispatch = useDispatch();
    const navigate = useNavigate();

    const [businessEmail, setBusinessEmail] = useState('');
    const [password, setPassword] = useState('');


    const login = () => {
        dispatch(fetchLogin({ businessEmail, password })).then(data => {
            if (data.payload.code === 200) {
                navigate('/');
            }
        }).then(() => {
           console.log('login');         
        })
    }

    const goToRegister = () => {
        navigate('/register');
    }




        return (

            <>
                <main>
                    <div className="container">
                        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                                        <div className="d-flex justify-content-center py-4">
                                            <img src="./image/logo.png" style={{ width: "200px", height: "200px" }} />
                                        </div>
                                        {/* End Logo */}
                                        <div className="card mb-3">
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
                                                            <input onChange={(e) => setBusinessEmail(e.target.value)}
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
                                                        <button onClick={login} className="btn btn-primary w-100" type="submit">
                                                            Giriş Yap
                                                        </button>
                                                    </div>
                                                    <div className="col-12">
                                                        <p className="small mb-0">
                                                            Hesabınız yok mu? <a onClick={goToRegister}>Hesap Oluştur</a>
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
                </main>
                <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
            </>
        );
    }

    export default Login;


