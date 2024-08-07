import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IResponse } from "../../models/IResponse";
import { IAdminList } from "../../models/IAdminList";





const initialAdminState={
    token: '',
    
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
const adminSlice = createSlice({
    name:'admin',
    initialState: initialAdminState,
    reducers: {
       
    },
    extraReducers:(build)=>{

        build.addCase(fetchAdminList.fulfilled, (state, action: PayloadAction<IResponse>) => {
            state.adminList = action.payload.data; 
        })

    }
});

export default adminSlice.reducer;