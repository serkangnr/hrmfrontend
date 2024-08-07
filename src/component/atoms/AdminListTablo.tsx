import { useDispatch } from "react-redux";
import { HrmDispatch } from "../../store";
import { IAdminList } from "../../models/IAdminList";

function AdminListTablo(props: IAdminList) {
    const dispatch = useDispatch<HrmDispatch>();
   

   
  

    

    
    
 
    return (
        <>

            <tr>
                
                
                <td>{props.name}</td>
                <td>{props.surname}</td>
                <td>{props.email}</td>
                <td>{props.address}</td>
                <td>{props.phone}</td>
                <td>{props.avatar}</td>
             
            </tr>
            
        </>
    )
}

export default AdminListTablo