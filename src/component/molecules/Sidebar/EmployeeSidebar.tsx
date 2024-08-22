import React, { useEffect } from 'react'
import './Sidebar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import TakvimSidebar from '../../atoms/TakvimSidebar';
import EmployeeShiftPopUp from '../EmployeeShiftPopUp';
import { HrmDispatch, useAppSelector } from '../../../store';
import { useDispatch } from 'react-redux';
import { setToken } from '../../../store/feature/authSlice';
import { fetchGetPendingEquipmentCount } from '../../../store/feature/equipmentSlice';

import ExpensesPopup from '../ExpensesPopup';

function EmployeeSidebar() {



    const dispatch: HrmDispatch = useDispatch();
    const token = useAppSelector(state => state.auth.token)
    const PendingEquipmentCount = useAppSelector(state => state.equipment.count);
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            dispatch(setToken(token));
        }
    }, [dispatch]);

    useEffect(() => {
        if (token) {
            dispatch(fetchGetPendingEquipmentCount(token));
        }
    }, [token, dispatch]);

    const goToUpdateEmployee = () => {
        navigate('/updateemployee')
    }
    const goToIzınTalepSayfası = () => {
        navigate('/izinTalepSayfası')
    }
    const goToAnasayfa = () => {
        navigate('/edashboard')
    }
    const goToZimmetListesi = () => {
        navigate('/employeeequipmenttable')
    }

    const goToZimmetOnay = () => {
        navigate('/pendingequipmenttable')
    }
    const goToHarcamalarım = () => {
        navigate('/expenses-employee-list')
    }
   



    return (
        <>
            <aside id="sidebar" className="sidebar">

                <ul className="sidebar-nav" id="sidebar-nav">

                    <li className="nav-item">
                        <a className="nav-link " href="#" onClick={goToAnasayfa}>
                            <i className="bi bi-grid"></i>
                            <span><i className="fa-solid fa-house"></i>Anasayfa</span>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-menu-button-wide"></i><span><i className="fa-solid fa-users"></i>İzin Yönetimi</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">


                            <a href="#" onClick={goToIzınTalepSayfası} >
                                <i className="bi bi-circle"></i><span>< button type="button" className="btn btn-secondary text-start" style={{ width: '90%', marginBottom: '5px', marginTop: '5px' }}>İzin Oluştur</button></span>
                            </a>






                        </ul>
                    </li>
                    
                    <li className="nav-item">
                    <button
                                    type="button"
                                    className="btn "
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    style={{color:'white',marginLeft:'15px'}}
                                >
                                   <i className="fa-solid fa-clipboard"></i>  &nbsp;&nbsp; Vardiya
                                </button>

                    </li>

                   
                    


                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-journal-text"></i><span><i className="fa-solid fa-boxes-packing"></i>Zimmet Yönetimi</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">

                            <a href="#" onClick={goToZimmetListesi}>
                                <i className="bi bi-circle"></i><span>< button type="button" className="btn btn-secondary text-start  " style={{ width: '90%', marginBottom: '5px', marginTop: '5px' }}>Zimmetlerim</button></span>
                            </a>
                            <a href="#" onClick={goToZimmetOnay}>
                                <i className="bi bi-circle"></i><span>< button  type="button" className="btn btn-secondary text-start  " style={{ width: '90%', marginBottom: '5px', marginTop: '5px' }}>
                                Onay Bekleyenler
                                {PendingEquipmentCount > 0 && (
                                        <span className=" ms-2 badge text-bg-danger">
                                            {PendingEquipmentCount}
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

                            <a href="#">
                        
                    <button
                                    type="button"
                                    className="btn btn-secondary text-start"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal4"
                                    style={{ width: '90%', marginBottom: '5px', marginTop: '5px' }}
                                >
                                   Harcama Ekle
                                </button>

                    
                            </a>

                            <a href="#">
                        
                        <button
                                        type="button"
                                        className="btn btn-secondary text-start"
                                        onClick={goToHarcamalarım}
                                        style={{ width: '90%', marginBottom: '5px', marginTop: '5px' }}
                                    >
                                       Harcamalarım
                                    </button>
    
                        
                                </a>


                        </ul>
                    </li>




                    <li className="nav-item">
                        <div style={{ marginLeft: '15px' }}>
                            <TakvimSidebar />
                        </div>

                    </li>


                    <li className="nav-item">
                        <a className="nav-link collapsed" href="#" onClick={goToUpdateEmployee} >
                            <i className="bi bi-person"></i>
                            <span><i className="fa-solid fa-gear"></i>Profil Ayarları</span>
                        </a>
                    </li>



                </ul>

                

            </aside>
            <EmployeeShiftPopUp />
            <ExpensesPopup/>
        </>
        
    )
}

export default EmployeeSidebar