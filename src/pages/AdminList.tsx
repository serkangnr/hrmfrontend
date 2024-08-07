import React, { useEffect, useState } from 'react'
import AdminSidebar from '../component/molecules/Sidebar/AdminSidebar'

import { HrmDispatch, useAppSelector } from '../store';
import { useDispatch } from 'react-redux';

import { fetchAdminList } from '../store/feature/adminSlice';
import AdminListTablo from '../component/atoms/AdminListTablo';
import ContactCard from '../component/molecules/ContactCard';

function AdminList() {


    const adminList = useAppSelector(state => state.admin.adminList);
    const dispatch = useDispatch<HrmDispatch>();

    useEffect(() => {
        dispatch(fetchAdminList());

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
                                    <th colSpan={8} className="table-active  "><h1 className='text-center' >Admin Listesi</h1></th>
                                    </tr>

                                    


                                </thead>
                                <thead>
                                    <tr>
                                       
                                        <th scope="col">İsim</th>
                                        <th scope="col">Soyisim</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Adres</th>
                                        <th scope="col">Telefon</th>
                                        <th scope="col">Avatar</th>
                                        <th scope="col"></th>
                                        
                                    </tr>
                                </thead>
                                
                                <tbody>
                                    {
                                        adminList.map((admin, index) => (
                                          
                                            <AdminListTablo
                                                key={index}
                                                id={admin.id}
                                                name={admin.name}
                                                surname={admin.surname}
                                                email={admin.email}
                                                address={admin.address}
                                                phone={admin.phone}
                                                avatar={admin.avatar}
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

export default AdminList