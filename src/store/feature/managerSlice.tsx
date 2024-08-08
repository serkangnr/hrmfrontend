import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IResponse } from "../../models/IResponse";
import { IUpdateManager } from "../../models/IUpdateManager";

export interface IManagerIdentity {
    id?: string;
    authId?: number;
    name: string;
    surname: string;
    email: string;
    address: string;
    phone: string;
    company: string,
    taxNumber: string
}
interface IManagerState {
    manager: IUpdateManager| null;
    isLoading: boolean;
    managerList : IManagerIdentity[]
}

const initialManagerState: IManagerState = {
    manager: null,
    isLoading: false,
    managerList : [] ,
   

};


//fetch
export const fetchManagerList = createAsyncThunk(
    'manager/fetchManagerList',
    async () => {
        const response = await fetch('http://localhost:9092/api/v1/manager/manager-list', {
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

export const fetchDeleteManager = createAsyncThunk(
    'manager/fetchDeleteManager',
    async(id:string)=>{
        const response =  await fetch(`http://localhost:9092/api/v1/manager/delete-manager/${id}`,{
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

export const fetchgetManager = createAsyncThunk(
    'manager/fetchgetManager',
    async(payload: string)=>{
        const result = await fetch('http://localhost:9092/api/v1/manager/get-manager?token='+payload)
        .then(data=>data.json());
        return result;
    }
)

export const fetchUpdateManager = createAsyncThunk(
    'manager/fetchUpdateManager',
    async(payload: IUpdateManager)=>{
        const response =  await fetch('http://localhost:9092/api/v1/manager/edit-manager',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " +payload.token,

            },
            body: JSON.stringify({
                'id': payload.id,
                'name': payload.name,
                'surname': payload.surname,
                'email': payload.email,
                'phone': payload.phone,
                'address': payload.address,
                'avatar': payload.avatar,
                'gender':payload.gender,
                'token':payload.token,
                'birthdate':payload.birthdate,

              
            })
        }).then(data => data.json())
        return response;
    }
)





const managerSlice = createSlice({
    name: 'manager',
    initialState: initialManagerState,
    reducers: {},
    extraReducers: (build) => {
        build.addCase(fetchManagerList.fulfilled, (state, action: PayloadAction<IResponse>) => {
            state.managerList = action.payload.data; 
        })
        build.addCase(fetchDeleteManager.fulfilled, (state, action: PayloadAction<string>) => {
            
        })
        build.addCase(fetchgetManager.fulfilled, (state, action: PayloadAction<IResponse>) => {
            if(action.payload.code === 200){
                state.manager=action.payload.data;
            }
        })
        
    }
});





export default managerSlice.reducer;