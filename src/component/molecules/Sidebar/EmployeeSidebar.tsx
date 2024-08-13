import React from 'react'
import './Sidebar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
    const navigate = useNavigate();

    const goToUpdateEmployee = () => {
        navigate('/updateemployee')
    }



    return (
        <>
            <aside id="sidebar" className="sidebar">

                <ul className="sidebar-nav" id="sidebar-nav">

                    <li className="nav-item">
                        <a className="nav-link " href="#" >
                            <i className="bi bi-grid"></i>
                            <span><i className="fa-solid fa-house"></i>Anasayfa</span>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-menu-button-wide"></i><span><i className="fa-solid fa-users"></i>İzin Yönetimi</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            
                            
                                <a  href="#" >
                                <i className="bi bi-circle"></i><span>< button  type="button" className="btn btn-secondary text-start"  style={{width: '90%',marginBottom: '5px', marginTop: '5px'}}>Çalışan Ekle</button></span>
                                </a>
                            
                            
                            
                                <a href="#" >
                                <i className="bi bi-circle"></i> <span>< button  type="button" className="btn btn-secondary text-start  " style={{width: '90%',marginBottom: '5px'}}>Çalışan Listesi</button></span>
                                </a> 
                            
                            
                            
                                <a href="components-buttons.html">
                                <i className="bi bi-circle"></i><span>< button  type="button" className="btn btn-secondary text-start  " style={{width: '90%',marginBottom: '5px'}}>Çalışan Durum Yönetimi</button></span>
                                </a> 
                            
                            
                    
                            
                            
                        </ul>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-journal-text"></i><span><i className="fa-solid fa-plane"></i>Zimmet Yönetimi</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            
                                <a href="forms-elements.html">
                                <i className="bi bi-circle"></i><span>< button  type="button" className="btn btn-secondary text-start  " style={{width: '90%',marginBottom: '5px',marginTop: '5px'}}>İzinleri Düzenle</button></span>
                                </a>  
                             
                           
                        </ul>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-layout-text-window-reverse"></i><span><i className="fa-solid fa-book"></i>Harcama Yönetimi</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            
                                <a href="tables-general.html">
                                <i className="bi bi-circle"></i><span>< button  type="button" className="btn btn-secondary text-start  " style={{width: '90%',marginBottom: '5px' ,marginTop: '5px'}}>Harcamaları Düzenle</button></span>
                                </a> 
                            
                           
                        </ul>
                    </li>

                    

                   

                    

                    <li className="nav-item">
                        <a className="nav-link collapsed" href="#" onClick={goToUpdateEmployee} >
                            <i className="bi bi-person"></i>
                            <span><i className="fa-solid fa-gear"></i>Profil Ayarları</span>
                        </a>
                    </li>



                </ul>

            </aside>
        </>
    )
}

export default Sidebar