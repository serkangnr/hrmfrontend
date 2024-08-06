
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
                        <div className="col-12  text-black py-3">
                            <h2>KULLANICI HİKAYELERİ</h2>
                            <p>1000'lerce insan kaynakları profesyoneli ile beraber İK'yı kolaylaştırıyoruz.</p>
                            
                        </div>
                    </div>


                    <div className="row py-5 ">
                        <div className="container">
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                                <UserStoryCard name="MERVE KORKMAZ" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwiPmMw80hhFHL9gdTFQ3geolNL8Zv26bRHsG9iswvN_66LG0blB-CGB7iMvHb52JSJFc&usqp=CAU}" position="İnsan Kaynakları Sorumlusu" company="VENİ VİDİ GÖZ" />

                                

                                <UserStoryCard name="GİZEM GÖKOĞLAN" imageUrl="https://st3.depositphotos.com/13193658/16918/i/450/depositphotos_169181706-stock-photo-pregnant-businesswoman-talking-by-phone.jpg" position="Bilgisayar Mühendisi" company="VS BİLİŞİM" />

                                

                                     <UserStoryCard name="ALPTEKİN BALABAN" imageUrl="https://media.istockphoto.com/id/1399565382/tr/foto%C4%9Fraf/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an.jpg?s=612x612&w=0&k=20&c=vFIwaBIZN9V-chgJyeRv3b-lcSvKuG9BoumRbCHR8nU=" position="CEO" company="NAZ TEKNİK" />
                               

                               <UserStoryCard name="DÜNDAR KOÇYİĞİT" imageUrl="https://www.shutterstock.com/image-photo/young-successful-business-man-office-260nw-81356803.jpg" position="İnsan Kaynakları Yöneticisi" company="DAMSEY" />
                              
                                 <UserStoryCard name="İLKİZ ALP" imageUrl="https://st2.depositphotos.com/5260901/7884/i/450/depositphotos_78844016-stock-photo-attractive-female-at-coffee-shop.jpg" position="İnsan Kaynakları Müdürü" company="CADEM GRUP" />
                                

                                <UserStoryCard name="NİLAY KORKMAZ" imageUrl="https://img.cdn.haber365.com.tr/uploads/images/gallery/calisankadin1.png" position="Türkiye Operasyonlar Müdürü" company="MEDSİEN" />

                              
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