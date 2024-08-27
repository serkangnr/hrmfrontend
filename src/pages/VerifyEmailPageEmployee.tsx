import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HrmDispatch } from '../store';
import { fetchVerifyEmail } from '../store/feature/authSlice';
import Swal from 'sweetalert2';
import { useAppSelector } from '../store';
import { useLocation } from 'react-router-dom';
import { fetchRegistrationEndDate } from '../store/feature/managerSlice';

function VerifyEmailPageEmployee() {
    const dispatch = useDispatch<HrmDispatch>();
    const location = useLocation();
    const [email, setEmail] = useState<string | null>(null);
    

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const emailFromUrl = queryParams.get('email');

        console.log("Email from URL: ", emailFromUrl);

        if (emailFromUrl) {
            setEmail(emailFromUrl);
            dispatch(fetchVerifyEmail({ email: emailFromUrl })).then(data => {
                console.log("Response from fetchVerifyEmail: ", data);
                if (data.payload.code === 200) {
                    Swal.fire("Başarılı!", "Mail adresiniz onaylandı", "success");
                } else {
                    Swal.fire("Hata!", "Mail adresi doğrulanamadı.", "error");
                }
            });
        }
    }, [dispatch, location.search]);

   

    return (
        <div className="container">
            <div className="row justify-content-center align-items-center" style={{ height: '30vh' }}>
                <div className="col-12">
                    <h2 style={{ textAlign: 'center', color: 'blue', fontFamily: 'cursive' }}>
                        Mail adresiniz doğrulandı.
                    </h2>
                </div>
            </div>
           
            <div className="row justify-content-center align-items-center align-content-center">
                <div className="col-4"></div>
                <div className="col-4">
                    <img
                        className="img-fluid mx-auto"
                        src="https://i.pinimg.com/736x/6e/ae/4a/6eae4a13af8db638a5e6bc344364646a.jpg"
                        alt="Example"
                    />
                </div>
                <div className="col-4"></div>
            </div>
        </div>
    );
}

export default VerifyEmailPageEmployee;
