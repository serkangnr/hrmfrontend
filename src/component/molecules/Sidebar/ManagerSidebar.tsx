import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { HrmDispatch, useAppSelector } from '../../../store';
import { useDispatch } from 'react-redux';
import { fetchGetPendingLeaveCount } from '../../../store/feature/leaveSlice';
import { setToken } from '../../../store/feature/authSlice';
import TakvimSidebar from '../../atoms/TakvimSidebar';
import './StarRating.css';
import './StarRating2.css';
import { fetchDeleteComment, fetchGetComment, fetchSaveComment, fetchUpdateComment } from '../../../store/feature/commentSlice';
import Swal from 'sweetalert2';
import { fetchPendingExpensesCount } from '../../../store/feature/expensesSlice';


function ManagerSidebar() {

    const dispatch: HrmDispatch = useDispatch();
    const token = useAppSelector(state => state.auth.token)
    const PendingLeaveCount = useAppSelector(state => state.leave.count);
    const PendingExpensesCount = useAppSelector(state => state.expenses.pendingExpensesCount);
    const commentData = useAppSelector(state => state.comment.commentData);
    const [comment, setComment] = useState('');
    const [rate, setRate] = useState<number>(commentData?.rate ?? 5);
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            dispatch(setToken(token));
        }
    }, [dispatch]);

    const updateComment = async () => {
        
        dispatch(fetchUpdateComment({

            token: token,
            comment: comment ,
            rate: rate ,


        })).then(() => {
            Swal.fire('Güncelleme', 'Yorum bilgileri başarı ile güncellendi.', 'success').then(() => {
                dispatch(fetchGetComment(token));
            });
        })

    }
    const getComment =()=>{
        dispatch(fetchGetComment(token));
    }



    useEffect(() => {
        if (token) {
            dispatch(fetchGetComment(token));
        }
    }, []);


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

    const goToHarcamaTalepleri = () => {
        navigate('/harcama-talepleri');
    }
   

   

    const handleClick = (value: number) => {
        setRate(value);
    };


 

    useEffect(() => {
        if (token) {
            dispatch(fetchGetPendingLeaveCount(token));
        }
    }, [token, dispatch]);
    useEffect(() => {
        if (token) {
            dispatch(fetchPendingExpensesCount(token));
        }
    }, [token, dispatch]);

   



    const goToIzinListesi = () => { navigate('/pendingleave'); }
    const goToCalisanDurum = () => { navigate('/calisandurum'); }
    const goToVardiyaYonetimi = () => { navigate('/vardiyayonetimi'); }

