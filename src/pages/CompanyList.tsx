import React, { useEffect, useState } from 'react'
import AdminSidebar from '../component/molecules/Sidebar/AdminSidebar'

import { HrmDispatch, useAppSelector } from '../store';
import { useDispatch } from 'react-redux';



import ContactCard from '../component/molecules/ContactCard';
import { fetchCompanyList } from '../store/feature/companySlice';
import CompanyList from '../component/atoms/CompanyList';

function CompanyListPage() {


    const companyList = useAppSelector(state => state.company.companyList);
    const dispatch = useDispatch<HrmDispatch>();

    useEffect(() => {
        dispatch(fetchCompanyList());

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
                                    <th colSpan={8} className="table-active  "><h1 className='text-center' >Sirket Listesi</h1></th>
                                    </tr>

                                    


                                </thead>
                                <thead>
                                    <tr>
                                       
                                        <th scope="col">Logo</th>
                                        <th scope="col">Sirket Adi</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Adres</th>
                                        <th scope="col">Telefon</th>
                                        <th scope="col">Sektor</th>
                                        <th scope="col">Web Site</th>
                                        <th scope="col"></th>
                                        
                                    </tr>
                                </thead>
                                
                                <tbody>
                                    {
                                        companyList.map((company, index) => (
                                          
                                            <CompanyList
                                                key={index}
                                                id={company.id}
                                                logo={company.logo}
                                                name={company.name}
                                                email={company.email}
                                                address={company.address}
                                                phone={company.phone}
                                                sector={company.sector}
                                                website={company.website}
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

export default CompanyListPage