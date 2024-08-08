import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HrmDispatch, RootState, useAppSelector } from '../../store'
import { fetchgetAdmin } from '../../store/feature/adminSlice';

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
        setEditAdmin(res.payload)
    })
        
  }, [])

    
    return (
        <>
        



            {/* <button  type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Duzenle</button>


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
                                <input defaultValue={editAdmin?.name} type="text" className="form-control" id="name" />
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label">Soyisim:</label>
                                <input defaultValue={editAdmin?.surname} type="text" className="form-control" id="lastname" />
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label">Adres:</label>
                                <input defaultValue={editAdmin?.address} type="text" className="form-control" id="address" />
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label">Telefon:</label>
                                <input defaultValue={editAdmin?.phone} type="text" className="form-control" id="phone" />
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label">Avatar:</label>
                                <input defaultValue={editAdmin?.avatar} type="text" className="form-control" id="avatar" />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Kapat</button>
                            <button type="button" className="btn btn-primary">Kaydet</button>
                        </div>
                    </div>
                </div>
            </div> */}


        </>
    )
}

export default EditAdminPopup