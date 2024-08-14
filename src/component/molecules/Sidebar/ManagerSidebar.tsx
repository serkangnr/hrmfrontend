import React from 'react'
import './Sidebar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
    const navigate = useNavigate();

const goToUpdateManager = () => {
    navigate('/updatemanager');
}

const goToHome = () => {
    navigate('/mdashboard');
}
const goToCalisanEkle = () => {
    navigate('/calisanekle');
}
const goToCalisanList = () => {
    navigate('/calisanlist');
}
const goToIzinYonetimi = () => {
    navigate('/izinyonetimi');
}
const goToIzinListesi = () => {
    navigate('/pendingleave');
}

    return (
        <>
            <aside id="sidebar" className="sidebar">

                <ul className="sidebar-nav" id="sidebar-nav">

                    <li className="nav-item">
                        <a className="nav-link " href="#" onClick={goToHome}>
                            <i className="bi bi-grid"></i>
                            <span><i className="fa-solid fa-house"></i>Anasayfa</span>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-menu-button-wide"></i><span><i className="fa-solid fa-users"></i>Çalışanlar</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            
                            
                                <a  href="#" onClick={goToCalisanEkle}>
                                <i className="bi bi-circle"></i><span>< button  type="button" className="btn btn-secondary text-start"  style={{width: '90%',marginBottom: '5px', marginTop: '5px'}}>Çalışan Ekle</button></span>
                                </a>
                            
                            
                            
                                <a href="#" onClick={goToCalisanList}>
                                <i className="bi bi-circle"></i> <span>< button  type="button" className="btn btn-secondary text-start  " style={{width: '90%',marginBottom: '5px'}}>Çalışan Listesi</button></span>
                                </a> 
                            
                            
                            
                                <a href="components-buttons.html">
                                <i className="bi bi-circle"></i><span>< button  type="button" className="btn btn-secondary text-start  " style={{width: '90%',marginBottom: '5px'}}>Çalışan Durum Yönetimi</button></span>
                                </a> 
                            
                            
                    
                            
                            
                        </ul>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-journal-text"></i><span><i className="fa-solid fa-plane"></i>İzin Yönetimi</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            
                                <a href="#" onClick={goToIzinYonetimi}>
                                <i className="bi bi-circle"></i><span>< button  type="button" className="btn btn-secondary text-start  " style={{width: '90%',marginBottom: '5px',marginTop: '5px'}}>İzinleri Düzenle</button></span>
                                </a>  
                                <a href="#" onClick={goToIzinListesi}>
                                <i className="bi bi-circle"></i><span>< button  type="button" className="btn btn-secondary text-start  " style={{width: '90%',marginBottom: '5px',marginTop: '5px'}}>İzinleri Talepleri</button></span>
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
                        <a className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-bar-chart"></i><span><i className="fa-regular fa-calendar-days"></i>Zimmet</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="charts-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            
                                <a href="charts-chartjs.html">
                                <i className="bi bi-circle"></i><span>< button  type="button" className="btn btn-secondary text-start  " style={{width: '90%',marginBottom: '5px' ,marginTop: '5px'}}>Zimmet Ekle</button></span>
                                </a>
                            
                            
                                <a href="charts-apexcharts.html">
                                <i className="bi bi-circle"></i><span>< button  type="button" className="btn btn-secondary text-start  " style={{width: '90%',marginBottom: '5px'}}>Zimmet güncelle</button></span>
                                </a> 
                            
                            
                                <a href="charts-echarts.html">
                                    <i className="bi bi-circle"></i><span>< button  type="button" className="btn btn-secondary text-start  " style={{width: '90%',marginBottom: '5px'}}>Zimmet Sil</button></span>
                                </a>  
                            
                        </ul>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-gem"></i><span><i className="fa-solid fa-ellipsis"></i>Vardiya Yönetimi</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="icons-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            
                                <a href="#">
                                <i className="bi bi-circle"></i><span>< button  type="button" className="btn btn-secondary text-start" style={{width: '90%',marginBottom: '5px',marginTop: '5px'}}>Vardiya Oluştur</button></span>
                                </a>    
                            
                            
                                <a href="icons-remix.html">
                                <i className="bi bi-circle"></i><span>< button  type="button" className="btn btn-secondary text-start" style={{width: '90%',marginBottom: '5px'}}> Çalışana Vardiya Ekle</button></span>
                                </a>
                            

                                <a href="icons-remix.html">
                                <i className="bi bi-circle"></i><span>< button  type="button" className="btn btn-secondary text-start" style={{width: '90%',marginBottom: '5px'}}> Çalışan Vardiya Güncelle</button></span>
                                </a>
                            
                            
                                <a href="icons-boxicons.html">
                                <i className="bi bi-circle"></i><span>< button  type="button" className="btn btn-secondary text-start" style={{width: '90%',marginBottom: '5px'}}> Çalışan Vardiya Sil</button></span>
                                </a> 
                            
                           
                            
                                <a href="icons-boxicons.html">
                                <i className="bi bi-circle"></i><span>< button  type="button" className="btn btn-secondary text-start" style={{width: '90%',marginBottom: '5px'}}>Mola Oluştur</button></span>
                                </a> 
                            
                            
                                <a href="icons-boxicons.html">
                                <i className="bi bi-circle"></i><span>< button  type="button" className="btn btn-secondary text-start" style={{width: '90%',marginBottom: '5px'}}>Çalışana Mola Ekle</button></span>
                                </a> 
                            
                            
                                <a href="icons-boxicons.html">
                                <i className="bi bi-circle"></i><span>< button  type="button" className="btn btn-secondary text-start" style={{width: '90%',marginBottom: '5px'}}>Çalışana Mola Güncelle</button></span>
                                </a> 
                            
                            
                                <a href="icons-boxicons.html">
                                <i className="bi bi-circle "></i><span>< button  type="button" className="btn btn-secondary text-start" style={{width: '90%',marginBottom: '5px'}}>Çalışana Mola Sil</button></span>
                                </a>
                            
                        </ul>
                    </li>

                    

                    <li className="nav-item">
                        <a className="nav-link collapsed" href="#" onClick={goToUpdateManager}>
                            <i className="bi bi-person"></i>
                            <span><i className="fa-solid fa-gear"></i>Ayarlar</span>
                        </a>
                    </li>



                </ul>

            </aside>
        </>
    )
}

export default Sidebar