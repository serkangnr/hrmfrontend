import React from 'react'
import Navbar from '../component/molecules/Navbar'
import Footer from '../component/molecules/Footer'
import { useNavigate } from 'react-router-dom'

function ShiftCard() {

    const navigate = useNavigate()

    const goToRegister = () => {
        navigate('/register');
      }
      
    return (
        <>
            <Navbar />


            <div className="background" style={{
                backgroundImage: 'url("https://st2.depositphotos.com/2124221/46809/i/450/depositphotos_468095768-stock-photo-abstract-multicolored-background-poly-pattern.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100%'
            }}>




                <div className="container">


                    <div className="container col-xxl-8 px-4 py-5">
                        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                            <div className="col-10 col-sm-8 col-lg-6">
                                <img src="https://cdn.prod.website-files.com/6113889e45c6e62ebf4ca212/61966329ab1e3c705707494d_group-8%20(4).svg" className="d-block mx-lg-auto img-fluid" alt="Vardiya Görseli" width="700" height="500" loading="lazy" />
                            </div>
                            <div className="col-lg-6">
                                <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Tek tıkla tüm vardiyayı düzene sokun</h1>
                                <p className="lead">Çalışanlar internete bağlı herhangi bir cihazdan uygun oldukları saatleri vardiya planına eklesin, siz de kendi biriminize ait vardiya planı ve tek tıkla raporlama yapın.</p>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                    <button type="button" onClick={goToRegister} className="btn btn-primary btn-lg-custom">ÜCRETSİZ DEMO TALEP EDİN</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container col-xxl-8 px-4 py-5">
                        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                            <div className="col-10 col-sm-8 col-lg-6">
                                <img src="https://cdn.prod.website-files.com/6113889e45c6e62ebf4ca212/6196a58ef76aeb311034c526_vardiya-yonetimi-01.svg" className="d-block mx-lg-auto img-fluid" alt="Vardiya Yönetimi" width="700" height="500" loading="lazy" />
                            </div>
                            <div className="col-lg-6">
                                <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Vardiya planını kolayca oluşturun</h1>
                                <p className="lead">Çalışanlar internete bağlı herhangi bir cihazdan uygun oldukları saatleri vardiya planına eklesin, siz de çalışanlarınızın müsaitlik durumunu e-posta veya mesaj trafiğine gerek kalmadan hızlıca takip edin ve yönetin.</p>
                            </div>
                        </div>
                    </div>

                    <div className="container col-xxl-8 px-4 py-5">
                        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                            <div className="col-10 col-sm-8 col-lg-6">
                                <img src="https://cdn.prod.website-files.com/6113889e45c6e62ebf4ca212/6196a58d920e8a22867693cc_vardiya-calisan-musait-degil%20(1).svg" className="d-block mx-lg-auto img-fluid" alt="Çalışan Müsaitliği" width="700" height="500" loading="lazy" />
                            </div>
                            <div className="col-lg-6">
                                <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Çalışan müsaitliği görüntüleme</h1>
                                <p className="lead">Çalışanlarınızın müsaitlik durumunu e-posta veya mesaj trafiğine gerek kalmadan kolayca takip edin ve yönetin.</p>
                            </div>
                        </div>
                    </div>

                    <div className="container col-xxl-8 px-4 py-5">
                        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                            <div className="col-lg-6">
                                <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Detaylı raporlama ve yazdırma</h1>
                                <p className="lead">Şirket birimi, tarih aralığı ve çalışan türüne göre özel raporlar, çalışan özelinde aylık vardiya dökümleri oluşturun. Günlük ve haftalık planların detaylı çıktılarını dilediğiniz formatta alın.</p>
                            </div>
                            <div className="col-10 col-sm-8 col-lg-6">
                                <img src="https://cdn.prod.website-files.com/6113889e45c6e62ebf4ca212/6196a58dab885f12dd82cfc3_kolay-ik-rapor-olusturuluyor.svg" className="d-block mx-lg-auto img-fluid" alt="Raporlama" width="700" height="500" loading="lazy" />
                            </div>
                        </div>
                    </div>

                    <div className="container col-xxl-8 px-4 py-5">
                        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                            <div className="col-10 col-sm-8 col-lg-6">
                                <img src="https://cdn.prod.website-files.com/6113889e45c6e62ebf4ca212/6196a58d9bad994ba5b9dc47_mola2.svg" loading="lazy" alt="Gelişmiş Ayarlar" />
                            </div>
                            <div className="col-lg-6">
                                <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Gelişmiş ayarlar</h1>
                                <p className="lead">Çalışma saatleri, vardiya türleri ve molalara ilişkin kuralları ihtiyaçlarınıza göre düzenleyin, hatasız vardiya planlamanın keyfini çıkarın.</p>
                            </div>
                        </div>
                    </div>
                    <div className="container col-xxl-8 px-4 py-5">
                        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                            <Footer />
                        </div>
                    </div>

                </div>

            </div>







        </>
    )
}

export default ShiftCard