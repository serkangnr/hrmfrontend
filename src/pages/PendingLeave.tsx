import React, { useEffect, useState } from 'react'
import AdminSidebar from '../component/molecules/Sidebar/AdminSidebar'

import { HrmDispatch, useAppSelector } from '../store';
import { useDispatch } from 'react-redux';

import { fetchAdminList } from '../store/feature/adminSlice';
import AdminListTablo from '../component/atoms/AdminListTablo';
import ContactCard from '../component/molecules/ContactCard';
import ManagerSidebar from '../component/molecules/Sidebar/ManagerSidebar';
import PendingLeaveList from '../component/atoms/PendingLeaveList';
import { fetchGetPendingLeave } from '../store/feature/leaveSlice';

function PendingLeave() {


    const pendingLeaveList = useAppSelector(state => state.leave.leaveList);
    const dispatch = useDispatch<HrmDispatch>();
    const token = useAppSelector(state => state.auth.token);

    useEffect(() => {
        if (token) {
            dispatch(fetchGetPendingLeave(token));
        }
    }, [dispatch, token]);





    return (
        <>

            <div className="contaniner">
            <div className="row shadow" style={{ height: '50px', backgroundColor: '#EEEEEE' }}>
        <ContactCard companyPhone="5555555555" companyEmail="assim@gmail.com" />
        </div>
                <div className="row">
                    <div className="col-2">

                        <ManagerSidebar /> </div>
                    <div className="col-9">

                        <div className="row">
                            <table className="table table-dark table-striped mt-5">
                                <thead>
                                    <tr>
                                    <th colSpan={8} className="table-active  "><h1 className='text-center' >Bekleyen İzin Listesi</h1></th>
                                    </tr>

                                    


                                </thead>
                                <thead>
                                    <tr>
                                        
                                        <th scope="col">İsim</th>
                                        <th scope="col">Soyisim</th>
                                        <th scope="col">İzin Başlangıç Tarihi</th>
                                        <th scope="col">İzin Bitiş Tarihi</th>
                                        <th scope="col">İzin Gün Sayısı</th>       
                                        <th scope="col">İzin Türü</th>    
                                        <th scope="col">Açıklama</th>                                    
                                        <th scope="col"></th>
                                        
                                    </tr>
                                </thead>
                                
                                <tbody>
                                    {
                                        <PendingLeaveList leaves={pendingLeaveList} />
                                    }
                                  


                                </tbody>
                            </table>
                        </div>



                    </div>
                </div>


            </div>



        </>







    )
}

export default PendingLeave