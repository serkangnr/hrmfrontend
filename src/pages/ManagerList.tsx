import React, { useEffect, useState } from 'react'
import AdminSidebar from '../component/molecules/Sidebar/AdminSidebar'

import { HrmDispatch, useAppSelector } from '../store';
import { useDispatch } from 'react-redux';

import { fetchAdminList } from '../store/feature/adminSlice';
import AdminListTablo from '../component/atoms/AdminListTablo';
import ContactCard from '../component/molecules/ContactCard';
import { fetchManagerListDto } from '../store/feature/managerSlice';
import ManagerListTablo from '../component/atoms/ManagerListToblo';

function ManagerList() {


    const managerList = useAppSelector(state => state.manager.managerListDto);
    const dispatch = useDispatch<HrmDispatch>();

    useEffect(() => {
        dispatch(fetchManagerListDto());

    }, [])






    return (
        <>

            <div className="contaniner">
            <div className="row shadow" style={{ height: '50px', backgroundColor: '#EEEEEE' }}>
        <ContactCard companyPhone="5555555555" companyEmail="assim@gmail.com" />
        </div>
                <div className="row">
                    <div className="col-2">

                        <AdminSidebar /> </div>
                    <div className="col-9">

                        <div className="row">
                            <table className="table table-dark table-striped mt-5">
                                <thead>
                                    <tr>
                                    <th colSpan={10} className="table-active  "><h1 className='text-center' >Şirket Yönetici Listesi</h1></th>
                                    </tr>

                                    


                                </thead>
                                <thead>
                                    <tr>
                                        <th scope="col">Avatar</th>
                                        <th scope="col">İsim</th>
                                        <th scope="col">Soyisim</th>
                                        <th scope="col">Doğum günü</th>
                                        <th scope="col">Telefon</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Adres</th>
                                        <th scope="col">Şirket ismi</th>
                                        <th scope="col">Cinsiyet</th>                              
                                        <th scope="col">Üyelik bitiş tarihi</th>
                                        
                                    </tr>
                                </thead>
                                
                                <tbody>
                                    {
                                        <ManagerListTablo managers={managerList} />
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

export default ManagerList