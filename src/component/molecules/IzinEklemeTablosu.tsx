import React, { useState } from 'react'
import { IEmployeeList } from '../../models/IEmployeeList'
import { useDispatch } from 'react-redux';
import { HrmDispatch, useAppSelector } from '../../store';
import { fetchDeleteEmployee, fetchEmployeeList, fetchgetEmployee, fetchUpdateEmployee } from '../../store/feature/employeeSlice';
import Swal from 'sweetalert2';
import { ELeaveType, fetchSaveLeave } from '../../store/feature/leaveSlice';

function IzinEklemeTablosu({ employees }: { employees: IEmployeeList[] }) {
    const dispatch = useDispatch<HrmDispatch>();
    const [selectedEmployeeId, setSelectedEmployeeId] = useState<string | null>(null);

    const token = useAppSelector(state => state.auth.token);

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

    const [startDate, setStartDate] = useState<string>('');
    const [endDate, setEndDate] = useState<string>('');
    const [leaveType, setLeaveType] = useState<ELeaveType>(ELeaveType.YILLIK_IZIN);
    const [numberOfDays, setNumberOfDays] = useState(0);
    const [description, setDescription] = useState('');
    const handleLeaveTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setLeaveType(event.target.value as ELeaveType);
    };
    const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(event.target.value);
    };

    const addLeave = (id: string) => {
        setSelectedEmployeeId(id);
        dispatch(fetchgetEmployee(id)).then((response) => {
            const data = response.payload.data;
            setId(data.id);
            setName(data.name || '');
            setSurname(data.surname || '');
        });
    };

    const createLeave = () => {
        dispatch(fetchSaveLeave({
            employeeId: id,
            name: name,
            surname: surname,
            startDate: startDate,
            endDate: endDate,
            leaveType: leaveType,
            description: description,
            token: token
        })).then(data => {
            if (data.payload.code === 200) {
                Swal.fire("Başarılı!", "İzin kayıt edilmiştir!", "success");
            } else {
                Swal.fire("Hata!", "İzin kayıt edilemedi!", "error");
            }
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
                    <td style={{ width: '300px' }}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            onClick={() => addLeave(employee.id)}
                        >
                            İzin Ekle
                        </button>
                    </td>
                </tr>
            ))}


            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">İzin Oluştur</h1>
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
                                <h5 style={{ color: 'black' }}>İZİN BAŞLAMA TARİHİ</h5>
                                <input
                                    type="date"
                                    value={startDate}
                                    onChange={evt => setStartDate(evt.target.value)}
                                    className="form-control"
                                    id="startDate"
                                />
                            </div>
                            <div className="mb-3">
                                <h5 style={{ color: 'black' }}>İZİN BİTİŞ TARİHİ</h5>
                                <input
                                    type="date"
                                    value={endDate}
                                    onChange={evt => setEndDate(evt.target.value)}
                                    className="form-control"
                                    id="endDate"
                                />
                            </div>

                            <div>
                                <h5 style={{ color: 'black' }}>İZİN TÜRÜ</h5>
                                <select

                                    value={leaveType}
                                    onChange={handleLeaveTypeChange}
                                    className="form-control"
                                    id="leaveType"
                                >
                                    {Object.values(ELeaveType).map((leave) => (
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
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={createLeave}>Kaydet</button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default IzinEklemeTablosu;