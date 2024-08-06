import React, { useEffect } from 'react'
import AdminSidebar from '../component/molecules/Sidebar/AdminSidebar'
import VerifyList from '../component/atoms/VerifyList'
import { HrmDispatch, useAppSelector } from '../store';
import { useDispatch } from 'react-redux';
import { fetchPendingManagers } from '../store/feature/authSlice';

function OnayBekleyenler() {

    const verifyManagerList = useAppSelector(state => state.auth.verifyManagerList);
    const dispatch = useDispatch<HrmDispatch>();

    useEffect(() => {
        dispatch(fetchPendingManagers());
    }, [dispatch]);

    useEffect(() => {
        console.log('verifyManagerList:', verifyManagerList); // verifyManagerList'in yapısını kontrol et
    }, [verifyManagerList]);

    useEffect(() => {
        dispatch(fetchPendingManagers());
    }, [verifyManagerList]);
    

    return (
        <>

            <div className="contaniner">
                <div className="row" style={{ height: '50px', backgroundColor: 'black' }}>

                </div>
                <div className="row">
                    <div className="col-2">

                        <AdminSidebar /> </div>
                    <div className="col-9">

                        <div className="row">
                            <table className="table table-dark table-striped mt-5">
                                <thead>
                                    <tr>
                                        
                                        <th scope="col">Id</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Password</th>
                                        <th scope="col">Role</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">EmailVerify</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                        verifyManagerList.map((auth, index) => (
                                            <VerifyList  
                                                key={index} 
                                                id={auth.id} 
                                                email={auth.email} 
                                                password={auth.password} 
                                                role={auth.role} 
                                                status={auth.status} 
                                                emailVerify={auth.emailVerify} 
                                            />
                                        ))
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

export default OnayBekleyenler