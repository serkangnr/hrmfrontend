import React, { useEffect } from 'react'
import { HrmDispatch, useAppSelector } from '../../store'
import { useDispatch } from 'react-redux';


import Swal from 'sweetalert2';
import {  EStatus, Expenses, } from '../../store/feature/expensesSlice';


  
   
 
   
    function ExpensesEmployeeList(props: Expenses) {
        console.log('Status:', props.status);
        const getStatusText = (status: EStatus): string => {
            switch (status) {
                case EStatus.PENDING:
                    return 'BEKLEMEDE';
                case EStatus.ACTIVE:
                    return 'ONAYLANDI';
                case EStatus.PASSIVE:
                    return 'PASSIVE';
                case EStatus.REJECTED:
                    return 'REDDEDİLDİ';
                default:
                    return 'Bilinmiyor';
            }
        };
    
        return (
            <tr>
                <td>{props.expenseType}</td>
                <td>{props.amount}</td>
                <td>{props.description}</td>
                <td>{props.document}</td>
                <td>{props.expensesDate}</td>
                <td>{getStatusText(props.status)}</td>
                
            </tr>
        );
    }
    
    export default ExpensesEmployeeList;
