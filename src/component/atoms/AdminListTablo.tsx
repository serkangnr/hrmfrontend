import { useDispatch } from "react-redux";
import { HrmDispatch, useAppSelector } from "../../store";
import { fetchAdminList, fetchDeleteAdmin, fetchgetAdmin, fetchUpdateAdmin } from "../../store/feature/adminSlice";
import { IAdminList } from "../../models/IAdminList";
import Swal from "sweetalert2";
import { useState } from "react";

function AdminListTablo({ admins }: { admins: IAdminList[] }) {
    const dispatch = useDispatch<HrmDispatch>();
    const [editAdmin, setEditAdmin] = useState<IAdminList | null>(null);
    const [selectedAdminId, setSelectedAdminId] = useState<string | null>(null);

    const deleteAdmin = (id: string) => {
        dispatch(fetchDeleteAdmin(id))
            .then((response) => {
                if (response.payload.code === 200) {
                    Swal.fire('Başarı!', 'Admin silindi', 'success');
                    dispatch(fetchAdminList());
                } else {
                    Swal.fire('Hata!', response.payload.message, 'error');
                    throw new Error(response.payload.message);
                }
            })
            .catch((error) => {
                console.error("Hata oluştu:", error);
            });
    };

    const editAdminHandler = (id: string) => {
        setSelectedAdminId(id);
        dispatch(fetchgetAdmin(id)).then((response) => {
            setEditAdmin(response.payload.data);
        });
    };

    const saveAdmin = () => {
        if (editAdmin) {
            dispatch(fetchUpdateAdmin(editAdmin))
                .then(() => {
                    Swal.fire('Güncelleme', 'Kullanıcı bilgileri başarı ile güncellendi.', 'success');
                    dispatch(fetchAdminList());
                });
        }
    };

    return (
        <>
          
              
                
                    {admins.map((admin) => (
                        <tr key={admin.id}>
                            
                            <td>{admin.name}</td>
                            <td>{admin.surname}</td>
                            <td>{admin.email}</td>
                            <td>{admin.address}</td>
                            <td>{admin.phone}</td>
                            <td>{admin.avatar}</td>
                            <td style={{width:'300px'}}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button type="button" className="btn btn-danger" onClick={() => deleteAdmin(admin.id)}>Sil</button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    onClick={() => editAdminHandler(admin.id)}
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
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Admin Düzenle</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {editAdmin && (
                                <>
                                    <div className="mb-3">
                                        <h5 style={{ color: 'black' }}>İSİM</h5>
                                        <input
                                            value={editAdmin.name}
                                            onChange={evt => setEditAdmin({ ...editAdmin, name: evt.target.value })}
                                            type="text"
                                            className="form-control"
                                            id="name"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <h5 style={{ color: 'black' }}>SOYİSİM</h5>
                                        <input
                                            value={editAdmin.surname}
                                            onChange={evt => setEditAdmin({ ...editAdmin, surname: evt.target.value })}
                                            type="text"
                                            className="form-control"
                                            id="lastname"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <h5 style={{ color: 'black' }}>EMAİL</h5>
                                        <input
                                            value={editAdmin.email}
                                            onChange={evt => setEditAdmin({ ...editAdmin, email: evt.target.value })}
                                            type="text"
                                            className="form-control"
                                            id="email"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <h5 style={{ color: 'black' }}>ADRES</h5>
                                        <input
                                            value={editAdmin.address}
                                            onChange={evt => setEditAdmin({ ...editAdmin, address: evt.target.value })}
                                            type="text"
                                            className="form-control"
                                            id="address"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <h5 style={{ color: 'black' }}>TELEFON</h5>
                                        <input
                                            value={editAdmin.phone}
                                            onChange={evt => setEditAdmin({ ...editAdmin, phone: evt.target.value })}
                                            type="text"
                                            className="form-control"
                                            id="phone"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <h5 style={{ color: 'black' }}>AVATAR</h5>
                                        <input
                                            value={editAdmin.avatar}
                                            onChange={evt => setEditAdmin({ ...editAdmin, avatar: evt.target.value })}
                                            type="text"
                                            className="form-control"
                                            id="avatar"
                                        />
                                    </div>
                                </>
                            )}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={saveAdmin}>Kaydet</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminListTablo;
