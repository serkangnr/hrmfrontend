import React, { useEffect } from 'react'

import { HrmDispatch, useAppSelector } from '../store';
import { useDispatch } from 'react-redux';


import 'bootstrap/dist/css/bootstrap.min.css';
import ContactCard from '../component/molecules/ContactCard';
import {  fetchMyExpenses } from '../store/feature/expensesSlice';

import ManagerSidebar from '../component/molecules/Sidebar/ManagerSidebar';
import ExpensesEmployeeList from '../component/atoms/ExpensesEmployeeList';

function EmployeeExpensesList() {


    const myExpensesList = useAppSelector(state => state.expenses.myExpensesList);
    const dispatch = useDispatch<HrmDispatch>();
    const token = useAppSelector(state => state.auth.token);

    useEffect(() => {
        dispatch(fetchMyExpenses(token));

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


                                <th colSpan={9} className="table-active  "><h1 className='text-center' >Onay Bekleyen Harcamalar</h1></th>


                            </thead>
                            <thead>
                                <tr>
                                   
                                    <th scope="col">Harcama Türü</th>
                                    <th scope="col">Harcama Miktarı</th>
                                    <th scope="col">Açıklama</th>
                                    <th scope="col">Belge</th>
                                    <th scope="col">Harcama Tarihi</th>
                                    <th scope="col">Onay Durumu</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {myExpensesList && myExpensesList.length > 0 ? (
                                    myExpensesList.map((expenses, index) => (
                                        <ExpensesEmployeeList
                                        key={index}
                                        id={expenses.id}
                                        expenseType={expenses.expenseType}
                                        amount={expenses.amount}
                                        description={expenses.description}
                                        document={expenses.document}
                                        expensesDate={expenses.expensesDate}
                                        status={expenses.status}
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

export default EmployeeExpensesList