
import Footer from "../component/molecules/Footer"
import Navbar from "../component/molecules/Navbar"
import UserStoryCard from "../component/molecules/usercard/UserStoryCard"

function UserStoryPage() {
    return (
        <>

            <Navbar />
            <div className="background" style={{
                backgroundImage: 'url("https://st2.depositphotos.com/2124221/46809/i/450/depositphotos_468095768-stock-photo-abstract-multicolored-background-poly-pattern.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100%'
            }} >

                <div className="container">

                    <div className="row">
                        <div className="col-12 bg-primary text-white py-3">
                            <h2>KULLANICI HİKAYELERİ</h2>
                            <p>1000'lerce insan kaynakları profesyoneli ile beraber İK'yı kolaylaştırıyoruz.</p>
                            <div className="input-group flex-nowrap">
                                <input type="text" className="form-control" placeholder="Kullanıcı Hikayelerinde Ara" aria-label="Search" />
                            </div>
                        </div>
                    </div>


                    <div className="row py-5 bg-body-tertiary">
                        <div className="container">
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                                <UserStoryCard name="MERVE KORKMAZ" imageUrl="img/664c6bbdb5c284ea44a59fcc_MERVE KORKMAZ ÖZDEM FOTO - MERVE KORKMAZ-p-500.jpeg" position="İnsan Kaynakları Sorumlusu" company="VENİ VİDİ GÖZ" />

                                {/* <div className="col">
                                    <div className="card shadow-sm justify-content-center align-items-center">

                                        <img style={{ width: '400px', height: '500px' }} src="img/664c6bbdb5c284ea44a59fcc_MERVE KORKMAZ ÖZDEM FOTO - MERVE KORKMAZ-p-500.jpeg" className="card-img-top" alt="MERVE KORKMAZ" />
                                        <div className="card-body">
                                            <p className="card-text">İnsan Kaynakları Sorumlusu</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <small className="text-body-secondary">VENİ VİDİ GÖZ</small>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}

                                <UserStoryCard name="GİZEM GÖKOĞLAN" imageUrl="img/664c6d1d1b5bb725fb4078e0_IMG_5464 - Gizem Gökoğlan-p-500.jpeg" position="Bilgisayar Mühendisi" company="VS BİLİŞİM" />

                                {/* <div className="col">
                                    <div className="card shadow-sm justify-content-center align-items-center">
                                        <img style={{ width: '400px', height: '500px' }} src="img/664c6d1d1b5bb725fb4078e0_IMG_5464 - Gizem Gökoğlan-p-500.jpeg" className="card-img-top" alt="GİZEM GÖKOĞLAN" />
                                        <div className="card-body">
                                            <p className="card-text">Bilgisayar Mühendisi</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <small className="text-body-secondary">VS BİLİŞİM</small>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}

                                     <UserStoryCard name="ALPTEKİN BALABAN" imageUrl="img/666320da821ff5243a5cba1e_Alptekin Profil-p-500.jpeg" position="CEO" company="NAZ TEKNİK" />
                                {/* <div className="col">
                                    <div className="card shadow-sm justify-content-center align-items-center">
                                        <img style={{ width: '400px', height: '500px' }} src="img/666320da821ff5243a5cba1e_Alptekin Profil-p-500.jpeg" className="card-img-top" alt="ALPTEKİN BALABAN" />
                                        <div className="card-body">
                                            <p className="card-text">CEO</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <small className="text-body-secondary">NAZ TEKNİK</small>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}

                               <UserStoryCard name="DÜNDAR KOÇYİĞİT" imageUrl="img/6667f216adccd4464ded0f91_Dündar Koçyiğit-p-500.jpg" position="İnsan Kaynakları Yöneticisi" company="DAMSEY" />
                                {/* <div className="col">
                                    <div className="card shadow-sm justify-content-center align-items-center">
                                        <img style={{ width: '400px', height: '500px' }} src="img/6667f216adccd4464ded0f91_Dündar Koçyiğit-p-500.jpg" className="card-img-top" alt="DÜNDAR KOÇYİĞİT" />
                                        <div className="card-body">
                                            <p className="card-text">İnsan Kaynakları Yöneticisi</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <small className="text-body-secondary">DAMSEY</small>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                 <UserStoryCard name="İLKİZ ALP" imageUrl="img/667bf03e84f0cb50547a84eb_ilkizalp-999x1024-p-500.jpeg" position="İnsan Kaynakları Müdürü" company="CADEM GRUP" />
                                {/* <div className="col">
                                    <div className="card shadow-sm justify-content-center align-items-center">
                                        <img style={{ width: '400px', height: '500px' }} src="img/664dab374e4716cb44ad3b55_Nilay Korkmaz-p-500.jpg" className="card-img-top" alt="NİLAY KORKMAZ" />
                                        <div className="card-body">
                                            <p className="card-text">İnsan Kaynakları Müdürü</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <small className="text-body-secondary">CADEM GRUP</small>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}

                                <UserStoryCard name="NİLAY KORKMAZ" imageUrl="img/664dab374e4716cb44ad3b55_Nilay Korkmaz-p-500.jpg" position="Türkiye Operasyonlar Müdürü" company="MEDSİEN" />

                                {/* <div className="col">
                                    <div className="card shadow-sm justify-content-center align-items-center">
                                        <img style={{ width: '400px', height: '500px' }} src="img/667bf03e84f0cb50547a84eb_ilkizalp-999x1024-p-500.jpeg" className="card-img-top" alt="İLKİZ ALP" />
                                        <div className="card-body">
                                            <p className="card-text">Türkiye Operasyonlar Müdürü</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <small className="text-body-secondary">MEDSİEN</small>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>

                        </div>
                    </div>
                </div>


            </div>


            <div className="container col-xxl-8 px-4 py-5">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <Footer/>
                    </div>
                </div>




        </>

    )
}

export default UserStoryPage