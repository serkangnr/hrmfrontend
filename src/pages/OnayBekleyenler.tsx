import React, { useEffect, useState } from 'react'
import AdminSidebar from '../component/molecules/Sidebar/AdminSidebar'
import VerifyList from '../component/atoms/VerifyList'
import { HrmDispatch, useAppSelector } from '../store';
import { useDispatch } from 'react-redux';
import { fetchConfirmManager, fetchPendingManagers } from '../store/feature/authSlice';
import { IVerifyList } from '../models/IVerifyList';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactCard from '../component/molecules/ContactCard';

function OnayBekleyenler() {


    const verifyManagerList = useAppSelector(state => state.auth.verifyManagerList);
    const dispatch = useDispatch<HrmDispatch>();

    useEffect(() => {
        dispatch(fetchPendingManagers());

    }, [])

    // const dispatch = useDispatch<HrmDispatch>(); 
    // const verifyManagerList = useAppSelector((state) => state.auth.verifyManagerList) as IVerifyList[]; 
    // const [isPending, setIsPending] = useState(true); 
    // useEffect(() => { dispatch(fetchPendingManagers()); 
    //     setIsPending(false); }, [dispatch]); 
    //     const handleApprove = (id: number) => {
    //     dispatch(fetchConfirmManager(id)).unwrap() 
    //     .then(() => { 
    //         dispatch(fetchPendingManagers()); }) .catch((error) => { 
    //             console.error('Onay işlemi sırasında hata:', error); }); };




        return (
            <>

                <div className="contaniner ">
                <div className="row shadow" style={{ height: '50px', backgroundColor: '#EEEEEE' }}>
        <ContactCard companyPhone="5555555555" companyEmail="assim@gmail.com" />
        </div>
                    <div className="row">
                        <div className="col-2">

                            <AdminSidebar /> </div>
                        <div className="col-9 ">
                            
                            
                            
                           
                                
                                <table className="table table-dark table-striped  mt-5" >
                                   <thead>
                                        

                                            <th colSpan={7} className="table-active  "><h1 className='text-center' >Onay Bekleyen Şirketler</h1></th>
                                           
                                        
                                    </thead>
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


                



            </>







        )
    }

    export default OnayBekleyenler