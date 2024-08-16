import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IResponse } from "../../models/IResponse";
import { IAdminList } from "../../models/IAdminList";
import { ICompanyList } from "../../models/ICompanyList";
import Rest from '../../config/RestApis';






const initialCompanyState={
    token: '',
    id:'',
    
    companyList:[] as ICompanyList[],

    isLoadingLogin: false,
    isLoadingRegister: false,
    
}

export const fetchCompanyList = createAsyncThunk(
    'admin/fetchCompanyList',
    async () => {
        const response = await fetch(Rest.company+'/get-all-company', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log('API Response:', data); 
        return data;
    }
);
// export const fetchDeleteAdmin = createAsyncThunk(
//     'admin/fetchDeleteAdmin',
//     async(id:string)=>{
//         const response =  await fetch(`http://localhost:9091/api/v1/admin/delete-admin/${id}`,{
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 // "Authorization": "Bearer " +token,

//             },
//             body: JSON.stringify({
//                 'id': id,
              
//             })
//         }).then(data => data.json())
//         return response;
//     }
// )
const companySlice = createSlice({
    name:'company',
    initialState: initialCompanyState,
    reducers: {
       
    },
    extraReducers:(build)=>{

        build.addCase(fetchCompanyList.fulfilled, (state, action: PayloadAction<IResponse>) => {
            state.companyList = action.payload.data; 
        })
        // .addCase(fetchDeleteAdmin.fulfilled, (state, action: PayloadAction<string>) => {
            
        // })

    }
});

export default companySlice.reducer;