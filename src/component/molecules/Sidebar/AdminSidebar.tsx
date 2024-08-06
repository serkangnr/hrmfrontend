import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { HrmDispatch, RootState, useAppSelector } from '../../../store';
import { fetchNotificationCount } from '../../../store/feature/authSlice';
import { useNavigate } from 'react-router-dom';

function Sidebar() {

    const dispatch: HrmDispatch = useDispatch();
    const notificationCount = useAppSelector(state => state.auth.notificationCount);
    const navigate = useNavigate();
    const goToOnayBekleyenler = () => {
        navigate('/onaybekleyenler');
    }
    useEffect(() => {
        dispatch(fetchNotificationCount() as any); 
    }, [dispatch]);
   
    return (
        <>
            <aside id="sidebar" className="sidebar">

                <ul className="sidebar-nav" id="sidebar-nav">

                    <li className="nav-item">
                        <a className="nav-link " href="index.html">
                            <i className="bi bi-grid"></i>
                            <span><i className="fa-solid fa-house"></i>Anasayfa</span>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-menu-button-wide"></i><span><i className="fa-solid fa-users"></i>Şirketler</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <a href="#">
                                    <i className="bi bi-circle"></i><span>< button onClick={goToOnayBekleyenler} type="button" className="btn btn-secondary">
                                        Onay Bekleyenler 
                                        {notificationCount > 0 && (
                                            <span className="badge text-bg-danger">
                                                {notificationCount}
                                            </span>
                                        )}
                                    </button></span>
                                </a>
                            </li>
                            <li>
                                <a href="components-accordion.html">
                                    <i className="bi bi-circle"></i><span>Accordion</span>
                                </a>
                            </li>
                            <li>
                                <a href="components-badges.html">
                                    <i className="bi bi-circle"></i><span>Badges</span>
                                </a>
                            </li>
                            <li>
                                <a href="components-breadcrumbs.html">
                                    <i className="bi bi-circle"></i><span>Breadcrumbs</span>
                                </a>
                            </li>
                            
                        </ul>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-journal-text"></i><span><i className="fa-solid fa-plane"></i>İzinler</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <a href="forms-elements.html">
                                    <i className="bi bi-circle"></i><span>Form Elements</span>
                                </a>
                            </li>
                            <li>
                                <a href="forms-layouts.html">
                                    <i className="bi bi-circle"></i><span>Form Layouts</span>
                                </a>
                            </li>
                            <li>
                                <a href="forms-editors.html">
                                    <i className="bi bi-circle"></i><span>Form Editors</span>
                                </a>
                            </li>
                            <li>
                                <a href="forms-validation.html">
                                    <i className="bi bi-circle"></i><span>Form Validation</span>
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-layout-text-window-reverse"></i><span><i className="fa-solid fa-book"></i>Raporlar</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <a href="tables-general.html">
                                    <i className="bi bi-circle"></i><span>General Tables</span>
                                </a>
                            </li>
                            <li>
                                <a href="tables-data.html">
                                    <i className="bi bi-circle"></i><span>Data Tables</span>
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-bar-chart"></i><span><i className="fa-regular fa-calendar-days"></i>Takvim</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="charts-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <a href="charts-chartjs.html">
                                    <i className="bi bi-circle"></i><span>Chart.js</span>
                                </a>
                            </li>
                            <li>
                                <a href="charts-apexcharts.html">
                                    <i className="bi bi-circle"></i><span>ApexCharts</span>
                                </a>
                            </li>
                            <li>
                                <a href="charts-echarts.html">
                                    <i className="bi bi-circle"></i><span>ECharts</span>
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-gem"></i><span><i className="fa-solid fa-ellipsis"></i>Admin İşlemleri</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="icons-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <a href="icons-bootstrap.html">
                                    <i className="bi bi-circle"></i><span>Admin Ekle</span>
                                </a>
                            </li>
                            <li>
                                <a href="icons-remix.html">
                                    <i className="bi bi-circle"></i><span>Admin Sil</span>
                                </a>
                            </li>
                            <li>
                                <a href="icons-boxicons.html">
                                    <i className="bi bi-circle"></i><span>Admin Düzenle</span>
                                </a>
                            </li>
                        </ul>
                    </li>







                    <li className="nav-item">
                        <a className="nav-link collapsed" href="users-profile.html">
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