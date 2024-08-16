import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Sidebar from '../../component/molecules/Sidebar/Sidebar';
import ContactCard from '../../component/molecules/ContactCard';
import Navbar from '../../component/molecules/Navbar';
import AdvertCard from '../../component/molecules/AdvertCard';
import UpCarosel from '../../component/molecules/UpCarosel';
import DownCarosel from '../../component/molecules/DownCarosel';
import Comment from '../../component/molecules/Comment';
import Footer from '../../component/molecules/Footer';
import ContactCardHome from '../../component/molecules/ContactCardHome';

const Home: React.FC = () => {
    
    return (
        <>
        
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Bootstrap demo</title>
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
                crossOrigin="anonymous"
            />
            <link rel="stylesheet" href="./index.css" />
            <style
                dangerouslySetInnerHTML={{
                    __html: `
          .background {
            background-image: url('https://st2.depositphotos.com/2124221/46809/i/450/depositphotos_468095768-stock-photo-abstract-multicolored-background-poly-pattern.jpg');
            background-size: cover;
            background-position: center;
            height: 100%;
          }
        `
                }}
            />
            <div className=" background">
                <ContactCardHome companyPhone="5555555555" companyEmail="assim@gmail.com" />
                <Navbar />
                <div className="row p-5 mb-3" style={{ textAlign: "center", height: 850 }}>
                    <AdvertCard/>
                  
                    <div className="row justify-content-center align-items-center">
                        <div className="col-6">
                           <UpCarosel/>
                        </div>
                    </div>
                </div>
                <div className="row mb-3 justify-content-center align-items-center">
                    <div className="col-8">
                        <DownCarosel/>
                    </div>
                </div>
                <div className="row">
                    <Comment/>
                </div>
                <div className="container col-xxl-8 px-4 py-5">
                    <div className="row flex-lg-row-reverse align-items-center g-2 py-5">
                        <Footer />
                    </div>
                </div>


                <div className="row" style={{ backgroundColor: "white" }}>
                    <div className="col" style={{ textAlign: "center" }}>
                        <p style={{ fontSize: "0.75rem" }}>2023 © Tüm Hakları Saklıdır</p>
                    </div>
                   
                </div>
            </div>
        </>
    );
};

export default Home;
