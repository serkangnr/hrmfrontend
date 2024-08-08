import React, { useEffect, useState } from 'react'
import { IUpdateManager } from '../models/IUpdateManager'
import { HrmDispatch, useAppSelector } from '../store';
import { useDispatch } from 'react-redux';
import { fetchgetManager, fetchUpdateManager } from '../store/feature/managerSlice';
import Swal from 'sweetalert2';



function UpdateManager() {
    const dispatch = useDispatch<HrmDispatch>();
    const manager = useAppSelector(state => state.manager.manager);
    const token = useAppSelector(state => state.auth.token);
    const [editManager, setEditManager] = useState(manager);

    console.log('manager bilgileri', editManager);
    console.log('token', token);

    useEffect(() => {
        dispatch(fetchgetManager(token)).then((res) => {
            setEditManager(res.payload.data)
        })

    }, [])
    
    const updateManager = async () => {
        
            dispatch(fetchUpdateManager({
                
                name: editManager ? editManager.name : '',
                surname: editManager ? editManager.surname : '',
                email: '',
                phone: editManager ? editManager.phone : '',
                address: editManager ? editManager.address : '',
                avatar: editManager ? editManager.avatar : '',
                gender: editManager ? editManager.gender : '',
                token: token,
                birthdate: editManager ? editManager.birthdate : '',
            
            })).then(() => {
                Swal.fire('Güncelleme', 'Kullanıcı bilgileri başarı ile güncellendi.', 'success').then(() => {
                    dispatch(fetchgetManager(token));
                });
            })
        
    }


    return (
        <>
            <form >

                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Ad" defaultValue={editManager?.name} onChange={evt => {
                        if (editManager)
                            setEditManager({ ...editManager, name: evt.target.value })
                    }} />
                </div>
                <div>
                    <label htmlFor="surname">Surname</label>
                    <input type="text" id="surname" name="surname" placeholder="Soyad"
                        defaultValue={editManager?.surname} onChange={evt => {
                            if (editManager)
                                setEditManager({ ...editManager, surname: evt.target.value })
                        }} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Email"
                        defaultValue={editManager?.email} onChange={evt => {
                            if (editManager)
                                setEditManager({ ...editManager, email: evt.target.value })
                        }} />
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <input type="text" id="phone" name="phone" placeholder="Telefon"
                        defaultValue={editManager?.phone} onChange={evt => {
                            if (editManager)
                                setEditManager({ ...editManager, phone: evt.target.value })
                        }} />
                </div>
                <div>
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" name="address" placeholder="Adres"
                        defaultValue={editManager?.address} onChange={evt => {
                            if (editManager)
                                setEditManager({ ...editManager, address: evt.target.value })
                        }} />
                </div>
                <div>
                    <label htmlFor="avatar">Avatar</label>
                    <input type="text" id="avatar" name="avatar" placeholder="Avatar"
                        defaultValue={editManager?.avatar} onChange={evt => {
                            if (editManager)
                                setEditManager({ ...editManager, avatar: evt.target.value })
                        }} />
                </div>
                <div>
                    <label htmlFor="gender">Gender</label>
                    <input type="text" id="gender" name="gender" placeholder="Cinsiyet"
                        defaultValue={editManager?.gender} onChange={evt => {
                            if (editManager)
                                setEditManager({ ...editManager, gender: evt.target.value })
                        }} />
                </div>


                <div>
                    <label htmlFor="birthdate">Birthdate</label>
                    <input type="text" id="birthdate" name="birthdate" placeholder="Doğum Tarihi"
                        defaultValue={editManager?.birthdate} onChange={evt => {
                            if (editManager)
                                setEditManager({ ...editManager, birthdate: evt.target.value })
                        }} />
                </div>
                <button onClick={updateManager} type="button">Update Manager</button>
            </form>
        </>
    )
}

export default UpdateManager