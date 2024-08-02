import React from 'react'

function Footer() {
  return (
    <>
       
            
            <div className="col-1">
                <img src="./image/logo.png" style={{height: '100px ',width: '100px'}} alt=""/>
            </div>
            <div className="col-2 text-center  p-3 tex">
                <p>BilgeAdam Mah. Boost Sok. Java Cad. No:50 K:5 D:70 <br /> Çekmeköy/İSTANBUL</p>
            </div>
            <div className="col-3">
                <div className="row">
                    <div className="col-1">
                        <img src="./image/mail-logo.png" style={{width: '40px' }}/>
                    </div>
                    <div className="col-8  pt-2">
                        <p>assimhrm@gmail.com</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-1">
                        <img src="./image/tel-logo.png" style={{width: '40px' }}/>
                    </div>
                    <div className="col-8  pt-2">
                        <p>+90 555 444 33 22</p>
                    </div>
                </div>
                <div className="row">
                    <img src="./image/linkedin.png" style={{width: '50px' }} />
                    <img src="./image/instagram.png" style={{width: '50px' }} />
                    <img src="./image/youtube.png" style={{width: '75px' }} />
                    <img src="./image/x.png" style={{width: '50px' }} alt=""/>
                    <img src="./image/facebook.png" style={{width: '50px' }} alt=""/>
                </div>
            </div>

       
    </>
  )
}

export default Footer