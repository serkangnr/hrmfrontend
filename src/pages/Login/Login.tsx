import React from 'react'



function Login() {
    return (
        <>
            <main>
                <div className="container">
                    <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                                    <div className="d-flex justify-content-center py-4">
                                        <img src="./image/logo.png" style={{width:"200px", height:"200px"}}  />
                                    </div>
                                    {/* End Logo */}
                                    <div className="card mb-3">
                                        <div className="card-body">
                                            <div className="pt-4 pb-2">
                                                <h5 className="card-title text-center pb-0 fs-4">
                                                    Login to Your Account
                                                </h5>
                                                <p className="text-center small">
                                                    Enter your Business Email &amp; password to login
                                                </p>
                                            </div>
                                            <form className="row g-3 needs-validation" noValidate>
                                                <div className="col-12">
                                                    <label htmlFor="yourEmail" className="form-label">
                                                        Business Mail
                                                    </label>
                                                    <div className="input-group has-validation">
                                                        <input
                                                            type="text"
                                                            name="email"
                                                            className="form-control"
                                                            id="yourEmail"
                                                            required
                                                        />
                                                        <div className="invalid-feedback">
                                                            Please enter your email.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <label htmlFor="yourPassword" className="form-label">
                                                        Password
                                                    </label>
                                                    <input
                                                        type="password"
                                                        name="password"
                                                        className="form-control"
                                                        id="yourPassword"
                                                        required
                                                    />
                                                    <div className="invalid-feedback">
                                                        Please enter your password!
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
                                                            Remember me
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <button className="btn btn-primary w-100" type="submit">
                                                        Login
                                                    </button>
                                                </div>
                                                <div className="col-12">
                                                    <p className="small mb-0">
                                                        Don't have an account? <a href="pages-register.html">Create an account</a>
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


