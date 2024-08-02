import React from 'react'
import { Dropdown } from 'react-bootstrap'
import DropdownUygulamalar from '../atoms/DropdownUygulamalar'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate();

  const backToHome = () => {
    navigate('/');
  }
  return (
    



    <> 
    
    <div className="row sticky-top" style={{ backgroundColor: "white",}}>

          <div className="col-2">
            <img onClick={backToHome} src="./image/logo.jpeg" style={{ height: 100, width: 100 }} className="float-end" alt="Logo" />
          </div>
          <div className="col-8 p-3">
            <nav className="navbar p-3"  >
              <div className="container-fluid">
                <a className="navbar-brand" style={{ fontSize: "0.75rem" }}>
                  <DropdownUygulamalar />
                </a>
                <a className="navbar-brand" style={{ fontSize: "0.75rem" }}>
                  DANIŞMANLIKLAR
                </a>
                <a className="navbar-brand" style={{ fontSize: "0.75rem" }}>
                  KULLANICI HİKAYELERİ
                </a>
                <a className="navbar-brand" style={{ fontSize: "0.75rem" }}>
                  KAYNAKLAR
                </a>
                <button type="button" className="btn btn-light" style={{ fontSize: "0.75rem" }}>
                  TEKLİF ALIN
                </button>
                <button type="button" className="btn btn-warning" style={{ fontSize: "0.75rem" }}>
                  GİRİŞ YAP
                </button>
                
              </div>
            </nav>
          </div>
          <div className="col-2" />
        </div>
    
      
    </>
  )
}

export default Navbar