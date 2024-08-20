import React, { useEffect } from 'react'
import ContactCard from '../component/molecules/ContactCard'
import ManagerSidebar from '../component/molecules/Sidebar/ManagerSidebar'
import CalisanListTablo from '../component/molecules/CalisanListTablo'
import { HrmDispatch, useAppSelector } from '../store';
import { useDispatch } from 'react-redux';
import { fetchEmployeeList } from '../store/feature/employeeSlice';
import { setToken } from '../store/feature/authSlice';
import EquipmentTable from '../component/molecules/EquipmentTable';

function EquipmentTablePage() {

    const employeeList = useAppSelector(state => state.employee.employeeList);
    const dispatch = useDispatch<HrmDispatch>();
    const token = useAppSelector(state => state.auth.token);
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            dispatch(setToken(token));
        }
    }, [dispatch]);

    useEffect(() => {
        if (token) {
            dispatch(fetchEmployeeList(token));
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
                                        <th colSpan={7} className="table-active  "><h1 className='text-center' >Zimmet Listesi</h1></th>
                                    </tr>




                                </thead>
                                <thead>
                                    <tr>


                                        <th scope="col" >Çalışan Adı</th>
                                        <th scope="col" >Çalışan Soyadı</th>
                                        <th scope="col" >Demirbaş No</th>
                                        <th scope="col" >Marka</th>
                                        <th scope="col">Tür</th>
                                        <th scope="col" >Alınma Tarihi</th>
                                        <th scope="col"></th>



                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        <EquipmentTable />
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

export default EquipmentTablePage