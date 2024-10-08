import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IResponse } from "../../models/IResponse";
import { IAdminList } from "../../models/IAdminList";
import Rest from '../../config/RestApis';

export interface IAdminIdentity {
    id:string
    name: string;
    surname: string;
    email: string;
    address: string;
    phone: string;
    avatar: string;
    


}
export interface AdminProfile {
    token:string
    name: string;
    surname: string;
    address: string;
    phone: string;
    avatar: string;
    
}

interface IAdminState {
    admin: IAdminIdentity | null,
    isLoadingLogin: boolean,
    adminList: IAdminList[],
    adminProfile:AdminProfile | null,

}



const initialAdminState: IAdminState = {

    admin: null,
    adminList: [],
    isLoadingLogin: false,
    adminProfile:null,

}



export const fetchgetAdmin = createAsyncThunk(
    'admin/fetchgetAdmin',
    async (payload: string) => {
       
        const result = await fetch(Rest.admin+`/get-admin-by-id?id=${payload}`)
            .then(data => data.json());
        return result;


    })
    export const fetchgetAdminToken = createAsyncThunk(
        'admin/fetchgetAdminToken',
        async (payload: string) => {
           
            const result = await fetch(Rest.admin+`/get-admin-by-token?token=${payload}`)
                .then(data => data.json());
            return result;
    
    
        })
interface IFetchUpdateAdmin {
    id: string
    name: string;
    surname: string;
    email: string;
    address: string;
    phone: string;
    avatar: string;
    
}

export const fetchUpdateAdmin = createAsyncThunk(
    'admin/fetchUpdateAdmin',
    async (payload: IFetchUpdateAdmin) => {
        const res = await fetch(Rest.admin+'/update-admin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: payload.id,
                name: payload.name,
                surname: payload.surname,
                email: payload.email,
                address: payload.address,
                phone: payload.phone,
                avatar: payload.avatar,
                
            })
        }).then(data => data.json());
        return res;
    }
)
export const fetchUpdateAdminProfile = createAsyncThunk(
    'admin/fetchUpdateAdminProfile',
    async (payload: AdminProfile) => {
        const res = await fetch(Rest.admin+'/update-admin-profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                token:payload.token,
                name: payload.name,
                surname: payload.surname,
                
                address: payload.address,
                phone: payload.phone,
                avatar: payload.avatar,
                
            })
        }).then(data => data.json());
        return res;
    }
)







export const fetchAdminList = createAsyncThunk(
    'admin/fetchAdminList',
    async () => {
        const response = await fetch(Rest.admin+'/admin-list', {
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
    async (id: string) => {
        const response = await fetch(Rest.admin+`/delete-admin/${id}`, {
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
    name: 'admin',
    initialState: initialAdminState,
    reducers: {

    },
    extraReducers: (build) => {

        build.addCase(fetchAdminList.fulfilled, (state, action: PayloadAction<IResponse>) => {
            state.adminList = action.payload.data;
        })
            .addCase(fetchDeleteAdmin.fulfilled, (state, action: PayloadAction<string>) => {

            })

        build.addCase(fetchgetAdmin.fulfilled, (state, action: PayloadAction<IResponse>) => {
            if (action.payload.code === 200) {
                state.admin = action.payload.data;
                state.adminProfile = action.payload.data;
            } else {

            }
        })
        build.addCase(fetchgetAdminToken.fulfilled, (state, action: PayloadAction<IResponse>) => {
            if (action.payload.code === 200) {
                state.admin = action.payload.data;
            } else {

            }
        })

    }
});

export default adminSlice.reducer;