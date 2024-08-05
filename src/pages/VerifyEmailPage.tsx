import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HrmDispatch } from '../store'
import { fetchVerifyEmail } from '../store/feature/authSlice';
import Swal from 'sweetalert2';
import { useEffect } from 'react';
import { useAppSelector } from '../store';

function VerifyEmailPage() {
    const dispatch = useDispatch<HrmDispatch>();
    const email = useAppSelector(state => state.auth.email)
    const password = useAppSelector(state => state.auth.password)
    

    useEffect(() => {
        dispatch(fetchVerifyEmail({ email,password })).then(data => {
            if (data.payload.code === 200) {
                Swal.fire("Basarili!", "Mail adresiniz onaylandi.", "success")
            }
        })
     
    }, []);
    
    
    return (

        <>

            <div className="container ">

                <div className="row justify-content-center align-items-center align-content-center " style={{ height: '45vh' }}>
                    <div className="col-12">
                        <h1 style={{ textAlign: 'center', color: 'blue', fontFamily: 'cursive' }}  >Mail adresiniz dogrulandi.Admin onayindan sonra sisteme giris yapabilirsiniz.</h1>

                    </div>
                </div>

                
                <div className="row justify-content-center align-items-center align-content-center ">
                    <div className="col-4">

                    </div>
                    <div className="col-4">
                        <img className="img-fluid mx-auto" src="https://i.pinimg.com/736x/6e/ae/4a/6eae4a13af8db638a5e6bc344364646a.jpg" />
                    </div>
                    <div className="col-4">

                    </div>
                </div>
            </div>

        </>

    )
}

export default VerifyEmailPage