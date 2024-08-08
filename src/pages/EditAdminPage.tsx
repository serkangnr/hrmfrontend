import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { HrmDispatch, RootState, useAppSelector } from '../store';
import { fetchgetAdmin } from '../store/feature/adminSlice';

function EditAdminPage() {
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

  return (
    <>
            <form >
 
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Ad" defaultValue={editAdmin?.name}  />
                </div>
                <div>
                    <label htmlFor="surname">Surname</label>
                    <input type="text" id="surname" name="surname" placeholder="Soyad"
                        defaultValue={editAdmin?.surname} 
                           />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Email"
                        defaultValue={editAdmin?.email}  />
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <input type="text" id="phone" name="phone" placeholder="Telefon"
                        defaultValue={editAdmin?.phone} 
                             />
                </div>
                <div>
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" name="address" placeholder="Adres"
                        defaultValue={editAdmin?.address} 
                        />
                </div>
                <div>
                    <label htmlFor="avatar">Avatar</label>
                    <input type="text" id="avatar" name="avatar" placeholder="Avatar"
                        defaultValue={editAdmin?.avatar}  />
                </div>
                
                <button type="button">Update Manager</button>
            </form>
        </>
  )
}

export default EditAdminPage