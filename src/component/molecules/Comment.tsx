import React from 'react'

function Comment() {
    return (
        <>
            
                <div className="row  justify-content-center align-items-center text-center p-5"
                    style={{ backgroundColor: 'aliceblue', height: '400px' }}>
                    <h1>Kullanıcı Yorumları</h1>
                    <h5>Kullanıcılarımızın yorumlarını okuyarak hakkımızda daha fazla bilgiye ulaşabillirsiniz.</h5>
                    <div className="col-5">
                        <div id="carouselExampleFade" className="carousel slide carousel-fade  ">
                            <div className="carousel-inner ">
                                <div className="carousel-item active carousel-fade ">
                                    <div className="card mb-3  " style={{ maxWidth: '100%', height: '200px' }} >
                                        <div className="row g-0">
                                            <div className="col-md-4 ">
                                                <img src="./image/marka7.png" className="img-fluid rounded-start" alt="..." />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h5 className="card-title">Genel müdür</h5>
                                                    <p className="card-text">Mükemmel bir platform. Kullandığımızdan beri işlerimiz
                                                        hem kolaylaştı hemde hızlandı.Teşekkürler.</p>
                                                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins
                                                        ago</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="card mb-3" style={{ maxWidth: '100%', height: '200px' }}>
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <img src="./image/marka.png" className="img-fluid rounded-start" alt="..." />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h5 className="card-title">İnsan Kaynakları Müdürü</h5>
                                                    <p className="card-text">Bu platformu kullandığımız için çok şanslıyım.
                                                        Çalışanlarımızı rahatlıkla kontrol edebiliyorum. Yankında bana bile
                                                        gerek kalmıcak :D </p>
                                                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins
                                                        ago</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="card mb-3" style={{ maxWidth: '100%', height: '200px' }}>
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <img src="./image/marka5.png" className="img-fluid rounded-start" alt="..." />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h5 className="card-title">Müdür</h5>
                                                    <p className="card-text">İnsan kaynaklarını kovdum artık her işe kendim
                                                        kolaylıkla yapabiliyorum. Teşekkürler.</p>
                                                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins
                                                        ago</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
                                data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" style={{ backgroundColor: 'rgb(202, 230, 230)' }}
                                    aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                                data-bs-slide="next">
                                <span className="carousel-control-next-icon" style={{ backgroundColor: 'rgb(202, 230, 230)' }}
                                    aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            
        </>
    )
}

export default Comment