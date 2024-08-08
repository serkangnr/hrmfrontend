import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HrmDispatch, RootState, useAppSelector } from '../../store'
import { fetchgetAdmin, fetchUpdateAdmin } from '../../store/feature/adminSlice';
import Swal from 'sweetalert2';

function EditAdminPopup() {
    const dispatch = useDispatch<HrmDispatch>();
    const admin = useAppSelector(state => state.admin.admin);
    const [editAdmin, setEditAdmin] = useState(admin)

    const token = useSelector((state: RootState) => state.auth.token);
    console.log("admin bilgileri:", editAdmin)
    console.log("token:", token)
    const tokenLocal = localStorage.getItem('token')
    console.log("tokenLocal:", tokenLocal)


    useEffect(() => {
        dispatch(fetchgetAdmin(token)).then((res) => {
            setEditAdmin(res.payload.data)
        })

    }, [])

    const EditAdmin = async () => {
        dispatch(fetchUpdateAdmin({
            token: token,
            name: editAdmin ? editAdmin.name : '',
            surname: editAdmin ? editAdmin.surname : '',
            email: editAdmin ? editAdmin.email : '',
            address: editAdmin ? editAdmin.address : '',
            phone: editAdmin ? editAdmin.phone : '',
            avatar: editAdmin ? editAdmin.avatar : '',



        })).then(() => {
            Swal.fire('Güncelleme', 'Kullanıcı bilgileri başarı ile güncellendi.', 'success').then(() => {
                dispatch(fetchgetAdmin(token));
            });
        })
    }


    return (
        <>




            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Duzenle</button>


            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Admin Duzenle</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label className="col-form-label">Isim:</label>
                                <input defaultValue={editAdmin?.name} onChange={evt => {
                                    if (editAdmin)
                                        setEditAdmin({ ...editAdmin, name: evt.target.value })
                                }} type="text" className="form-control" id="name" />
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label">Soyisim:</label>
                                <input defaultValue={editAdmin?.surname} onChange={evt => {
                                    if (editAdmin)
                                        setEditAdmin({ ...editAdmin, surname: evt.target.value })
                                }} type="text" className="form-control" id="lastname" />
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label">Email:</label>
                                <input defaultValue={editAdmin?.email} onChange={evt => {
                                    if (editAdmin)
                                        setEditAdmin({ ...editAdmin, email: evt.target.value })
                                }} type="text" className="form-control" id="email" />
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label">Adres:</label>
                                <input defaultValue={editAdmin?.address} onChange={evt => {
                                    if (editAdmin)
                                        setEditAdmin({ ...editAdmin, address: evt.target.value })
                                }} type="text" className="form-control" id="address" />
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label">Telefon:</label>
                                <input defaultValue={editAdmin?.phone} onChange={evt => {
                                    if (editAdmin)
                                        setEditAdmin({ ...editAdmin, phone: evt.target.value })
                                }}
                                 type="text" className="form-control" id="phone" />
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label">Avatar:</label>
                                <input defaultValue={editAdmin?.avatar} onChange={evt => {
                                    if (editAdmin)
                                        setEditAdmin({ ...editAdmin, avatar: evt.target.value })
                                }} type="text" className="form-control" id="avatar" />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Kapat</button>
                            <button onClick={EditAdmin} type="button" className="btn btn-primary">Kaydet</button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default EditAdminPopup