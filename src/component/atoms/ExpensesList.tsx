import React, { useEffect } from 'react'
import { HrmDispatch, useAppSelector } from '../../store'
import { useDispatch } from 'react-redux';


import Swal from 'sweetalert2';
import {  ExpensesResponseDto, fetchConfirmExpense, fetchListExpenses, fetchPendingExpensesCount, fetchRejectExpense } from '../../store/feature/expensesSlice';
import { setToken } from '../../store/feature/authSlice';

function ExpensesList(props: ExpensesResponseDto) {
    const dispatch = useDispatch<HrmDispatch>();
    const token =useAppSelector(state=>state.auth.token)
   
   
    const confirm = () => {
        dispatch(fetchConfirmExpense(props.id))
        .then((data)=>{
            if (data.payload===true) {
                
                Swal.fire('Başarı!', 'Harcama Onaylandı', 'success');
               
            } else {
                Swal.fire('Hata!', data.payload.message, 'error');
            }
        }).then(
            ()=>{
                dispatch(fetchListExpenses(token))
            }
        )
        .then(
            ()=>{
                dispatch(fetchPendingExpensesCount(token))
            }
        )
        
    }
    const disconfirm = () => {
        dispatch(fetchRejectExpense(props.id))
        .then((data)=>{
            if (data.payload===true) {
                Swal.fire('Başarı!', 'Harcama Reddedildi.', 'success');
            } else {
                Swal.fire('Hata!', data.payload.message, 'error');
            }
          
        }).then(
            ()=>{
                dispatch(fetchListExpenses(token))
            }
        )
        .then(
            ()=>{
               dispatch(fetchPendingExpensesCount(token))
            }
        )
        
    }
   
  

    

    
    
  
    return (
        <>
<tr>
    <td>{props.employeeName}</td>
    <td>{props.employeeSurname}</td>
    <td>{props.expenseType}</td>
    <td>{props.amount}</td>
    <td>{props.description}</td>
    <td>
        <img
            style={{ width: '75px', height: '75px', borderRadius: '20px' }}
            src='http://localhost:9098/images/marka.png'
          
        />
    </td>
    <td>{props.expensesDate}</td>
    <td>
        <a onClick={confirm} href="#" className="btn btn-outline-info btn-sm mb-3">
            <i className="fa-solid fa-check" style={{ color: "green" }}></i>
        </a>
    </td> 
    <td>
        <a onClick={disconfirm} href="#" className="btn btn-outline-info btn-sm mb-3">
            <i className="fa-solid fa-xmark" style={{ color: "red" }}></i>
        </a>
    </td>
</tr>
        </>
    )
}

export default ExpensesList