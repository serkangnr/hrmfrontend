import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IResponse } from "../../models/IResponse";
import { IAdminList } from "../../models/IAdminList";





const initialAdminState={
    token: '',
    id:'',
    
    adminList:[] as IAdminList[],

    isLoadingLogin: false,
    isLoadingRegister: false,
    
}

export const fetchAdminList = createAsyncThunk(
    'admin/fetchAdminList',
    async () => {
        const response = await fetch('http://localhost:9091/api/v1/admin/admin-list', {
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
export const fetchDeleteAdmin = createAsyncThunk(
    'admin/fetchDeleteAdmin',
    async(id:string)=>{
        const response =  await fetch(`http://localhost:9091/api/v1/admin/delete-admin/${id}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // "Authorization": "Bearer " +token,

            },
            body: JSON.stringify({
                'id': id,
              
            })
        }).then(data => data.json())
        return response;
    }
)
const adminSlice = createSlice({
    name:'admin',
    initialState: initialAdminState,
    reducers: {
       
    },
    extraReducers:(build)=>{

        build.addCase(fetchAdminList.fulfilled, (state, action: PayloadAction<IResponse>) => {
            state.adminList = action.payload.data; 
        })
        .addCase(fetchDeleteAdmin.fulfilled, (state, action: PayloadAction<string>) => {
            
        })

    }
});

export default adminSlice.reducer;