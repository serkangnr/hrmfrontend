import { useDispatch } from "react-redux";
import { HrmDispatch } from "../../store";

import { fetchAdminList, fetchDeleteAdmin } from "../../store/feature/adminSlice";
import Swal from "sweetalert2";
import { ICompanyList } from "../../models/ICompanyList";

function CompanyList(props: ICompanyList) {
    const dispatch = useDispatch<HrmDispatch>();
   
   
    // const deleteAdmin = () => {
    //     const id = props.id || ''; 
    //     console.log('gelen id'+id)
        
    //     if (id) {
    //         dispatch(fetchDeleteAdmin(id))
    //             .then((response) => {
    //                 if (response.payload.code === 200) {
    //                     Swal.fire('Başarı!', 'Admin silindi', 'success');
    //                     return dispatch(fetchAdminList());
    //                 } else {
    //                     Swal.fire('Hata!', response.payload.message, 'error');
    //                     throw new Error(response.payload.message);
    //                 }
    //             })
    //             .catch((error) => {
    //                 console.error("Hata oluştu:", error);
    //             });
    //     } else {
    //         Swal.fire('Hata!', 'Admin ID mevcut değil.', 'error');
    //     }
    // };


    return (
        <>

            <tr>
                
                <td>{props.logo}</td>
                <td>{props.name}</td>
                <td>{props.email}</td>
                <td>{props.address}</td>
                <td>{props.phone}</td>
                <td>{props.sector}</td>
                <td>{props.website}</td>

                <td>
                <button type="button" className="btn btn-danger" >Sil</button>
                </td>
             
            </tr>
            
        </>
    )
}

export default CompanyList;