import { useDispatch } from "react-redux";
import { HrmDispatch, useAppSelector } from "../../store";
import { fetchAdminList, fetchDeleteAdmin, fetchgetAdmin, fetchUpdateAdmin } from "../../store/feature/adminSlice";
import { IAdminList } from "../../models/IAdminList";
import Swal from "sweetalert2";
import { useState } from "react";
import { fetchApproveLeave, fetchDisapproveLeave, fetchGetPendingLeave, fetchGetPendingLeaveCount, ILeaveIdentity } from "../../store/feature/leaveSlice";

function PendingLeaveList({ leaves }: { leaves: ILeaveIdentity[] }) {
    
    const dispatch = useDispatch<HrmDispatch>();
    const token = useAppSelector(state => state.auth.token)

    const confirm = (id:number) => {
        dispatch(fetchApproveLeave(id))
        .then((data)=>{
            if (data.payload.code === 200) {
                // Başarılı yanıt durumunda yapılacak işlemler
                Swal.fire('Başarı!', 'İzin başarıyla onaylandı.', 'success');
                // İsteğe bağlı: Onaylanan yöneticiyi veya ilgili veriyi state'e ekleyebilirsiniz
            } else {
                Swal.fire('Hata!', data.payload.message, 'error');
            }
        }).then(
            ()=>{
                dispatch(fetchGetPendingLeave(token))
            }
        ).then(
            ()=>{
                dispatch(fetchGetPendingLeaveCount(token))
            }
        )
        
    }
    const disconfirm = (id:number) => {
        dispatch(fetchDisapproveLeave(id))
        .then((data)=>{
            if (data.payload.code === 200) {
                // Başarılı yanıt durumunda yapılacak işlemler
                Swal.fire('Başarı!', 'İzin başarıyla reddedildi.', 'success');
                // İsteğe bağlı: Onaylanan yöneticiyi veya ilgili veriyi state'e ekleyebilirsiniz
            } else {
                Swal.fire('Hata!', data.payload.message, 'error');
            }
        }).then(
            ()=>{
                dispatch(fetchGetPendingLeave(token))
            }
        ).then(
            ()=>{
                dispatch(fetchGetPendingLeaveCount(token))
            }
        )
        
    }

   

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
                                <button onClick={() => confirm(leave.id)}  type="button" className="btn btn-primary">ONAYLA</button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button onClick={() => disconfirm(leave.id)}  type="button" className="btn btn-danger">REDDET</button>
                            </td>
                        </tr>
                    ))}
                

           
        </>
    );
}

export default PendingLeaveList;
