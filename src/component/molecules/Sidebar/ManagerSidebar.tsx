import React, { useEffect } from 'react'
import './Sidebar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { HrmDispatch, useAppSelector } from '../../../store';
import { useDispatch } from 'react-redux';
import {  fetchGetPendingLeaveCount } from '../../../store/feature/leaveSlice';
import { setToken } from '../../../store/feature/authSlice';
import TakvimSidebar from '../../atoms/TakvimSidebar';


function ManagerSidebar() {

    const dispatch: HrmDispatch = useDispatch();
    const token = useAppSelector(state => state.auth.token)
    const PendingLeaveCount = useAppSelector(state => state.leave.count);
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            dispatch(setToken(token));
        }
    }, [dispatch]);

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
const goToIzinListesi = () => {navigate('/pendingleave');}
const goToCalisanDurum = () => {navigate('/calisandurum');}
const goToVardiyaYonetimi = () => {navigate('/vardiyayonetimi');}
const goToZimmetYonetimi = () => {navigate('/zimmetyonetimi');}
const gotToZimmetTablosu = () => {navigate('/equipmenttable');}
const goToRejectedEquipmentTable = () => {navigate('/rejectedequipmenttable');}


useEffect(() => {
    if (token) {
        dispatch(fetchGetPendingLeaveCount(token));
    }
}, [token, dispatch]);
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
                            
                            
                            
                                <a href="#" onClick={goToCalisanDurum}>
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
                                 
                                <a href="#">
                                <i className="bi bi-circle"></i><span>< button style={{ width: '200px' }} onClick={goToIzinListesi} type="button" className="btn btn-secondary mt-2">
                                    İzin Talepleri
                                    {PendingLeaveCount > 0 && (
                                        <span className="badge text-bg-danger">
                                            {PendingLeaveCount}
                                        </span>
                                    )}
                                </button></span>
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
                            
                                <a href="#" onClick={goToZimmetYonetimi}>
                                <i className="bi bi-circle"></i><span>< button  type="button" className="btn btn-secondary text-start  " style={{width: '90%',marginBottom: '5px' ,marginTop: '5px'}}>Zimmet Ekle</button></span>
                                </a>
                            
                            
                                <a href="#" onClick={gotToZimmetTablosu}>
                                <i className="bi bi-circle"></i><span>< button  type="button" className="btn btn-secondary text-start  " style={{width: '90%',marginBottom: '5px'}}>Zimmetleri Görüntüle</button></span>
                                </a> 
                            
                            
                                <a href="#" onClick={goToRejectedEquipmentTable}>
                                    <i className="bi bi-circle"></i><span>< button  type="button" className="btn btn-secondary text-start  " style={{width: '90%',marginBottom: '5px'}}>Reddedilen Zimmetler</button></span>
                                </a>  
                            
                        </ul>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-gem"></i><span><i className="fa-solid fa-ellipsis"></i>Vardiya Yönetimi</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="icons-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            
                                <a href="#" onClick={goToVardiyaYonetimi}>
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
                        <div style={{ marginLeft: '15px' }}>
                            <TakvimSidebar />
                        </div>

                    </li>

                    <li className="nav-item">
                        <a className="nav-link collapsed" href="#" onClick={goToUpdateManager}>
                            <i className="bi bi-person"></i>
                            <span><i className="fa-solid fa-gear"></i>Profil Ayarları</span>
                        </a>
                    </li>



                </ul>

            </aside>
        </>
    )
}

export default ManagerSidebar