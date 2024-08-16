import React from 'react'
import { useNavigate } from 'react-router-dom';

function AdvertCard() {
    const navigate = useNavigate()

    const goToRegister = () => {
        navigate('/register');
      }
     


    return (
        <>
            <h2>Çalışanlarınızı Yönetmek ASSİM İK İle Artık Çok Kolay</h2>
            <div className="marquee m-2">
                <span>
                    ASSİM İNSAN KAYNAKLARI PLATFORMU&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Personel Yönetimi Yapın&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    İşe Alım ve Aday Takip Süreçlerini Yönetin&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Vardiya Planı Yapın&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Performans Değerlendirmesi Yapın&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    İzin Günlerini Takip Edin&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    ASSİM İNSAN KAYNAKLARI PLATFORMU
                </span>
            </div>
            <div>
                <button type="button" onClick={goToRegister} className="btn btn-success m-5 btn-lg rounded-pill" style={{ backgroundColor: "rgb(142, 167, 233)" }}>
                    HEMEN 15 GÜN ÜCRETSİZ DENEYİN
                </button>
            </div>
        </>
    )
}

export default AdvertCard