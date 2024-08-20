import React, { useEffect } from 'react'
import ContactCard from '../component/molecules/ContactCard'
import { HrmDispatch, useAppSelector } from '../store';
import { useDispatch } from 'react-redux';
import { fetchEmployeeList } from '../store/feature/employeeSlice';
import { setToken } from '../store/feature/authSlice';
import EmployeeEquipmentTable from '../component/molecules/EmployeeEquipmentTable';
import EmployeeSidebar from '../component/molecules/Sidebar/EmployeeSidebar';

function EmployeeEquipmentTablePage() {


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

                        <EmployeeSidebar /> </div>
                    <div className="col-9">

                        <div className="row">
                            <table className="table table-dark table-striped mt-5">
                                <thead>
                                    <tr>
                                        <th colSpan={4} className="table-active  "><h1 className='text-center' >Zimmet Listesi</h1></th>
                                    </tr>




                                </thead>
                                <thead>
                                    <tr>


                                        <th scope="col" >Demirbaş No</th>
                                        <th scope="col" >Marka</th>
                                        <th scope="col">Tür</th>
                                        <th scope="col" >Alınma Tarihi</th>




                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        <EmployeeEquipmentTable />
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

export default EmployeeEquipmentTablePage