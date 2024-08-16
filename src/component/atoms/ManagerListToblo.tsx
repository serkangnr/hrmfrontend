import { useDispatch } from "react-redux";
import { HrmDispatch, useAppSelector } from "../../store";
import { fetchAdminList, fetchDeleteAdmin, fetchgetAdmin, fetchUpdateAdmin } from "../../store/feature/adminSlice";
import { IAdminList } from "../../models/IAdminList";
import Swal from "sweetalert2";
import { useState } from "react";
import { ManagerResponseDto } from "../../store/feature/managerSlice";

function ManagerListTablo({ managers }: { managers: ManagerResponseDto[] }) {
    const dispatch = useDispatch<HrmDispatch>();
    const [editManager, setEditManager] = useState<ManagerResponseDto | null>(null);
    

   



    return (
        <>
          
              
                
                    {managers.map((manager) => (
                        <tr >
                            <td><img src={manager.avatar} style={{width:'75px',height:'75px',borderRadius:'20px'}} /></td>
                            <td>{manager.name}</td>
                            <td>{manager.surname}</td>
                            <td>{manager.birthDate}</td>
                            <td>{manager.phone}</td>
                            <td>{manager.email}</td>
                            <td>{manager.address}</td>
                            <td>{manager.companyName}</td>
                            <td>{manager.gender}</td>
                            <td>{manager.registrationEndDate}</td>
                       
                        </tr>
                    ))}
                

         
        </>
    );
}

export default ManagerListTablo;
