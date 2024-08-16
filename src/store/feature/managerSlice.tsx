import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IResponse } from "../../models/IResponse";
import { IUpdateManager } from "../../models/IUpdateManager";
import Rest from '../../config/RestApis';


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
    managerList : IManagerIdentity[];
    registrationEndDate: boolean ;
    

}

const initialManagerState: IManagerState = {
    manager: null,
    isLoading: false,
    managerList : [] ,
    registrationEndDate:  false,
   

};


//fetch
export const fetchManagerList = createAsyncThunk(
    'manager/fetchManagerList',
    async () => {
        const response = await fetch(Rest.manager+'/manager-list', {
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
        const response =  await fetch(Rest.manager+`/delete-manager/${id}`,{
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
        const result = await fetch(Rest.manager+'/get-manager?token='+payload)
        .then(data=>data.json());
        return result;
    }
)

export const fetchUpdateManager = createAsyncThunk(
    'manager/fetchUpdateManager',
    async(payload: IUpdateManager)=>{
        const response =  await fetch(Rest.manager+'/edit-manager',{
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
);



export const fetchRegistrationEndDate = createAsyncThunk(
    'manager/fetchRegistrationEndDate',
    async ({ days, mail }: { days: number; mail: string }, { rejectWithValue }) => {
        try {
            const response = await fetch(Rest.manager+`/get-registration-end-date?days=${days}&mail=${mail}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            return data;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);






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
        .addCase(fetchRegistrationEndDate.pending, (state) => {
            state.isLoading = true;
            
        })
        .addCase(fetchRegistrationEndDate.fulfilled, (state, action: PayloadAction<Boolean>) => {
            state.isLoading = false;
            
        })
       
        
    }
});





export default managerSlice.reducer;