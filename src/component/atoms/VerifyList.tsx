import React, { useEffect } from 'react'
import { HrmDispatch, useAppSelector } from '../../store'
import { useDispatch } from 'react-redux';
import { fetchConfirmManager, fetchDisConfirmManager, fetchPendingManagers } from '../../store/feature/authSlice';
import { IVerifyList } from '../../models/IVerifyList';

function VerifyList(props: IVerifyList) {
    const dispatch = useDispatch<HrmDispatch>();
   
    const confirm = () => {
        dispatch(fetchConfirmManager(props.id))
    }
    const disconfirm = () => {
        dispatch(fetchDisConfirmManager(props.id));
    }

    

    
    
    console.log(props.id);
    return (
        <>

            <tr>
                
                <td>{props.id}</td>
                <td>{props.email}</td>
                <td>{props.password}</td>
                <td>{props.role}</td>
                <td>{props.status}</td>
                <td>{props.emailVerify}</td>
                <td> <a onClick={confirm} href="#" className="btn btn-outline-info btn-sm mb-3">
                <i className="fa-solid fa-check" style={{ color: "green" }}></i></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a onClick={disconfirm} href="#" className="btn btn-outline-info btn-sm mb-3">
                <i className="fa-solid fa-xmark" style={{ color: "red" }}></i> </a>  </td> 
            </tr>
            
        </>
    )
}

export default VerifyList