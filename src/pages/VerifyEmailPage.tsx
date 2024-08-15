import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HrmDispatch } from '../store';
import { fetchVerifyEmail } from '../store/feature/authSlice';
import Swal from 'sweetalert2';
import { useAppSelector } from '../store';
import { useLocation } from 'react-router-dom';
import { fetchRegistrationEndDate } from '../store/feature/managerSlice';

function VerifyEmailPage() {
    const dispatch = useDispatch<HrmDispatch>();
    const location = useLocation();
    const [email, setEmail] = useState<string | null>(null);
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false); // Buton durumunu takip etmek için

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const emailFromUrl = queryParams.get('email');

        console.log("Email from URL: ", emailFromUrl);

        if (emailFromUrl) {
            setEmail(emailFromUrl);
            dispatch(fetchVerifyEmail({ email: emailFromUrl })).then(data => {
                console.log("Response from fetchVerifyEmail: ", data);
                if (data.payload.code === 200) {
                    Swal.fire("Başarılı!", "Mail adresiniz onaylandı,lütfen paket seçiniz", "success");
                } else {
                    Swal.fire("Hata!", "Mail adresi doğrulanamadı.", "error");
                }
            });
        }
    }, [dispatch, location.search]);

    const paketSec = (days: number, mail: string) => {
        setIsButtonDisabled(true); // Butonları devre dışı bırak
        dispatch(fetchRegistrationEndDate({ days, mail })).then(data => {
            Swal.fire("Başarılı!", "Paket seçiminiz gerçekleşmiştir", "success");
        });
    };

    return (
        <div className="container">
            <div className="row justify-content-center align-items-center" style={{ height: '30vh' }}>
                <div className="col-12">
                    <h2 style={{ textAlign: 'center', color: 'blue', fontFamily: 'cursive' }}>
                        Mail adresiniz doğrulandı.Lütfen paket seçiniz. Admin onayından sonra sisteme giriş yapabilirsiniz.
                    </h2>
                </div>
            </div>
            <div className="row">
                <div className="row justify-content-center">
                    <div className="d-grid gap-2 col-5 mx-auto">
                        <button
                            className="btn btn-primary"
                            onClick={() => email && paketSec(15, email)}
                            style={{ height: '50px' }}
                            type="button"
                            disabled={isButtonDisabled} // Butonu devre dışı bırak
                        >
                            15 GÜN DENEME SÜRECİ
                        </button>
                        <button
                            className="btn btn-primary"
                            onClick={() => email && paketSec(90, email)}
                            style={{ height: '50px' }}
                            type="button"
                            disabled={isButtonDisabled} // Butonu devre dışı bırak
                        >
                            3 AYLIK PAKET 1000$
                        </button>
                        <button
                            className="btn btn-primary"
                            onClick={() => email && paketSec(180, email)}
                            style={{ height: '50px' }}
                            type="button"
                            disabled={isButtonDisabled} // Butonu devre dışı bırak
                        >
                            6 AYLIK PAKET 1800$
                        </button>
                        <button
                            className="btn btn-primary"
                            onClick={() => email && paketSec(360, email)}
                            style={{ height: '50px' }}
                            type="button"
                            disabled={isButtonDisabled} // Butonu devre dışı bırak
                        >
                            12 AYLIK PAKET 3500$
                        </button>
                    </div>
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

export default VerifyEmailPage;
