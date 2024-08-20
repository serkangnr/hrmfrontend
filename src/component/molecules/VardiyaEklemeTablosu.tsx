import React, {  useState } from 'react'

import { useDispatch } from 'react-redux';
import { HrmDispatch, useAppSelector } from '../../store';
import {  fetchgetEmployee, fetchVardiyaList, VardiyaResponseDto } from '../../store/feature/employeeSlice';
import Swal from 'sweetalert2';

import { EShiftType, fetchCreateShift, fetchDeleteShift} from '../../store/feature/shiftSlice';



function VardiyaEklemeTablosu({ employees }: { employees: VardiyaResponseDto[] }) {
    
    const dispatch = useDispatch<HrmDispatch>();
    const [selectedEmployeeId, setSelectedEmployeeId] = useState<string | null>(null);
    

    const token = useAppSelector(state => state.auth.token);

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

    const [startDate, setStartDate] = useState<string>('');
    const [endDate, setEndDate] = useState<string>('');
    const [shiftType, setShiftType] = useState<EShiftType>(EShiftType.SABAH_ALTI_ONIKI);
   

    
    
    
    const handleLeaveTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setShiftType(event.target.value as EShiftType);
    };

    
   

    const addShift = (id: string) => {
        setSelectedEmployeeId(id);
        dispatch(fetchgetEmployee(id)).then((response) => {
            const data = response.payload.data;
            setId(data.id);
            setName(data.name || '');
            setSurname(data.surname || '');
        })
    };

    const deleteShift = (id: string) => {
        dispatch(fetchDeleteShift(id))
        
            .then((response) => {
                if (response.payload.code === 200) {
                    Swal.fire('Başarı!', 'Vardiya silindi', 'success');
                    dispatch(fetchVardiyaList(token));
                    console.log('delete için id............',id);
                } else {
                    Swal.fire('Hata!', response.payload.message, 'error');
                    throw new Error(response.payload.message);
                }
            })
            .catch((error) => {
                console.error("Hata oluştu:", error);
            });
    };

    const createShift = () => {
        dispatch(fetchCreateShift({
            token: token,
            employeeId: id,
            name: name,
            surname: surname,
            shiftType: shiftType,
            startDate: startDate,
            endDate: endDate,
            
            
        })).then(data => {
            if (data.payload.code === 200) {
                Swal.fire("Başarılı!", "Vardiya eklenmiştir!", "success");
                dispatch(fetchVardiyaList(token));
                console.log('create için id............',id);
                
            } else {
                Swal.fire("Hata!", "Vardiya eklenemedi!", "error");
            }
        });
    };
    
   

 


    return (
        
        <>

            {employees.map((employee) => (
            console.log(employee.id),

                <tr key={employee.id} >

                    <td style={{whiteSpace: 'nowrap'}}>{employee.name}</td>
                    <td style={{whiteSpace: 'nowrap'}}>{employee.surname}</td>
                    <td style={{whiteSpace: 'nowrap'}}>{employee.email}</td>
                    <td style={{whiteSpace: 'nowrap'}}>{employee.phoneNumber}</td>
                    <td style={{whiteSpace: 'nowrap'}}>{employee.position}</td>

                    <td style={{whiteSpace: 'nowrap'}}>{employee.department}</td>
                    <td style={{whiteSpace: 'nowrap'}}>{employee.occupation}</td>
                    <td style={{whiteSpace: 'nowrap'}}>{employee.gender}</td>
                    <td >{employee.shiftType}</td>
                    <td style={{whiteSpace: 'nowrap'}}>{employee.startDate}</td>
                    <td style={{whiteSpace: 'nowrap'}}>{employee.endDate}</td>
                    
                    
                    
                   
                    <td >
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            onClick={() => addShift(employee.id)}
                        >
                            Vardiya Ekle
                        </button>
                        
                    </td>
                    <td >
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => deleteShift(employee.id)}
                        >
                            Vardiya Sil
                        </button>
                        
                    </td>
                </tr>
            ))}


            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Vardiya Oluştur</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">



                            <div className="mb-3">
                                <h5 style={{ color: 'black' }}>İSİM</h5>
                                <input
                                    value={name}
                                    onChange={evt => setName(evt.target.value)}
                                    type="text"
                                    className="form-control"
                                    id="name"
                                />
                            </div>
                            <div className="mb-3">
                                <h5 style={{ color: 'black' }}>SOYİSİM</h5>
                                <input
                                    value={surname}
                                    onChange={evt => setSurname(evt.target.value)}
                                    type="text"
                                    className="form-control"
                                    id="surname"
                                />
                            </div>
                            <div className="mb-3">
                                <h5 style={{ color: 'black' }}>VARDİYA BAŞLAMA TARİHİ</h5>
                                <input
                                    type="date"
                                    value={startDate}
                                    onChange={evt => setStartDate(evt.target.value)}
                                    className="form-control"
                                    id="startDate"
                                />
                            </div>
                            <div className="mb-3">
                                <h5 style={{ color: 'black' }}>VARDİYA BİTİŞ TARİHİ</h5>
                                <input
                                    type="date"
                                    value={endDate}
                                    onChange={evt => setEndDate(evt.target.value)}
                                    className="form-control"
                                    id="endDate"
                                />
                            </div>

                            <div>
                                <h5 style={{ color: 'black' }}>VARDİYA TÜRÜ</h5>
                                <select

                                    value={shiftType}
                                    onChange={handleLeaveTypeChange}
                                    className="form-control"
                                    id="leaveType"
                                >
                                    {Object.values(EShiftType).map((shift) => (
                                        <option key={shift} value={shift}>
                                            {shift.replace('_', ' ').toUpperCase()}
                                        </option>
                                    ))}
                                </select>
                            </div>

                           







                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={createShift}>Kaydet</button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default VardiyaEklemeTablosu;