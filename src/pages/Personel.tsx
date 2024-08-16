import React from 'react'
import Navbar from '../component/molecules/Navbar'
import Footer from '../component/molecules/Footer'
import { useNavigate } from 'react-router-dom'

function Personel() {
    const navigate = useNavigate()

    const goToRegister = () => {
        navigate('/register');
      }
      
    return (
        <>
            <Navbar />
            <div className="background">
                <div className="container ">

                    <div className="row text-center">
                        <div className="col-2"></div>
                        <div className="col-8">
                            <div className="row">
                                <header>
                                    <h1>
                                        İK süreçlerini tek uygulamadan yönetin, takip edin, arşivleyin
                                    </h1>
                                </header>
                            </div>
                            <div className="row text-center text-md-center">
                                <div className="col-12">
                                    <p>
                                        Personel Yönetimi uygulaması ile özlük, izin, harcama, puantaj,
                                        mesai, zimmet, eğitim ve çok daha fazlasını tek uygulamadan
                                        yönetin. İK operasyonlarınızdaki iş yükünüzü %76’ya kadar
                                        azaltın hata payını ve zaman kaybını minimuma indirin.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-2"></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-xxl-4 my-5 mx-auto">
                            <div className="d-grid gap-2">
                                <button
                                    onClick={goToRegister}
                                    style={{ borderRadius: '50px' }}
                                    className="btn btn-primary"
                                    type="button"
                                >
                                    ÜCRETSİZ DEMO TALEP EDİN
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8">
                            <img
                                src="./image/61604fc8e2a4399ad198a8e7_personel-illustration.svg"
                                alt=""
                            />
                        </div>
                        <div className="col-2"></div>
                    </div>
                    <div className="row text-center mt-5">
                        <div className="col-2"></div>
                        <div className="col-8">
                            <div className="row">
                                <header>
                                    <h1>
                                        Kolay İK personel yönetim süreçlerinizi nasıl kolaylaştırır?
                                    </h1>
                                </header>
                            </div>
                            <div className="row text-center mt-4 justify-content-center">
                                <div className="col-11">
                                    <p>
                                        İnsan kaynakları operasyonlarınızı şirket akışınıza uygun bir
                                        şekilde Kolay İK üzerinde kurgulayın. Yöneticilerden çalışanlara
                                        herkes kendi hesaplarından izin, fazla mesai, harcama, avans
                                        taleplerinde bulunsun, size sadece kolayca yönetmek kalsın.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-2"></div>
                    </div>
                    <div className="row">
                        <div className="container col-xxl-8 px-4 py-5">
                            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                                <div className="col-10 col-sm-8 col-lg-6">
                                    <img
                                        src="./image/61605478db55597d39190c4b_1-1.svg"
                                        className="d-block mx-lg-auto img-fluid"
                                        alt="Bootstrap Themes"
                                        width="700"
                                        height="500"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <h3 className="fw-bold text-body-emphasis lh-1 mb-3">
                                        Çalışan bilgilerini tek bir yerde toplayın
                                    </h3>
                                    <p className="lead text-body-secondary text-">
                                        Kolay İK ile özlük dosyalarınızı tek bir platformda güvenli bir
                                        şekilde saklayın. Çalışanın işe giriş anından çıkışına kadar
                                        ihtiyacınız olan tüm bilgilere kolaylıkla ulaşın, güncel veriye
                                        her an erişin.
                                    </p>

                                    <div className="row">
                                        <div className="col-1">
                                            <i className="fa-solid fa-square-check" style={{ color: '#0091ff' }}></i>
                                        </div>
                                        <div className="col-11">
                                            <label
                                            >Şirketinizin çalışma saatlerine özel kurgu</label
                                            ><br />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-1">
                                            <i className="fa-solid fa-square-check" style={{ color: '#0091ff' }}></i>
                                        </div>
                                        <div className="col-11">
                                            <label
                                            >Şirket ihtiyaçlarınıza uygun özelleştirilebilir alanlar</label
                                            >
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-1">
                                            <i className="fa-solid fa-square-check" style={{ color: '#0091ff' }}></i>
                                        </div>
                                        <div className="col-11">
                                            <label >Çalışan evraklarını depolama ve arşivleme</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-1">
                                            <i className="fa-solid fa-square-check" style={{ color: '#0091ff' }}></i>
                                        </div>
                                        <div className="col-11">
                                            <label
                                            >Çalışan geçmişi ve kariyer adımlarını görüntüleme
                                            </label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-1">
                                            <i className="fa-solid fa-square-check" style={{ color: '#0091ff' }}></i>
                                        </div>
                                        <div className="col-11">
                                            <label >Takip edilmesi gereken özel günler için akıllı hatırlatmalar</label>
                                        </div>
                                    </div>


                                    <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-4">
                                        <button
                                             onClick={goToRegister}
                                            style={{ borderRadius: '50px' }}
                                            type="button"
                                            className="btn btn-outline-primary btn-lg px-4"
                                        >
                                            DEMO TALEP EDİN
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="container col-xxl-8 px-4 py-5">
                            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                                <div className="col-lg-6">
                                    <h3 className="fw-bold text-body-emphasis lh-1 mb-3">
                                        İzin süreçlerini kolayca yönetin
                                    </h3>
                                    <p className="lead text-body-secondary text-">
                                        Kolay İK’nın hazır kurgusu sayesinde izin süreçlerini yasal
                                        mevzuatlara ve güncel kanunlara göre yönetin. Şirket, şube veya
                                        departmana özel onay akışları belirleyin, çakışan izinleri tek
                                        bakışta görün ve izin yönetim süreçlerinde %84 zaman kazanın.
                                    </p>
                                    <div className="row">
                                        <div className="col-1">
                                            <i className="fa-solid fa-square-check" style={{ color: '#0091ff' }}></i>
                                        </div>
                                        <div className="col-11">
                                            <label
                                            >Mobil uygulama üzerinden kolay izin talebi ve yönetici
                                                onayı</label
                                            ><br />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-1">
                                            <i className="fa-solid fa-square-check" style={{ color: '#0091ff' }}></i>
                                        </div>
                                        <div className="col-11">
                                            <label
                                            >Çalışan ve yöneticiler için izin hak ediş ve bakiye
                                                göstergeleri</label
                                            >
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-1">
                                            <i className="fa-solid fa-square-check" style={{ color: '#0091ff' }}></i>
                                        </div>
                                        <div className="col-11">
                                            <label >Talep ve onay e-postaları</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-1">
                                            <i className="fa-solid fa-square-check" style={{ color: '#0091ff' }}></i>
                                        </div>
                                        <div className="col-11">
                                            <label
                                            >Harcama ve masraf bilgileri ile ödeme trafiğini yönetme
                                            </label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-1">
                                            <i className="fa-solid fa-square-check" style={{ color: '#0091ff' }}></i>
                                        </div>
                                        <div className="col-11">
                                            <label>Bordroya uygun izin raporları </label>
                                        </div>
                                    </div>



                                    <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-4">
                                        <button
                                            onClick={goToRegister}
                                            style={{ borderRadius: '50px' }}
                                            type="button"
                                            className="btn btn-outline-primary btn-lg px-4"
                                        >
                                            DEMO TALEP EDİN

                                        </button>
                                    </div>
                                </div>
                                <div className="col-10 col-sm-8 col-lg-6">
                                    <img
                                        src="./image/660180638862c69404131801_mazaret izni türkçe.svg"
                                        className="d-block mx-lg-auto img-fluid"
                                        alt="Bootstrap Themes"
                                        width="700"
                                        height="500"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="container col-xxl-8 px-4 py-5">
                            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                                <div className="col-10 col-sm-8 col-lg-6">
                                    <img
                                        src="./image/img4.svg"
                                        className="d-block mx-lg-auto img-fluid"
                                        alt="Bootstrap Themes"
                                        width="700"
                                        height="500"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <h3 className="fw-bold text-body-emphasis lh-1 mb-3">
                                        Puantajı tek ekranda takip edin
                                    </h3>
                                    <p className="lead text-body-secondary text-">
                                        Kolay İK Zaman Yönetimi modülü ile çalışanların işe giriş-çıkış saatleri, devamsızlık günleri, molaları, resmi tatiller, bireysel izinleri, eksik ve fazla mesaileri gibi tüm verilerinizi tek ekranda görüntüleyin.
                                    </p>

                                    <div className="row">
                                        <div className="col-1">
                                            <i className="fa-solid fa-square-check" style={{ color: '#0091ff' }}></i>
                                        </div>
                                        <div className="col-11">
                                            <label
                                            >Uyuşmazlık uyarı sistemi</label
                                            ><br />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-1">
                                            <i className="fa-solid fa-square-check" style={{ color: '#0091ff' }}></i>
                                        </div>
                                        <div className="col-11">
                                            <label
                                            >Bordroya hazır raporlama</label
                                            >
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-1">
                                            <i className="fa-solid fa-square-check" style={{ color: '#0091ff' }}></i>
                                        </div>
                                        <div className="col-11">
                                            <label >Çalışma stiline göre özelleştirilebilir kurgu</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-1">
                                            <i className="fa-solid fa-square-check" style={{ color: '#0091ff' }}></i>
                                        </div>
                                        <div className="col-11">
                                            <label
                                            >İzin gibi taleplerin puantaja otomatik yansıması
                                            </label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-1">
                                            <i className="fa-solid fa-square-check" style={{ color: '#0091ff;' }}></i>
                                        </div>
                                        <div className="col-11">
                                            <label>Farklı derecelerde yetkilendirmeler</label>
                                        </div>
                                    </div>


                                    <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-4">
                                        <button
                                            onClick={goToRegister}
                                            style={{ borderRadius: '50px' }}
                                            type="button"
                                            className="btn btn-outline-primary btn-lg px-4 "
                                        >
                                            DEMO TALEP EDİN
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="container col-xxl-8 px-4 py-5">
                        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                            <div className="col-lg-6">
                                <h3 className="fw-bold text-body-emphasis lh-1 mb-3">
                                    Bilgilerinizi tek tıkla raporlayın
                                </h3>
                                <p className="lead text-body-secondary text-">
                                    Kolay İK'da tutulan her veriyi dilediğiniz gibi raporlayın. Çalışanların özlük dosyaları, kalan izin bakiyeleri, fazla mesai, harcama, prim ve avanslarına dair ihtiyacınız olan verileri dahil ederek size özel raporlar hazırlayın, dilediğiniz formatta indirin.
                                </p>
                                <div className="row">
                                    <div className="col-1">
                                        <i className="fa-solid fa-square-check" style={{ color: '#0091ff' }}></i>
                                    </div>
                                    <div className="col-11">
                                        <label
                                        >Kendin oluştur özelliği ile ihtiyaca yönelik rapor çekme</label
                                        ><br />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-1">
                                        <i className="fa-solid fa-square-check" style={{ color: '#0091ff' }}></i>
                                    </div>
                                    <div className="col-11">
                                        <label
                                        >Farklı formatta rapor oluşturma ve indirme</label
                                        >
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-1">
                                        <i className="fa-solid fa-square-check" style={{ color: '#0091ff' }}></i>
                                    </div>
                                    <div className="col-11">
                                        <label >Mesai ve izin bakiye raporları</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-1">
                                        <i className="fa-solid fa-square-check" style={{ color: '#0091ff' }}></i>
                                    </div>
                                    <div className="col-11">
                                        <label
                                        >Puantörler için özel yetkilendirme
                                        </label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-1">
                                        <i className="fa-solid fa-square-check" style={{ color: '#0091ff' }}></i>
                                    </div>
                                    <div className="col-11">
                                        <label >Takip edilmesi gereken özel günler için akıllı hatırlatmalar</label>
                                    </div>
                                </div>



                                <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-4">
                                    <button
                                        onClick={goToRegister}
                                        style={{ borderRadius: '50px' }}
                                        type="button"
                                        className="btn btn-outline-primary btn-lg px-4"
                                    >
                                        DEMO TALEP EDİN

                                    </button>
                                </div>
                            </div>
                            <div className="col-10 col-sm-8 col-lg-6">
                                <img
                                    src="./image/img5.svg"
                                    className="d-block mx-lg-auto img-fluid"
                                    alt="Bootstrap Themes"
                                    width="700"
                                    height="500"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <div className="row">
                            <div className="col-10"></div>
                            <div className="col-2"><h2>Ek Özellikler</h2></div>
                        </div>

                    </div>
                    <div className="col-5">
                        <div className="row">
                            <div className="col-4"></div>
                            <div className="col-8">
                                <div className="row"> <img style={{ width: '120px' }} src="./image/img6.svg" /></div>
                                <div className="row mt-2"><label style={{ fontWeight: 'bolder', fontSize: 'x-large' }}>Yüksek Veri Güvenliği</label></div>
                                <div className="row">
                                    <p>Kolay İK ile kullanıcılar arasındaki tüm veriler banka standartlarında SSL sertifikaları ile şifrelenir.</p>
                                </div>
                                <div className="row mt-5"> <img style={{ width: '120px' }} src="./image/img8.svg" /></div>
                                <div className="row mt-3"><label style={{ fontWeight: 'bolder', fontSize: 'x-large' }} >Uygun Fiyat</label></div>
                                <div className="row mt-4">
                                    <p>Kolay İK ile kullanıcılar arasındaki tüm veriler banka standartlarında SSL sertifikaları ile şifrelenirÇalışan sayınıza göre şirketinize uygun paketleri seçin, beğenirseniz kullanın, kullandığınız kadar ödeyin..</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="row">
                            <div className="col-2"></div>
                            <div className="col-8">
                                <div className="row"> <img style={{ width: '120px' }} src="./image/img7.svg" /></div>
                                <div className="row mt-2"><label style={{ fontWeight: 'bolder', fontSize: 'x-large' }} >Ücretsiz Uygulamalar</label></div>
                                <div className="row mt-3">
                                    <p>Yemek kartı, banka entegrasyonu, fazla mesai, puantaj gibi ücretsiz uygulamaları hemen kullanın.</p>
                                </div>
                                <div className="row mt-5"> <img style={{ width: '120px' }} src="./image/img9.svg" /></div>
                                <div className="row mt-2"><label style={{ fontWeight: 'bolder', fontSize: 'x-large' }}  >Ücretsiz Uygulamalar</label></div>
                                <div className="row mt-3">
                                    <p>Yemek kartı, banka entegrasyonu, fazla mesai, puantaj gibi ücretsiz uygulamaları hemen kullanın.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
                            <div className="col-md-6 p-lg-5 mx-auto my-5">
                                <i className="fa-solid fa-ticket fa-rotate-by fa-xl" ></i>
                                <label style={{ fontSize: 'x-large' }} className="display-6 fw-bold mt-2">Hemen 15 gün ücretsiz deneyin</label>
                                <h6 className="fw-normal text-muted mb-3">Hiçbir kurulum ve kredi kartı gerektirmeden kullanmaya başlayın.</h6>
                                <div className="d-flex gap-3 justify-content-center lead fw-normal">
                                    <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-4">
                                        <button
                                            onClick={goToRegister}
                                            style={{ borderRadius: '50px' }}
                                            type="button"
                                            className="btn btn-primary btn-lg px-4"
                                        >
                                            ÜCRETSİZ DENEYİN

                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="product-device shadow-sm d-none d-md-block"></div>
                            <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
                        </div>
                    </div>
                    <div className="col-2"></div>

                </div>
                <div className="container col-xxl-8 px-4 py-5">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <Footer />
                    </div>
                </div>


            </div>

        </>
    )
}

export default Personel;