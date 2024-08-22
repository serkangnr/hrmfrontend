import React, { useState } from 'react'
import { IEmployeeList } from '../../models/IEmployeeList'
import { useDispatch } from 'react-redux';
import { HrmDispatch, useAppSelector } from '../../store';
import { fetchDeleteEmployee, fetchEmployeeList, fetchgetEmployee, fetchUpdateEmployee } from '../../store/feature/employeeSlice';
import Swal from 'sweetalert2';
import { ELeaveType, fetchSaveLeave } from '../../store/feature/leaveSlice';
import { EEquipmentType, fetchSaveEquipment } from '../../store/feature/equipmentSlice';

function ZimmetEklemeTablosu({ employees }: { employees: IEmployeeList[] }) {
    const dispatch = useDispatch<HrmDispatch>();
    const [selectedEmployeeId, setSelectedEmployeeId] = useState<string | null>(null);

    const token = useAppSelector(state => state.auth.token);

    const [id, setId] = useState('');
    const [name, setName] = useState('');
   

  
    const [ equipmentType, setEquipmentType] = useState<EEquipmentType>(EEquipmentType.BILGISAYAR);
   
    const [description, setDescription] = useState('');
    const handleEquipmentTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setEquipmentType(event.target.value as EEquipmentType);
    };
    const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(event.target.value);
    };

    const addEquipment = (id: string) => {
        setSelectedEmployeeId(id);
        dispatch(fetchgetEmployee(id)).then((response) => {
            const data = response.payload.data;
            setId(data.id);
            
           
        });
    };

    const createEquipment = () => {
        dispatch(fetchSaveEquipment({
            employeeId: id,
            name: name,
            equipmentType: equipmentType,
            description: description,
            token:token
        })).then(data => {
            if (data.payload.code === 200) {
                Swal.fire("Başarılı!", "Zimmet Eklenmiştir!", "success");
            } else {
                Swal.fire("Hata!", "Zimmet eklenemedi!", "error");
            }
        });
    };
    




    return (
        <>

            {employees.map((employee) => (


                <tr key={employee.id} >

                    <td style={{whiteSpace: 'nowrap'}}>{employee.name}</td>
                    <td style={{whiteSpace: 'nowrap'}}>{employee.surname}</td>
                    <td style={{whiteSpace: 'nowrap'}}>{employee.email}</td>
                   <td style={{whiteSpace: 'nowrap'}}>{employee.position}</td>
                    <td style={{whiteSpace: 'nowrap'}}>{employee.department}</td>
                    <td style={{whiteSpace: 'nowrap'}}>{employee.occupation}</td>
                    <td style={{ width: '300px' }}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            onClick={() => addEquipment(employee.id)}
                        >
                            Zimmet Ekle
                        </button>
                    </td>
                </tr>
            ))}


            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Zimmet Ekle</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">



                            <div className="mb-3">
                                <h5 style={{ color: 'black' }}>MARKA</h5>
                                <input
                                    value={name}
                                    onChange={evt => setName(evt.target.value)}
                                    type="text"
                                    className="form-control"
                                    id="name"
                                />
                            </div>
                            

                            <div>
                                <h5 style={{ color: 'black' }}>ZİMMET TÜRÜ</h5>
                                <select

                                    value={equipmentType}
                                    onChange={handleEquipmentTypeChange}
                                    className="form-control"
                                    id="leaveType"
                                >
                                    {Object.values(EEquipmentType).map((leave) => (
                                        <option key={leave} value={leave}>
                                            {leave.replace('_', ' ').toUpperCase()}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <h5 style={{ color: 'black' }}>AÇIKLAMA</h5>
                                <textarea
                                    value={description}
                                    onChange={handleDescriptionChange}
                                    className="form-control"
                                    id="description"
                                    rows={5} // Textarea'nın yüksekliğini ayarlamak için 'rows' kullanabilirsiniz
                                    placeholder="İzinle ilgili açıklamaları buraya yazın..."
                                />
                            </div>







                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={createEquipment}>Ekle</button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default ZimmetEklemeTablosu;