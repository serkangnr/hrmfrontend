// EquipmentTable.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HrmDispatch, useAppSelector } from '../../store';
import { fetchAllEquipments, fetchDeleteEquipment, fetchGetRejectedEquipments, IEquipmentResponseList } from '../../store/feature/equipmentSlice';
import Swal from 'sweetalert2';


const RejectedEquipmentTable: React.FC = () => {
    const dispatch = useDispatch<HrmDispatch>();
    const equipmentResponseList = useAppSelector((state) => state.equipment.equipmentResponseList);
    const token = useAppSelector((state) => state.auth.token);
    
   

    useEffect(() => {
        
        
        dispatch(fetchGetRejectedEquipments(token));
    }, [dispatch]);

    const deleteEquipment = (id: number )=> {
        dispatch(fetchDeleteEquipment(id))
            .then((response) => {
                if (response.payload.code === 200) {
                    Swal.fire('Başarı!', 'Zimmet Silindi', 'success');
                    dispatch(fetchGetRejectedEquipments(token));
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
        < >
            
              
               
                   
                    
                        {equipmentResponseList.map((equipment: IEquipmentResponseList) => (
                            <tr key={equipment.id}>
                               <td style={{whiteSpace: 'nowrap'}} >{equipment.employeeName}</td>
                               <td style={{whiteSpace: 'nowrap'}} >{equipment.employeeSurname}</td>
                               <td style={{whiteSpace: 'nowrap'}} >{equipment.fixtureNo}</td>
                                <td style={{whiteSpace: 'nowrap'}} >{equipment.name}</td>
                                <td style={{whiteSpace: 'nowrap'}} >{equipment.equipmentType}</td>
                                <td style={{whiteSpace: 'nowrap'}}>{equipment.description}</td>

                                <td className="text-start"    style={{width:'300px'}}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button  style={{width:'100px'}} type="button" className="btn btn-danger" onClick={() => deleteEquipment(equipment.id)}>Tamam</button>
                                
                                
                            </td>

                            </tr>
                        ))}
                  
               
            
        </>
    );
};

export default RejectedEquipmentTable;
