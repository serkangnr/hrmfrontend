import { useDispatch } from "react-redux";
import { HrmDispatch } from "../../store";

import { fetchAdminList, fetchDeleteAdmin } from "../../store/feature/adminSlice";
import Swal from "sweetalert2";
import { ICompanyList } from "../../models/ICompanyList";

function CompanyList(props: ICompanyList) {
    const dispatch = useDispatch<HrmDispatch>();
   
   
 

    return (
        <>

            <tr>
                
            <td><img src={props.logo} style={{width:'75px',height:'75px',borderRadius:'20px'}} /></td>
                <td>{props.name}</td>
                <td>{props.email}</td>
                <td>{props.address}</td>
                <td>{props.phone}</td>
                <td>{props.sector}</td>
                <td>{props.website}</td>

                
             
            </tr>
            
        </>
    )
}

export default CompanyList;