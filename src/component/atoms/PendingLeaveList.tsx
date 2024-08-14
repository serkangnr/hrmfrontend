import { useDispatch } from "react-redux";
import { HrmDispatch, useAppSelector } from "../../store";
import { fetchAdminList, fetchDeleteAdmin, fetchgetAdmin, fetchUpdateAdmin } from "../../store/feature/adminSlice";
import { IAdminList } from "../../models/IAdminList";
import Swal from "sweetalert2";
import { useState } from "react";
import { ILeaveIdentity } from "../../store/feature/leaveSlice";

function PendingLeaveList({ leaves }: { leaves: ILeaveIdentity[] }) {
    



   

    return (
        <>
          
              
                
                    {leaves.map((leave) => (
                        <tr key={leave.id}>
                            
                            <td>{leave.name}</td>
                            <td>{leave.surname}</td>
                            <td>{leave.startDate}</td>
                            <td>{leave.endDate}</td>
                            <td>{leave.numberOfDays}</td>
                              <td>{leave.leaveType}</td>
                            <td>{leave.description}</td>
                            <td style={{width:'300px'}}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button type="button" className="btn btn-primary">ONAYLA</button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    
                                >
                                    REDDET
                                </button>
                            </td>
                        </tr>
                    ))}
                

           
        </>
    );
}

export default PendingLeaveList;
