import React from 'react'

import './ChardCard.css'
import Navbar from '../../component/molecules/Navbar'
import Footer from '../../component/molecules/Footer'
import { useNavigate } from 'react-router-dom'

function ChardCard() {

    const navigate = useNavigate()

    const goToRegister = () => {
        navigate('/register');
      }
      
    return (

        <>

            <Navbar />



            <div className="background">

                <div className="container">


                    <div className="container col-xxl-8 px-4 py-5">
                        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                            <div className="col-10 col-sm-8 col-lg-6">
                                <img src="https://cdn.prod.website-files.com/6113889e45c6e62ebf4ca212/6196a3271d8cb66a1a819738_group-84%20(1).svg" className="d-block mx-lg-auto img-fluid" alt="Ücret değerlendirme" loading="lazy" />
                            </div>
                            <div className="col-lg-6">
                                <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Ücret değerlendirme süreçlerini dijitalleştirin</h1>
                                <p className="lead">Çalışanlarınızın maaş değerlendirme ve güncelleme operasyonlarını son yönetici onayına kadar yönetin ve raporlayın.</p>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                    <button className="btn btn-primary btn-lg px-4 me-md-2" onClick={goToRegister} type="button">ÜCRETSİZ DEMO TALEP EDİN</button>
                                </div>
                            </div>
                        </div>

                        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">

                            <div className="col-lg-6">
                                <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Süreç Yönetim Yapısını Oluşturun</h1>
                                <p className="lead">Ücret değerlendirme süreçlerinizi etkin bir şekilde yönetmek için, birim yöneticilerinden son onayı verecek yöneticiye kadar tüm çalışanları sürece dahil edin. Bilgilendirilmesi gereken kişileri sisteme tanımlayarak, süreç boyunca gerekli iletişimi sağlayın. Ücret değerlendirme hiyerarşisini, organizasyonunuzun ihtiyaçlarına göre siz kurgulayın ve yönetin.</p>
                            </div>
                            <div className="col-10 col-sm-8 col-lg-6">
                                <img src="https://cdn.prod.website-files.com/6113889e45c6e62ebf4ca212/6196a3e023dedf77e671d68e_ucret-degerlendirme1.svg" className="d-block mx-lg-auto img-fluid" alt="Süreç Yönetim Yapısı" loading="lazy" />
                            </div>
                        </div>

                        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                            <div className="col-10 col-sm-8 col-lg-6">
                                <img src="https://cdn.prod.website-files.com/6113889e45c6e62ebf4ca212/6196a3e0cf885c6da86f5b60_ucret-degerlendirme2.svg" className="d-block mx-lg-auto img-fluid" alt="Maaş Güncelleme Süreci" loading="lazy" />
                            </div>
                            <div className="col-lg-6">
                                <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Maaş Güncelleme Sürecini Başlatın</h1>
                                <p className="lead">Sadece yıl sonlarında değil, istediğiniz zaman maaş güncelleme süreçlerini hızla başlatın. Çalışanlarınızın dönemsel veya bireysel maaş düzenlemeleri için etkili bir süreç oluşturun ve ilgili yöneticilerden astları için düzenleme tekliflerini toplayın. Bu sayede, maaş değerlendirme ve güncellemeleri için esnek ve dinamik bir yapı kurun.</p>
                            </div>
                        </div>

                        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">

                            <div className="col-lg-6">
                                <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Düzenlemeleri Değerlendirin ve Onaylayın</h1>
                                <p className="lead">Maaş teklifleri için zaman kaybettiren e-postalarla uğraşmanıza gerek yok. Birim yöneticilerinden gelen maaş artış tekliflerini hızla onaylayın veya tekrar değerlendirmelerini isteyin. Size sadece süreci takip etmek kalsın.</p>
                            </div>
                            <div className="col-10 col-sm-8 col-lg-6">
                                <img src="https://cdn.prod.website-files.com/6113889e45c6e62ebf4ca212/6196a3e0579e42ffa3cb9f35_ucret-degerlendirme3.svg" className="d-block mx-lg-auto img-fluid" alt="Düzenleme Değerlendirme" loading="lazy" />
                            </div>
                        </div>

                        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                            <div className="col-10 col-sm-8 col-lg-6">
                                <img src="https://cdn.prod.website-files.com/6113889e45c6e62ebf4ca212/6196a3e0c05f11057ecb8d52_ucret-degerlendirme4.svg" className="d-block mx-lg-auto img-fluid" alt="Raporlama" loading="lazy" />
                            </div>
                            <div className="col-lg-6">
                                <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Kolayca Raporlayın</h1>
                                <p className="lead">Tüm değerlendirme sonuçlarına tek tıkla ulaşın ve her şeyi detaylı olarak raporlayın. Raporları ihtiyacınız olan formatta kolayca indirin.</p>
                            </div>
                        </div>
                        <div className="row mt-3 full-width justify-content-center align-items-center" >
                            <Footer />
                        </div>
                    </div>

                </div>
            </div>









        </>
    )
}

export default ChardCard