const goToZimmetYonetimi = () => {navigate('/zimmetyonetimi');}
const gotToZimmetTablosu = () => {navigate('/equipmenttable');}
const goToRejectedEquipmentTable = () => {navigate('/rejectedequipmenttable');}
const goToUpdateCompany = () => {navigate('/updatecompany');}




    const yorumEkle = () => {
        dispatch(fetchSaveComment({
            token, comment, rate
        })).then(data => {
            if (data.payload.code === 200 && data.payload.data === true) {
                Swal.fire("Başarılı!", "Yorum kayıt edilmiştir!", "success").then(() => {
                    dispatch(fetchGetComment(token));});

            } else {
                Swal.fire("Hata!", "Sadece 1 Yorum Yapabilirsiniz!", "error").then(()=>{
                    Swal.fire("Öneri!", "Yorumunuzu  düzenleyebilir veya silebilirsiniz!", "success")
                })
                
            }
        })
    }
    const deleteComment = () => {
        if (token) {
            dispatch(fetchDeleteComment(token))
                .then((response) => {
                    if (response.payload.code === 200) {
                        Swal.fire('Başarı!', 'Comment silindi', 'success').then(() => {
                            dispatch(fetchGetComment(token));});
                    } else {
                        Swal.fire('Hata!', response.payload.message, 'error');
                        throw new Error(response.payload.message);
                    }
                })
                .catch((error) => {
                    console.error("Hata oluştu:", error);
                });
        } else {
            Swal.fire('Hata!', 'Token mevcut değil.', 'error');
        }
    };




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
                        <a className="nav-link collapsed" data-bs-target="#company-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-menu-button-wide"></i><span><i className="fa-solid fa-building"></i> Şirket</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="company-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">


                            <a href="#" onClick={goToUpdateCompany}>
                                <i className="bi bi-circle"></i><span>< button type="button" className="btn btn-secondary text-start" style={{ width: '90%', marginBottom: '5px', marginTop: '5px' }}>Şirket Düzenle</button></span>
                            </a>



                        </ul>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-menu-button-wide"></i><span><i className="fa-solid fa-users"></i>Çalışanlar</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">


                            <a href="#" onClick={goToCalisanEkle}>
                                <i className="bi bi-circle"></i><span>< button type="button" className="btn btn-secondary text-start" style={{ width: '90%', marginBottom: '5px', marginTop: '5px' }}>Çalışan Ekle</button></span>
                            </a>



                            <a href="#" onClick={goToCalisanList}>
                                <i className="bi bi-circle"></i> <span>< button type="button" className="btn btn-secondary text-start  " style={{ width: '90%', marginBottom: '5px' }}>Çalışan Listesi</button></span>
                            </a>



                            <a href="#" onClick={goToCalisanDurum}>
                                <i className="bi bi-circle"></i><span>< button type="button" className="btn btn-secondary text-start  " style={{ width: '90%', marginBottom: '5px' }}>Çalışan Durum Yönetimi</button></span>
                            </a>





                        </ul>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-journal-text"></i><span><i className="fa-solid fa-plane"></i>İzin Yönetimi</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">

                            <a href="#" onClick={goToIzinYonetimi}>
                                <i className="bi bi-circle"></i><span>< button type="button" className="btn btn-secondary text-start  " style={{ width: '90%', marginBottom: '5px', marginTop: '5px' }}>İzinleri Düzenle</button></span>
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

                            <a href="#">
                                <i className="bi bi-circle"></i><span>< button type="button" onClick={goToHarcamaTalepleri} className="btn btn-secondary text-start  " style={{ width: '90%', marginBottom: '5px', marginTop: '5px' }}>Harcama Talepleri
                                {PendingExpensesCount > 0 && (
                                        <span className="badge text-bg-danger">
                                            {PendingExpensesCount}
                                        </span>
                                    )}
                                    </button></span>
                            </a>


                        </ul>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-bar-chart"></i><span><i className="fa-solid fa-boxes-packing"></i>Zimmet</span><i className="bi bi-chevron-down ms-auto"></i>
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
                            <i className="bi bi-gem"></i><span><i className="fa-solid fa-clipboard"></i>Vardiya Yönetimi</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="icons-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">

                            <a href="#" onClick={goToVardiyaYonetimi}>
                                <i className="bi bi-circle"></i><span>< button type="button" className="btn btn-secondary text-start" style={{ width: '90%', marginBottom: '5px', marginTop: '5px' }}>Vardiya Oluştur</button></span>
                            </a>

                        </ul>
                    </li>

                    <li className="nav-item">
                        <div style={{ marginLeft: '15px' }}>
                            <TakvimSidebar />
                        </div>

                    </li>

                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#comment-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-bar-chart"></i><span><i className="fa-solid fa-comments"></i>Yorum</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="comment-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">

                            <button type="button" className="btn btn-secondary text-start" style={{ width: '90%', marginBottom: '5px', marginTop: '5px' }} data-bs-toggle="modal" data-bs-target="#exampleModal3" data-bs-whatever="@getbootstrap">Yorum Yap</button>

                        




                        </ul>
                    </li>





                    <li className="nav-item">
                        <a className="nav-link collapsed" href="#" onClick={goToUpdateManager}>
                            <i className="bi bi-person"></i>
                            <span><i className="fa-solid fa-gear"></i>Profil Ayarları</span>
                        </a>
                    </li>



                </ul>

            </aside>
            <div className="modal fade" id="exampleModal3" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 text-center" >Yorum Yaz</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>

                                <div className="mb-3">
                                    <label className="col-form-label">Yorum:</label>
                                    <textarea defaultValue={commentData?.comment} onChange={(e) => setComment(e.target.value)} className="form-control" id="message-text"></textarea>
                                </div>
                                <div>
                                    <div id="star-container">
                                        {[1, 2, 3, 4, 5].map((value) => (
                                            <span
                                                key={value}
                                                className={`star ${rate && rate >= value ? 'selected' : ''}`}
                                                onClick={() => handleClick(value)}
                                            >
                                                &#9733;
                                            </span>
                                        ))}
                                    </div>

                                </div>


                            </form>
                        </div>
                        <div className="modal-footer">
                        <button type="button" onClick={deleteComment}  className="btn btn-danger">Sil</button>
                        <button type="button" onClick={updateComment} className="btn btn-primary">Düzenle</button>
                            <button type="button" onClick={yorumEkle} className="btn btn-success">Kaydet</button>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default ManagerSidebar










 