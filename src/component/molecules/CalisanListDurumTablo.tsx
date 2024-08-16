import React, { useState } from 'react'
import { IEmployeeList } from '../../models/IEmployeeList'
import { useDispatch } from 'react-redux';
import { HrmDispatch, useAppSelector } from '../../store';
import { fetchActivateEmployee, fetchDeleteEmployee, fetchEmployeeList, fetchgetEmployee, fetchPassivateEmployee, fetchUpdateEmployee } from '../../store/feature/employeeSlice';
import Swal from 'sweetalert2';
import { Token } from 'typescript';

function CalisanListDurumTablo({employees}:{employees:IEmployeeList[]}) {
    const dispatch = useDispatch<HrmDispatch>();
    const token=useAppSelector(state=>state.auth.token)

    const activateEmployee = (id: string) => {
        dispatch(fetchActivateEmployee(id))
            .then((response) => {
                if (response.payload.code === 200) {
                    Swal.fire('Başarı!', 'Çalışan aktif edildi.', 'success');
                    dispatch(fetchEmployeeList(token));
                } else {
                    Swal.fire('Hata!', response.payload.message, 'error');
                    throw new Error(response.payload.message);
                }
            })
            .catch((error) => {
                console.error("Hata oluştu:", error);
            });
    };

    const passivateEmployee = (id: string) => {
        dispatch(fetchPassivateEmployee(id))
            .then((response) => {
                if (response.payload.code === 200) {
                    Swal.fire('Başarı!', 'Çalışan pasif edildi.', 'success');
                    dispatch(fetchEmployeeList(token));
                } else {
                    Swal.fire('Hata!', response.payload.message, 'error');
                    throw new Error(response.payload.message);
                }
            })
            .catch((error) => {
                console.error("Hata oluştu:", error);
            });
    };





  return (
    <>

{employees.map((employee) => (
   
    
                        <tr key={employee.id} >
                            
                            <td>{employee.name}</td>
                            <td>{employee.surname}</td>
                            <td>{employee.email}</td>
                            <td>{employee.address}</td>
                            <td>{employee.phoneNumber}</td>
                          
                            <td>{employee.identityNumber}</td>
                            <td>{employee.birthDate}</td>
                            <td>{employee.jobStartDate}</td>
                           
                            <td>{employee.position}</td>
                            <td>{employee.salary}</td>
                            <td>{employee.department}</td>
                            <td>{employee.occupation}</td>
                            <td>{employee.gender}</td>
                            <td style={{width:'300px'}}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button type="button" className="btn btn-primary" onClick={() => activateEmployee(employee.id)} >Aktif Et</button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button type="button" className="btn btn-danger" onClick={() => passivateEmployee(employee.id)} >Pasif Et</button>
                            </td>
                        </tr>
                    ))}
                

           

    
</>
  )
}

export default CalisanListDurumTablo