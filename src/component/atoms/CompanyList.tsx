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
                
            <td style={{whiteSpace: 'nowrap'}}><img src={props.logo} style={{width:'75px',height:'75px',borderRadius:'20px'}} /></td>
                <td style={{whiteSpace: 'nowrap'}}>{props.name}</td>
                <td style={{whiteSpace: 'nowrap'}}>{props.email}</td>
                <td style={{whiteSpace: 'nowrap'}}>{props.address}</td>
                <td style={{whiteSpace: 'nowrap'}}>{props.phone}</td>
                <td style={{whiteSpace: 'nowrap'}}>{props.sector}</td>
                <td style={{whiteSpace: 'nowrap'}}>{props.website}</td>

                
             
            </tr>
            
        </>
    )
}

export default CompanyList;