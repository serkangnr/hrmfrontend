import React, { useEffect, useState } from 'react'
import { IEmployeeList } from '../../models/IEmployeeList'
import { useDispatch } from 'react-redux';
import { HrmDispatch, useAppSelector } from '../../store';
import { fetchDeleteEmployee, fetchEmployeeList, fetchgetEmployee, fetchUpdateEmployee } from '../../store/feature/employeeSlice';
import Swal from 'sweetalert2';
import { setToken } from '../../store/feature/authSlice';

function CalisanListTablo({employees}:{employees:IEmployeeList[]}) {
    const dispatch = useDispatch<HrmDispatch>();
    const [editEmployee, setEditEmployee] = useState<IEmployeeList | null>(null);
    const [selectedEmployeeId, setSelectedEmployeeId] = useState<string | null>(null);

    const token=useAppSelector(state=>state.auth.token)
    
  

    const deleteEmployee = (id: string) => {
        dispatch(fetchDeleteEmployee(id))
            .then((response) => {
                if (response.payload.code === 200) {
                    Swal.fire('Başarı!', 'Admin silindi', 'success');
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

    const editEmployeeHandler = (id: string) => {
        setSelectedEmployeeId(id);
        dispatch(fetchgetEmployee(id)).then((response) => {
            setEditEmployee(response.payload.data);
            
        });
    };

    const saveEmployee = () => {
        if (editEmployee) {
            console.log("Güncellenen veri:", editEmployee); // Debug için ekledik
            dispatch(fetchUpdateEmployee(editEmployee))
                .then((response) => {
                    
                    if (response.payload.code === 200) {
                        Swal.fire('Güncelleme', 'Kullanıcı bilgileri başarı ile güncellendi.', 'success');
                        dispatch(fetchEmployeeList(token));
                    } else {
                        Swal.fire('Hata!', response.payload.message, 'error');
                    }
                })
                .catch((error) => {
                    console.error("Güncelleme işlemi sırasında hata oluştu:", error);
                });
        }
    };
    


  return (
    <>

{employees.map((employee) => (
   
    
                        <tr key={employee.id} >
                            
                            <td style={{whiteSpace: 'nowrap'}}>{employee.name}</td>
                            <td style={{whiteSpace: 'nowrap'}}>{employee.surname}</td>
                            <td style={{whiteSpace: 'nowrap'}}>{employee.email}</td>
                            <td style={{whiteSpace: 'nowrap'}}>{employee.address}</td>
                            <td style={{whiteSpace: 'nowrap'}}>{employee.phoneNumber}</td>
                          
                            <td style={{whiteSpace: 'nowrap'}}>{employee.identityNumber}</td>
                            <td style={{whiteSpace: 'nowrap'}}>{employee.birthDate}</td>
                            <td style={{whiteSpace: 'nowrap'}}>{employee.jobStartDate}</td>
                           
                            <td style={{whiteSpace: 'nowrap'}}>{employee.position}</td>
                            <td style={{whiteSpace: 'nowrap'}}>{employee.salary}</td>
                            <td style={{whiteSpace: 'nowrap'}}>{employee.department}</td>
                            <td style={{whiteSpace: 'nowrap'}}>{employee.occupation}</td>
                            <td style={{whiteSpace: 'nowrap'}}>{employee.gender}</td>
                            <td style={{width:'300px'}}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button type="button" className="btn btn-danger" onClick={() => deleteEmployee(employee.id)}>Sil</button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    onClick={() => editEmployeeHandler(employee.id)}
                                >
                                    Düzenle
                                </button>
                            </td>
                        </tr>
                    ))}
                

            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Çalışan Düzenle</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {editEmployee && (
                                <>
                                <div className="mb-3 d-none" >
                                    <h5 style={{ color: 'black' }}>ID</h5>
                                    <input
                                        value={editEmployee.id}
                                        onChange={evt => setEditEmployee({ ...editEmployee, id: evt.target.value })}
                                        type="text"
                                        className="form-control"
                                        id="id"
                                    />
                                </div>
                                    <div className="mb-3 ">
                                    <h5 style={{ color: 'black' }}>İSİM</h5>
                                    <input
                                        value={editEmployee.name}
                                        onChange={evt => setEditEmployee({ ...editEmployee, name: evt.target.value })}
                                        type="text"
                                        className="form-control"
                                        id="name"
                                    />
                                </div>
                        <div className="mb-3">
                            <h5 style={{ color: 'black' }}>SOYİSİM</h5>
                            <input
                                value={editEmployee.surname}
                                onChange={evt => setEditEmployee({ ...editEmployee, surname: evt.target.value })}
                                type="text"
                                className="form-control"
                                id="surname"
                            />
                        </div>
                    
                        <div className="mb-3">
                            <h5 style={{ color: 'black' }}>EMAİL</h5>
                            <input
                                value={editEmployee.email}
                                onChange={evt => setEditEmployee({ ...editEmployee, email: evt.target.value })}
                                type="text"
                                className="form-control"
                                id="email"
                            />
                        </div>
                        <div className="mb-3">
                            <h5 style={{ color: 'black' }}>ADRES</h5>
                            <input
                                value={editEmployee.address}
                                onChange={evt => setEditEmployee({ ...editEmployee, address: evt.target.value })}
                                type="text"
                                className="form-control"
                                id="address"
                            />
                        </div>
                        <div className="mb-3">
                            <h5 style={{ color: 'black' }}>TELEFON</h5>
                            <input
                                value={editEmployee.phoneNumber}
                                onChange={evt => setEditEmployee({ ...editEmployee, phoneNumber: evt.target.value })}
                                type="text"
                                className="form-control"
                                id="phoneNumber"
                            />
                        </div>
                        <div className="mb-3">
                            <h5 style={{ color: 'black' }}>AVATAR</h5>
                            <input
                                value={editEmployee.avatar}
                                onChange={evt => setEditEmployee({ ...editEmployee, avatar: evt.target.value })}
                                type="text"
                                className="form-control"
                                id="avatar"
                            />
                        </div>
                        <div className="mb-3">
                            <h5 style={{ color: 'black' }}>TC</h5>
                            <input
                                value={editEmployee.identityNumber}
                                onChange={evt => setEditEmployee({ ...editEmployee, identityNumber: evt.target.value })}
                                type="text"
                                className="form-control"
                                id="identityNumber"
                            />
                        </div>
                        <div className="mb-3">
                            <h5 style={{ color: 'black' }}>DOĞUM TARİHİ <label style={{color:'gray'}}>(yyyy-MM-dd)</label></h5>
                            <input
                            
                                value={editEmployee.birthDate}
                                onChange={evt => setEditEmployee({ ...editEmployee, birthDate: evt.target.value })}
                                type="text"
                                className="form-control"
                                id="birthDate"
                            />
                        </div>
                        <div className="mb-3">
                            <h5 style={{ color: 'black' }}>İŞE BAŞLANGIÇ TARİHİ</h5>
                            <input
                                value={editEmployee.jobStartDate}
                                onChange={evt => setEditEmployee({ ...editEmployee, jobStartDate: evt.target.value })}
                                type="text"
                                className="form-control"
                                id="jobStartDate"
                            />
                        </div>
                        <div className="mb-3">
                            <h5 style={{ color: 'black' }}>İŞTEN AYRILIŞ TARİHİ</h5>
                            <input
                                value={editEmployee.jobEndDate}
                                onChange={evt => setEditEmployee({ ...editEmployee, jobEndDate: evt.target.value })}
                                type="text"
                                className="form-control"
                                id="jobEndDate"
                            />
                        </div>
                        <div className="mb-3">
                            <h5 style={{ color: 'black' }}>POZİSYON</h5>
                            <input
                                value={editEmployee.position}
                                onChange={evt => setEditEmployee({ ...editEmployee, position: evt.target.value })}
                                type="text"
                                className="form-control"
                                id="position"
                            />
                        </div>
                        <div className="mb-3">
                            <h5 style={{ color: 'black' }}>MAAŞ</h5>
                            <input
                                value={editEmployee.salary || ""}
                                onChange={evt => setEditEmployee({ ...editEmployee, salary: parseInt(evt.target.value) })}
                                type="number"
                                className="form-control"
                                id="salary"
                            />
                        </div>
                        <div className="mb-3">
                            <h5 style={{ color: 'black' }}>DEPARTMAN</h5>
                            <input
                                value={editEmployee.department}
                                onChange={evt => setEditEmployee({ ...editEmployee, department: evt.target.value })}
                                type="text"
                                className="form-control"
                                id="department"
                            />
                        </div>
                        <div className="mb-3">
                            <h5 style={{ color: 'black' }}>MESLEK</h5>
                            <input
                                value={editEmployee.occupation}
                                onChange={evt => setEditEmployee({ ...editEmployee, occupation: evt.target.value })}
                                type="text"
                                className="form-control"
                                id="occupation"
                            />
                        </div>
                        <div className="mb-3">
                            <h5 style={{ color: 'black' }}>CİNSİYET</h5>
                            <input
                                value={editEmployee.gender}
                                onChange={evt => setEditEmployee({ ...editEmployee, gender: evt.target.value })}
                                type="text"
                                className="form-control"
                                id="gender"
                            />
                        </div>
                        <div className="mb-3">
                            <h5 style={{ color: 'black' }}>ASKERLİK DURUMU</h5>
                            <input
                                checked={editEmployee.militaryService}
                                onChange={evt => setEditEmployee({ ...editEmployee, militaryService: evt.target.checked })}
                                type="checkbox"
                                className="form-check-input"
                                id="militaryService"
                            />
                        </div>
                        <div className="mb-3">
                            <h5 style={{ color: 'black' }}>EHLIYET</h5>
                            <input
                                value={editEmployee.driverLicense}
                                onChange={evt => setEditEmployee({ ...editEmployee, driverLicense: evt.target.value })}
                                type="text"
                                className="form-control"
                                id="driverLicense"
                            />
                        </div>
                        <div className="mb-3 d-none">
                            <h5 style={{ color: 'black' }}>SHIFT ID</h5>
                            <input
                                value={editEmployee.shiftId}
                                onChange={evt => setEditEmployee({ ...editEmployee, shiftId: evt.target.value })}
                                type="text"
                                className="form-control"
                                id="shiftId"
                            />
                        </div>
                        <div className="mb-3 d-none">
                            <h5 style={{ color: 'black' }}>MANAGER ID</h5>
                            <input
                                value={editEmployee.managerId}
                                onChange={evt => setEditEmployee({ ...editEmployee, managerId: evt.target.value })}
                                type="text"
                                className="form-control"
                                id="managerId"
                            />
                        </div>
                        <div className="mb-3 d-none">
                            <h5 style={{ color: 'black' }}>COMPANY ID</h5>
                            <input
                                value={editEmployee.companyId}
                                onChange={evt => setEditEmployee({ ...editEmployee, companyId: evt.target.value })}
                                type="text"
                                className="form-control"
                                id="companyId"
                            />
                        </div>
                        <div className="mb-3 d-none">
                            <h5 style={{ color: 'black' }}>MANAGER TOKEN</h5>
                            <input
                                value={token}
                                onChange={evt => setEditEmployee({ ...editEmployee, managerToken: evt.target.value })}
                                type="text"
                                className="form-control"
                                id="shiftId"
                            />
                        </div>
                        

                                </>
                            )}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={saveEmployee}>Kaydet</button>
                        </div>
                    </div>
                </div>
            </div>

    
</>
  )
}

export default CalisanListTablo