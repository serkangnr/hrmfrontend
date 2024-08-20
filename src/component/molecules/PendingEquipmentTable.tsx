// EquipmentTable.tsx
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { HrmDispatch, useAppSelector } from '../../store';
import { fetchAcceptEquipment, fetchGetMyEquipments, fetchGetPendingEquipmentCount, fetchGetPendingEquipments, fetchRejectEquipment, IEquipmentResponseList } from '../../store/feature/equipmentSlice';
import Swal from 'sweetalert2';



const PendingEquipmentTable: React.FC = () => {
    const dispatch = useDispatch<HrmDispatch>();
    const equipmentResponseList = useAppSelector((state) => state.equipment.equipmentResponseList);
    const token = useAppSelector((state) => state.auth.token);
    const [description, setDescription] = useState('')



    useEffect(() => {


        dispatch(fetchGetPendingEquipments(token));
    }, [dispatch]);



    const acceptEquipment = (id: number) => {
        dispatch(fetchAcceptEquipment(id))
            .then((response) => {
                if (response.payload.code === 200) {
                    Swal.fire('Başarı!', 'Zimmet Onaylandı', 'success');
                    dispatch(fetchGetPendingEquipments(token));
                } else {
                    Swal.fire('Hata!', response.payload.message, 'error');
                    throw new Error(response.payload.message);
                }
            })
            .catch((error) => {
                console.error("Hata oluştu:", error);
            }).then(
                () => {
                    dispatch(fetchGetPendingEquipmentCount(token))
                }
            )
    };

    const rejectEquipment = (id: number) => {
        Swal.fire({
            title: 'Açıklama Girin',
            input: 'text',
            inputPlaceholder: 'Açıklama yazınız...',
            showCancelButton: true,
            confirmButtonText: 'Reddet',
            cancelButtonText: 'İptal',
            preConfirm: (description) => {
                if (!description) {
                    Swal.showValidationMessage('Açıklama girmelisiniz');
                }
                return description;
            }
        }).then((result) => {
            if (result.isConfirmed) {
                const payload = { id, description: result.value };
                dispatch(fetchRejectEquipment(payload))
                    .then((response) => {
                        if (response.payload.code === 200) {
                            Swal.fire('Başarı!', 'Zimmet Reddedildi', 'success');
                            dispatch(fetchGetPendingEquipments(token));
                        } else {
                            Swal.fire('Hata!', response.payload.message, 'error');
                            throw new Error(response.payload.message);
                        }
                    })
                    .catch((error) => {
                        console.error("Hata oluştu:", error);
                    })
                    .then(() => {
                        dispatch(fetchGetPendingEquipmentCount(token));
                    });
            }
        });
    };




    return (
        < >





            {equipmentResponseList.map((equipment: IEquipmentResponseList) => (
                <tr key={equipment.id}>
                    <td style={{ whiteSpace: 'nowrap' }} >{equipment.fixtureNo}</td>
                    <td style={{ whiteSpace: 'nowrap' }} >{equipment.name}</td>
                    <td style={{ whiteSpace: 'nowrap' }} >{equipment.equipmentType}</td>
                    <td style={{ whiteSpace: 'nowrap' }}>{equipment.receivingDate}</td>

                    <td className="text-start" style={{ width: '300px' }}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button style={{ width: '100px' }} type="button" className="btn btn-success" onClick={() => acceptEquipment(equipment.id)}>Onayla</button>



                    </td>
                    <td className="text-start" style={{ width: '300px' }}>
                        <button
                            style={{ width: '100px' }}
                            type="button"
                            className="btn btn-danger"
                            onClick={() => rejectEquipment(equipment.id)}
                        >
                            Reddet
                        </button>
                    </td>




                </tr>
            ))}



        </>
    );
};

export default PendingEquipmentTable;
