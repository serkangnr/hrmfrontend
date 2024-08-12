import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IResponse } from "../../models/IResponse";

export interface IEmployeeIdentity {
    managerToken:string;
    name: string;
    surname: string;
    identityNumber: string;
    email: string;
    phoneNumber: string;
    address: string;
    position: string;
    department: string;
    occupation: string;
    companyName: string;
    jobStartDate: string;
}

interface IEmployeeState {
    employee: IEmployeeIdentity | null;
    isLoading: boolean;
    employeeList: IEmployeeIdentity[];
}


const initialEmployeeState:IEmployeeState={
    employee: null,
    isLoading: false,
    employeeList : [] ,
}

export const fetchEmployeeList = createAsyncThunk(
    'employee/fetchEmployeeList',
    async () => {
        const response = await fetch('http://localhost:9094/api/v1/employee/employee-list', {
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

export const fetchgetEmployee = createAsyncThunk(
    'employee/fetchgetEmployee',
    async (id: string) => {
        const result = await fetch('http://localhost:9094/api/v1/employee/get-employee-by-id?id=' + id)
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
    }
})

export default employeeSlice.reducer;