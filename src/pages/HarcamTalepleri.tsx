import React, { useEffect } from 'react'
import AdminSidebar from '../component/molecules/Sidebar/AdminSidebar'
import VerifyList from '../component/atoms/VerifyList'
import { HrmDispatch, useAppSelector } from '../store';
import { useDispatch } from 'react-redux';
import { fetchPendingManagers } from '../store/feature/authSlice';

import 'bootstrap/dist/css/bootstrap.min.css';
import ContactCard from '../component/molecules/ContactCard';
import { fetchListExpenses, fetchMyExpenses } from '../store/feature/expensesSlice';
import ExpensesList from '../component/atoms/ExpensesList';
import ManagerSidebar from '../component/molecules/Sidebar/ManagerSidebar';

function HarcamaTalepleri() {


    const expensesList = useAppSelector(state => state.expenses.expensesList);
    const dispatch = useDispatch<HrmDispatch>();
    const token = useAppSelector(state => state.auth.token);

    useEffect(() => {
        dispatch(fetchListExpenses(token));

    }, [])






    return (
        <>

            <div className="contaniner ">
                <div className="row shadow" style={{ height: '50px', backgroundColor: '#EEEEEE' }}>
                    <ContactCard companyPhone="5555555555" companyEmail="assim@gmail.com" />
                </div>
                <div className="row">
                    <div className="col-2">

                        <ManagerSidebar /> </div>
                    <div className="col-9 ">





                        <table className="table table-dark table-striped  mt-5" >
                            <thead>


                                <th colSpan={10} className="table-active  "><h1 className='text-center' >Onay Bekleyen Harcamalar</h1></th>


                            </thead>
                            <thead>
                                <tr>
                                    <th scope="col">İsim</th>
                                    <th scope="col">Soyisim</th>
                                    <th scope="col">Harcama Türü</th>
                                    <th scope="col">Harcama Miktarı</th>
                                    <th scope="col">Açıklama</th>
                                    <th scope="col">Belge</th>
                                    <th scope="col">Harcama Tarihi</th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {expensesList && expensesList.length > 0 ? (
                                    expensesList.map((expenses, index) => (
                                        <ExpensesList
                                        key={index}
                                        id={expenses.id}
                                        employeeName={expenses.employeeName}
                                        employeeSurname={expenses.employeeSurname}
                                        expenseType={expenses.expenseType}
                                        amount={expenses.amount}
                                        description={expenses.description}
                                        document={expenses.document}
                                        expensesDate={expenses.expensesDate}
                                        />
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={9} className="text-center">Veri bulunamadı.</td>
                                    </tr>
                                )}

                            </tbody>
                        </table>
                    </div>





                </div>
            </div>
           





        </>







    )
}

export default HarcamaTalepleri