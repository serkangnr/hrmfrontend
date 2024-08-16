import React from 'react'
import Navbar from '../component/molecules/Navbar'
import Footer from '../component/molecules/Footer'
import { useNavigate } from 'react-router-dom'

function DanismanlikPage() {
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
                <div className='container '  >
                    <div className="container col-xxl-8 px-4 py-5">
                        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                            <div className="col-5 ">
                                <div>
                                    <h1 >Bordro ve Teşvik Danışmanlığı</h1>
                                </div>

                                <div>
                                    <h5>Beyanname, BES, SGK, emeklilik, teşvik, mevzuat gibi tüm süreçleriniz için danışmanlık hizmetlerimizden yararlanın, tarafımızdan hazırlanmış bordrolarınız ile iş yükünü ve hata payını azaltın.</h5>
                                </div>
                                <div>
                                    <ul className="">
                                        <li className="list-group-item fs-5 justify-content-start"><i className="fa-solid fa-square-check" style={{ color: 'blue' }}></i> &nbsp;Alanında uzman ekip </li>
                                        <li className="list-group-item fs-5 justify-content-start"><i className="fa-solid fa-square-check" style={{ color: 'blue' }}></i> &nbsp;Erişilebilir müşteri destek ekibi</li>
                                        <li className="list-group-item fs-5 justify-content-start"><i className="fa-solid fa-square-check" style={{ color: 'blue' }}></i> &nbsp;Muhasebeye uygun raporlama</li>
                                        <li className="list-group-item fs-5 justify-content-start"><i className="fa-solid fa-square-check" style={{ color: 'blue' }}></i> &nbsp;Yasal uyumluluk garantili</li>


                                    </ul>
                                </div>
                                <div style={{ marginLeft: '30px', marginTop: '30px' }}>
                                    <button type="button" onClick={goToRegister} className="btn btn-primary fs-5" style={{ borderRadius: '50px' }} >ÜCRETSİZ RANDEVU TALEP EDİN</button>
                                </div>

                            </div>
                            <div className="col-7">
                                <img src="https://cdn.prod.website-files.com/6113889e45c6e62ebf4ca212/6196a3271d8cb66a1a819738_group-84%20(1).svg" style={{ objectFit: 'cover', width: '100%' }} alt="" />
                            </div>
                        </div>
                    </div>
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

export default DanismanlikPage