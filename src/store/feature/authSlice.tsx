import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRegisterAdmin } from "../../models/IRegisterAdmin";
import { IResponse } from "../../models/IResponse";
import Swal from "sweetalert2";
import { IRegisterManager } from "../../models/IRegisterManager";
import { ILogin } from "../../models/ILogin";
import { IVerifyEmail } from "../../models/IVerifyEmail";
import { IVerifyList } from "../../models/IVerifyList";
import { IRegisterEmployee } from "../../models/IRegisterEmployee";
import { IChangePassword } from "../../models/IChangePassword";
import Rest from '../../config/RestApis';





const initialAuthState={
    token: '',
    id: 0,
    user: [],
    isLoadingLogin: false,
    isLoadingRegister: false,
    isAuth: false,
    email: '',
    password: '',
    notificationCount: 0,
    verifyManagerList: [] as IVerifyList[],
    isLoadingConfirm: false,
    isLoadingDisConfirm: false,
    
    
    

}

export interface IForgetPasswordRequest{
    email: string
    password: string
}

export const fetchRegisterManager = createAsyncThunk(
    'auth/fetchRegisterManager',
    async(payload: IRegisterManager)=>{
        const response =  await fetch(Rest.auth+'/register-manager',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'name': payload.name,
                'surname': payload.surname,
                'email': payload.email,
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
        const response =  await fetch(Rest.auth+'/register-admin',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'name': payload.name,
                'surname': payload.surname,
                'email': payload.email,
                'password': payload.password
            })
        }).then(data => data.json())
        return response;
    }
);

export const fetchRegisterEmployee = createAsyncThunk(
    'auth/fetchRegisterEmployee',
    async(payload: IRegisterEmployee)=>{
        const response =  await fetch(Rest.auth+'/register-employee',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'managerToken': payload.managerToken,
                'name': payload.name,
                'surname': payload.surname,
                'identityNumber': payload.identityNumber,
                'email': payload.email,
                'phoneNumber': payload.phoneNumber,
                'address': payload.address,
                'position': payload.position,
                'department': payload.department,
                'occupation': payload.occupation,
                'companyName': payload.companyName,
                'jobStartDate': payload.jobStartDate,
            })
        }).then(data => data.json())
        return response;
    }
);



export const fetchLogin = createAsyncThunk(
    'auth/fetchLogin',
    async(payload: ILogin)=>{
        try{
        const response =  await fetch(Rest.auth+'/login',{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        'email': payload.email,
                        'password': payload.password
                    })
                }).then(data=> data.json())
            return response;            
             
        }catch(err){
            console.log('hata...: ', err);            
        }
      
    }
);

export const fetchVerifyEmail = createAsyncThunk(
    'auth/fetchVerifyEmail',
    async(payload: IVerifyEmail)=>{
        const response =  await fetch(Rest.auth+'/verifyEmail',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'email': payload.email,
              
            })
        }).then(data => data.json())
        return response;
    }
)

export const fetchForgetPassword = createAsyncThunk(
    'auth/fetchForgetPassword',
    async (email: string) => {
        const response = await fetch(Rest.auth + `/forget-password/${email}` , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        });

     
        const data = await response.json();

        console.log('API Response:', data);

        return data;
    }
);

export const fetchForgetChangePassword = createAsyncThunk(
    'auth/fetchForgetChangePassword',
    async (payload: IForgetPasswordRequest) => {
        const response = await fetch(Rest.auth + '/forget-change-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'email': payload.email,
                'password': payload.password,
                
              
            })
        });

     
        const data = await response.json();

        console.log('API Response:', data);

        return data;
    }
);


export const fetchChangePassword = createAsyncThunk(
    'auth/fetchChangePassword',
    async(payload: IChangePassword)=>{
        const response =  await fetch(Rest.auth+'/change-password',{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'token': payload.token,
                'oldPassword': payload.oldPassword,
                'newPassword': payload.newPassword
              
            })
        }).then(data => data.json())
        return response;
    }
)

