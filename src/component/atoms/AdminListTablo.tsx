import { useDispatch } from "react-redux";
import { HrmDispatch } from "../../store";

import { fetchAdminList, fetchDeleteAdmin } from "../../store/feature/adminSlice";
import { IAdminList } from "../../models/IAdminList";
import Swal from "sweetalert2";

function AdminListTablo(props: IAdminList) {
    const dispatch = useDispatch<HrmDispatch>();
   
   
    const deleteAdmin = () => {
        const id = props.id || ''; 
        console.log('aaaaaaaaaaaaaaaaa'+id)
        
        if (id) {
            dispatch(fetchDeleteAdmin(id))
                .then((response) => {
                    if (response.payload.code === 200) {
                        Swal.fire('Başarı!', 'Admin silindi', 'success');
                        return dispatch(fetchAdminList());
                    } else {
                        Swal.fire('Hata!', response.payload.message, 'error');
                        throw new Error(response.payload.message);
                    }
                })
                .catch((error) => {
                    console.error("Hata oluştu:", error);
                });
        } else {
            Swal.fire('Hata!', 'Admin ID mevcut değil.', 'error');
        }
    };


    return (
        <>

            <tr>
                
                
                <td>{props.name}</td>
                <td>{props.surname}</td>
                <td>{props.email}</td>
                <td>{props.address}</td>
                <td>{props.phone}</td>
                <td>{props.avatar}</td>
                <td>
                <button type="button" className="btn btn-danger" onClick={deleteAdmin}>Sil</button>
                </td>
             
            </tr>
            
        </>
    )
}

export default AdminListTablo