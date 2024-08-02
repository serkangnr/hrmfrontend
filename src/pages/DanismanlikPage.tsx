import React from 'react'
import Navbar from '../component/molecules/Navbar'
import Footer from '../component/molecules/Footer'

function DanismanlikPage() {
    //düzenlendi
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
                    <div className="row d-flex align-items-center" style={{ height: '100vh' }}>
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
                                <button type="button" className="btn btn-primary fs-5" style={{ borderRadius: '50px' }} >ÜCRETSİZ RANDEVU TALEP EDİN</button>
                            </div>

                        </div>
                        <div className="col-4">
                            <img src="https://cdn.prod.website-files.com/6113889e45c6e62ebf4ca212/6196a3271d8cb66a1a819738_group-84%20(1).svg" style={{ objectFit: 'cover', width: '100%' }} alt="" />
                        </div>
                    </div>





                </div>
                <Footer/>

            </div>

        </>
    )
}

export default DanismanlikPage