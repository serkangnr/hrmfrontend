// EquipmentTable.tsx
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HrmDispatch, useAppSelector } from '../../store';
import {  fetchGetMyEquipments, IEquipmentResponseList } from '../../store/feature/equipmentSlice';



const EmployeeEquipmentTable: React.FC = () => {
    const dispatch = useDispatch<HrmDispatch>();
    const equipmentResponseList = useAppSelector((state) => state.equipment.equipmentResponseList);
    const token = useAppSelector((state) => state.auth.token);
    
   

    useEffect(() => {
        
        
        dispatch(fetchGetMyEquipments(token));
    }, [dispatch]);





   


    return (
        < >
            
              
               
                   
                    
                        {equipmentResponseList.map((equipment: IEquipmentResponseList) => (
                            <tr key={equipment.id}>
                                <td style={{whiteSpace: 'nowrap'}} >{equipment.fixtureNo}</td>
                                <td style={{whiteSpace: 'nowrap'}} >{equipment.name}</td>
                                <td style={{whiteSpace: 'nowrap'}} >{equipment.equipmentType}</td>
                                <td style={{whiteSpace: 'nowrap'}}>{equipment.receivingDate}</td>

                              
                               
                                
                                
                            

                            </tr>
                        ))}
                  
               
            
        </>
    );
};

export default EmployeeEquipmentTable;
