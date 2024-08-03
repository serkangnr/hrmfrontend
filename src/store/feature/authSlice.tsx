import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRegisterAdmin } from "../../models/IRegisterAdmin";
import { ILoginAdmin } from "../../models/ILoginAdmin";
import { IResponse } from "../../models/IResponse";
import Swal from "sweetalert2";
import { IRegisterManager } from "../../models/IRegisterManager";




const initialAuthState={
    token: '',
    user: [],
    isLoadingLogin: false,
    isLoadingRegister: false,
    isAuth: false
}

export const fetchRegisterManager = createAsyncThunk(
    'auth/fetchRegisterManager',
    async(payload: IRegisterManager)=>{
        const response =  await fetch('http://localhost:9090/dev/v1/auth/register-manager',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'name': payload.name,
                'surname': payload.surname,
                'personalEmail': payload.personalEmail,
                'phone': payload.phone,
                'address':payload.address,
                'company': payload.company,
                'taxNumber':payload.taxNumber
            })
        }).then(data => data.json())
        return response;
    }
);

export const fetchRegisterAdmin = createAsyncThunk(
    'auth/fetchRegisterAdmin',
    async(payload: IRegisterAdmin)=>{
        const response =  await fetch('http://localhost:9090/dev/v1/auth/register-admin',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'name': payload.name,
                'surname': payload.surname,
                'personalEmail': payload.personalEmail,
                'password': payload.password
            })
        }).then(data => data.json())
        return response;
    }
);



export const fetchLogin = createAsyncThunk(
    'auth/fetchLogin',
    async(payload: ILoginAdmin)=>{
        try{
        const response =  await fetch('http://localhost:9090/dev/v1/auth/login',{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        'businessEmail': payload.businessEmail,
                        'password': payload.password
                    })
                }).then(data=> data.json())
            return response;            
             
        }catch(err){
            console.log('hata...: ', err);            
        }
      
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        setToken(state,action: PayloadAction<string>){
            state.isAuth = true;
            state.token = action.payload;
        },
        clearToken(state){
            state.isAuth = false;
            state.token = '';
        }
    },
    extraReducers: (build)=>{
        build.addCase(fetchRegisterAdmin.pending,(state)=>{
            state.isLoadingRegister = true;
        });
        build.addCase(fetchRegisterAdmin.fulfilled,(state)=>{
            state.isLoadingRegister = false;
        });
        build.addCase(fetchRegisterManager.pending,(state)=>{
            state.isLoadingRegister = true;
        });
        build.addCase(fetchRegisterManager.fulfilled,(state)=>{
            state.isLoadingRegister = false;
        });

        build.addCase(fetchLogin.pending,(state)=>{
            state.isLoadingLogin = true;
        })
        build.addCase(fetchLogin.fulfilled,(state,action: PayloadAction<IResponse>)=>{            
            state.isLoadingLogin = false;
            if(action.payload.code === 200){
                state.token = action.payload.data;
                state.isAuth = true;
                localStorage.setItem('token',action.payload.data);
            }else
            
                Swal.fire('Hata!',action.payload.message,'error');
            
        });
        build.addCase(fetchLogin.rejected,(state,action)=>{
            console.log(action.payload);
        });
    }


});
export const {
    setToken,clearToken
} = authSlice.actions;
export default authSlice.reducer;


