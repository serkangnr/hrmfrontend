import React from 'react'

import DropdownUygulamalar from '../atoms/DropdownUygulamalar'

import DropdownDanismanliklar from '../atoms/DropdownDanismanliklar'


import { useNavigate } from 'react-router-dom'
import UserStoryPage from '../../pages/UserStoryPage';


function Navbar() {
  const navigate = useNavigate();

  const backToHome = () => {
    navigate('/');
  }

  const goToUserStory = () => {
    navigate('/userstory');
  }
  return (
    



    <> 
    
    <div className="row sticky-top" style={{ backgroundColor: "white",cursor: 'pointer'}}>

          <div className="col-2">
            <img onClick={backToHome} src="./image/logo.jpeg" style={{ height: 100, width: 100 }} className="float-end" alt="Logo" />
          </div>
          <div className="col-8 p-2">
            <nav className="navbar p-3"  >
              <div className="container-fluid">
                <a className="navbar-brand" style={{ fontSize: "0.75rem" }}>
                  <DropdownUygulamalar />
                </a>
                <a className="navbar-brand" style={{ fontSize: "0.75rem" }}>
                  <DropdownDanismanliklar/>
                </a>
                <a className="navbar-brand" onClick={goToUserStory} style={{ fontSize: "0.75rem" }}>
                
             <button type="button" className="btn btn-light">KULLANICI HİKAYELERİ</button>
 
                </a>
               
                <button type="button" className="btn btn-light" >
                  TEKLİF ALIN
                </button>
                <button type="button" className="btn btn-warning">
                  GİRİŞ YAP
                </button>
                
              </div>
            </nav>
          </div>

        </div>
    
      
    </>
  )
}

export default Navbar