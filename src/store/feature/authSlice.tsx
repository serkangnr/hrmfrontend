import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRegisterAdmin } from "../../models/IRegisterAdmin";
import { ILoginAdmin } from "../../models/ILoginAdmin";
import { IResponse } from "../../models/IResponse";
import Swal from "sweetalert2";




const initialAuthState={
    token: '',
    user: [],
    isLoadingLogin: false,
    isLoadingRegister: false,
    isAuth: false
}

export const fetchRegister = createAsyncThunk(
    'auth/fetchRegister',
    async(payload: IRegisterAdmin)=>{
        const response =  await fetch('http://localhost:9090/dev/v1/auth/register-admin',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'name': payload.name,
                'surname': payload.password,
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
        build.addCase(fetchRegister.pending,(state)=>{
            state.isLoadingRegister = true;
        });
        build.addCase(fetchRegister.fulfilled,(state)=>{
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


