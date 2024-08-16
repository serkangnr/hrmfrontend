import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IResponse } from "../../models/IResponse";
import { IUpdateEmployee } from "../../models/IUpdateEmployee";

export interface IEmployeeIdentity {
    managerToken: string;
    id: string;
    name: string;
    surname: string;
    managerId?: string;
    companyId?: string;
    identityNumber: string;
    birthDate?: string;
    email: string;
    phoneNumber: string;
    address: string;
    jobStartDate: string;
    jobEndDate?: string;
    position: string;
    salary?: number;
    department: string;
    occupation: string;
    gender?: string;
    militaryService?: boolean;
    driverLicense?: string;
    avatar: string;
    shiftId: string;
}

export interface IEditEmployee{
    token: string;
    id: string;
    name: string;
    surname: string;
    identityNumber: string;
    birthDate: string;
    email: string;
    phoneNumber: string;
    address: string;  
    driverLicense: string;
    avatar: string;
  
}

interface IEmployeeState {
    employee: IEmployeeIdentity | null;
    isLoading: boolean;
    employeeList: IEmployeeIdentity[];
    editEmployee: IEditEmployee | null;
}


const initialEmployeeState:IEmployeeState={
    employee: null,
    isLoading: false,
    employeeList : [] ,
    editEmployee: null
}

export const fetchEmployeeList = createAsyncThunk(
    'employee/fetchEmployeeList',
    async (managerToken:string) => {
        const response = await fetch(`http://localhost:9094/api/v1/employee/employee-list?managerToken=${managerToken}`, {
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
export const fetchUpdateEmployee = createAsyncThunk(
    'employee/fetchUpdateEmployee',
    async (payload: IUpdateEmployee) => {
        const res = await fetch('http://localhost:9094/api/v1/employee/update-employee', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                managerToken: payload.managerToken,
                id: payload.id,
                name: payload.name,
                surname: payload.surname,
                managerId: payload.managerId,
                companyId: payload.companyId,
                identityNumber: payload.identityNumber,
                birthDate: payload.birthDate,
                email: payload.email,
                phoneNumber: payload.phoneNumber,
                address: payload.address,
                jobStartDate: payload.jobStartDate,
                jobEndDate: payload.jobEndDate,
                position: payload.position,
                salary: payload.salary,
                department: payload.department,
                occupation: payload.occupation,
                gender: payload.gender,
                militaryService: payload.militaryService,
                driverLicense: payload.driverLicense,
                avatar: payload.avatar,
                shiftId: payload.shiftId
                
            })
        }).then(data => data.json());
        return res;
    }
)

export const fetchEditEmployee = createAsyncThunk(
    'employee/fetchEditEmployee',
    async (payload: IEditEmployee ) => {
        const res = await fetch('http://localhost:9094/api/v1/employee/edit-employee', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                token: payload.token,
                id: payload.id,
                name: payload.name,
                surname: payload.surname,
                identityNumber: payload.identityNumber,
                birthDate: payload.birthDate,
                email: payload.email,
                phoneNumber: payload.phoneNumber,
                address: payload.address,
                driverLicense: payload.driverLicense,
                avatar: payload.avatar,

                
            })
        }).then(data => data.json());
        return res;
    }
)

export const fetchgetEmployee = createAsyncThunk(
    'employee/fetchgetEmployee',
    async (id: string) => {
        const result = await fetch('http://localhost:9094/api/v1/employee/get-employee-by-id?id=' + id)
            .then(data => data.json());
        return result;


    })

    export const fetchgetEmployeeByToken = createAsyncThunk(
        'employee/fetchgetEmployeeByToken',
        async (token: string) => {
            const result = await fetch('http://localhost:9094/api/v1/employee/get-employee-by-token?token=' + token)
                .then(data => data.json());
            return result;
    
    
        })

export const fetchDeleteEmployee = createAsyncThunk(
    'employee/fetchDeleteEmployee',
    async (id: string) => {
        const response = await fetch(`http://localhost:9094/api/v1/employee/delete-employee/${id}`, {
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

export const fetchActivateEmployee = createAsyncThunk(
    'employee/fetchActivateEmployee',
    async (id: string) => {
        const response = await fetch(`http://localhost:9094/api/v1/employee/activate-employee/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                

            },
            body: JSON.stringify({
                'id': id,
               

            })
        }).then(data => data.json())
        return response;
    }
)
export const fetchPassivateEmployee = createAsyncThunk(
    'employee/fetchPassivateEmployee',
    async (id: string) => {
        const response = await fetch(`http://localhost:9094/api/v1/employee/passivate-employee/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                

            },
            body: JSON.stringify({
                'id': id,
                

            })
        }).then(data => data.json())
        return response;
    }
)
const employeeSlice = createSlice({
    name: 'employee',
    initialState: initialEmployeeState,
    reducers: {},
    extraReducers : (build) => {
        build.addCase(fetchEmployeeList.fulfilled, (state, action: PayloadAction<IResponse>) => {
            state.employeeList = action.payload.data;
        })
        build.addCase(fetchDeleteEmployee.fulfilled, (state, action: PayloadAction<string>) => {
            
        })
        build.addCase(fetchgetEmployee.fulfilled, (state, action: PayloadAction<IResponse>) => {
            if (action.payload.code === 200) {
                state.employee = action.payload.data;
            } else {

            }
        })
        build.addCase(fetchgetEmployeeByToken.fulfilled, (state, action: PayloadAction<IResponse>) => {
            if (action.payload.code === 200) {
                state.editEmployee = action.payload.data;
            } else {

            }
        })
        build.addCase(fetchActivateEmployee.fulfilled, (state, action: PayloadAction<IResponse>) => {
           
                state.employee = action.payload.data;
           
        });
        build.addCase(fetchPassivateEmployee.fulfilled, (state, action: PayloadAction<IResponse>) => {
         
                state.employee = action.payload.data;
           
        });
    }
})

export default employeeSlice.reducer;