export const fetchNotificationCount = createAsyncThunk(
    'auth/fetchNotificationCount',
    async()=>{
        const response =  await fetch(Rest.auth+'/pendingNotificationCount',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        
        
        .then(data => data.json())
        return response;
    }
)

export const fetchPendingManagers = createAsyncThunk(
    'auth/fetchPendingManagers',
    async () => {
        const response = await fetch(Rest.auth+'/pendingManagers', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log('API Response:', data); // API yanıtını kontrol et
        return data;
    }
);

export const fetchConfirmManager = createAsyncThunk(
    'auth/fetchConfirmManager',
    async(id:number)=>{
        const response =  await fetch(Rest.auth+`/confirmManager/${id}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'id': id,
              
            })
        }).then(data => data.json())
        return response;
    }
)

export const fetchDisConfirmManager = createAsyncThunk(
    'auth/fetchDisConfirmManager',
    async (id: number) => {
        const response = await fetch(Rest.auth+`/disconfirmManager/${id}` , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'id': id,
            })
        });

        const data = await response.json();
        return data;
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
        build.addCase(fetchRegisterEmployee.pending,(state)=>{
            state.isLoadingRegister = true;
        });
        build.addCase(fetchRegisterEmployee.fulfilled,(state)=>{
            state.isLoadingRegister = false;
        });


        build.addCase(fetchLogin.pending,(state)=>{
            state.isLoadingLogin = true;
        })
        build.addCase(fetchLogin.fulfilled,(state,action: PayloadAction<IResponse>)=>{            
            state.isLoadingLogin = false;
            if(action.payload.code === 200){
                state.token = action.payload.data.token;
                
                state.isAuth = true;
                localStorage.setItem('token',action.payload.data.token);
            }else
            
                Swal.fire('Hata!',action.payload.message,'error');
            
        });
        build.addCase(fetchLogin.rejected,(state,action)=>{
            console.log(action.payload);
        });
        build.addCase(fetchVerifyEmail.fulfilled,(state,action : PayloadAction<IResponse>)=>{
            state.isAuth = true;
            state.email = action.payload.data;
            state.password = action.payload.data
            Swal.fire('Başarılı!', 'Email adresiniz onaylanmıştır', 'success');
        })
        .addCase(fetchNotificationCount.fulfilled, (state, action: PayloadAction<number>) => {
            state.notificationCount = action.payload;
        })
        .addCase(fetchPendingManagers.fulfilled, (state, action: PayloadAction<IResponse>) => {
            state.verifyManagerList = action.payload.data; // verifyManagerList'e veri atama
        })


        .addCase(fetchConfirmManager.pending, (state) => {
            // İşlem başlatıldığında yapılacaklar (isteğe bağlı)
            state.isLoadingConfirm = true; // Eğer bir loading state'iniz varsa kullanın
        })
        .addCase(fetchConfirmManager.fulfilled, (state, action: PayloadAction<IResponse>) => {
            state.isLoadingConfirm = false;
            
        })
        .addCase(fetchConfirmManager.rejected, (state, action) => {
            state.isLoadingConfirm = false;
            // Hata durumunda yapılacak işlemler
            console.error('Yönetici onaylama işlemi başarısız:', action.error.message);
            Swal.fire('Hata!', 'Yönetici onaylama işlemi başarısız.', 'error');
        })
        .addCase(fetchDisConfirmManager.pending, (state) => {
            state.isLoadingDisConfirm = true; // İşlem başlatıldığında yapılacaklar (isteğe bağlı)
        })
        .addCase(fetchDisConfirmManager.fulfilled, (state, action: PayloadAction<IResponse>) => {
            state.isLoadingDisConfirm = false;
           
        })
        .addCase(fetchDisConfirmManager.rejected, (state, action) => {
            state.isLoadingDisConfirm = false;
            console.error('Yönetici reddetme işlemi başarısız:', action.error.message);
            Swal.fire('Hata!', 'Yönetici reddetme işlemi başarısız.', 'error');
        })
        .addCase(fetchChangePassword.fulfilled, (state, action: PayloadAction<IResponse>) => {
           
           
        })
        build.addCase(fetchForgetPassword.fulfilled,(state,action : PayloadAction<IResponse>)=>{
            
            state.email = action.payload.data;
            state.password = action.payload.data
            
        })
        build.addCase(fetchForgetChangePassword.fulfilled,(state,action : PayloadAction<IResponse>)=>{
           
            state.email = action.payload.data;
            state.password = action.payload.data
           
        })
       
    }


});
export const {
    setToken,clearToken
} = authSlice.actions;
export default authSlice.reducer;