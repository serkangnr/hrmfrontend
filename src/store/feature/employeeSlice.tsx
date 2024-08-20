import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IResponse } from "../../models/IResponse";
import { IUpdateEmployee } from "../../models/IUpdateEmployee";
import Rest from '../../config/RestApis';

export enum EShiftType {
    SABAH_ALTI_ONIKI = `Sabah Vardiyası: 06:00 - 12:00
Kahvaltı Molası: 08:00 - 08:15
Çay Molası: 10:00 - 10:15`,

    OGLEDENSONRA_ONIKI_ALTI = `Öğleden Sonra Vardiyası: 12:00 - 18:00
Öğle Yemeği Molası: 14:00 - 14:30
Çay Molası: 16:00 - 16:15`,

    AKSAM_ALTI_ONIKI = `Akşam Vardiyası: 18:00 - 00:00
Akşam Yemeği Molası: 20:00 - 20:30
Çay Molası: 22:00 - 22:15`,

    GECE_ONIKI_ALTI = `Gece Vardiyası: 00:00 - 06:00
Gece Kahve Molası: 02:00 - 02:15
Çay Molası: 04:00 - 04:15`,

    TAM_GUN_DOKUZ_ALTI = `Tam Gün Vardiyası: 09:00 - 18:00
Öğle Yemeği Molası: 12:00 - 12:30
Çay Molası: 15:00 - 15:15`,

    TAM_GUN_SEKIZ_BES = `Tam Gün Vardiyası: 08:00 - 17:00
Öğle Yemeği Molası: 12:00 - 12:30
Çay Molası: 14:30 - 14:45`,

    HAFTASONU_DOKUZ_BIR = `Hafta Sonu Vardiyası: 09:00 - 13:00
Çay Molası: 11:00 - 11:15`,

    HAFTASONU_SEKIZ_ONIKI = `Hafta Sonu Sabah Vardiyası: 08:00 - 12:00
Çay Molası: 10:00 - 10:15`,

    HAFTASONU_OGLEDENSONRA = `Hafta Sonu Öğleden Sonra Vardiyası: 13:00 - 18:00
Çay Molası: 15:00 - 15:15
Kısa Molası: 17:00 - 17:05`

}
export interface VardiyaResponseDto {
    id: string;
    name: string;
    surname: string;
    email: string;
    phoneNumber: string;
    position: string;
    department: string;
    occupation: string;
    gender: string;
    shiftType: EShiftType 
    startDate: string;
    endDate: string;
}
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
    yearsLeaveCount: number;
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
export interface EmployeeBirthdayResponseDto {
    name: string;
    surname: string;
    birthDate: string;
    avatar: string;
}

interface IEmployeeState {
    vardiyaList: VardiyaResponseDto[];
    employee: IEmployeeIdentity | null;
    isLoading: boolean;
    employeeList: IEmployeeIdentity[];
    editEmployee: IEditEmployee | null;
    birthdayEmployeeList: EmployeeBirthdayResponseDto[];
}


const initialEmployeeState:IEmployeeState={
    vardiyaList: [],
    employee: null,
    isLoading: false,
    employeeList : [] ,
    editEmployee: null,
    birthdayEmployeeList: []
}
export const fetchVardiyaList = createAsyncThunk(
    'vardiya/fetchVardiyaList',
    async (managerToken: string) => {
        const response = await fetch(Rest.employee + `/get-vardiya-list?managerToken=${managerToken}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        return data.data as VardiyaResponseDto[];
    }
);

export const fetchEmployeeList = createAsyncThunk(
    'employee/fetchEmployeeList',
    async (managerToken:string) => {
        const response = await fetch(Rest.employee+`/employee-list?managerToken=${managerToken}`, {
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
export const fetchYearsLeaveCount = createAsyncThunk(
    'employee/fetchYearsLeaveCount',
    async (id: string) => {
        const response = await fetch(Rest.employee+`/years-leave-count/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        return data;
    }
);
export const fetchUpdateEmployee = createAsyncThunk(
    'employee/fetchUpdateEmployee',
    async (payload: IUpdateEmployee) => {
        const res = await fetch(Rest.employee+'/update-employee', {
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
        const res = await fetch(Rest.employee+'/edit-employee', {
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
        const result = await fetch(Rest.employee+'/get-employee-by-id?id=' + id)
            .then(data => data.json());
        return result;


    })

    export const fetchgetEmployeeByToken = createAsyncThunk(
        'employee/fetchgetEmployeeByToken',
        async (token: string) => {
            const result = await fetch(Rest.employee+'/get-employee-by-token?token=' + token)
                .then(data => data.json());
            return result;
    
            
        })

export const fetchDeleteEmployee = createAsyncThunk(
    'employee/fetchDeleteEmployee',
    async (id: string) => {
        const response = await fetch(Rest.employee+`/delete-employee/${id}`, {
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

export const fetchBirthdayEmployee = createAsyncThunk(
    'employee/fetchBirthdayEmployee',
    async (token: string) => {
        const response = await fetch(Rest.employee+`/get-birthday?token=${token}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data: EmployeeBirthdayResponseDto[] = await response.json();
        return data;
    }
);
export const fetchBirthdayEmployee2 = createAsyncThunk(
    'employee/fetchBirthdayEmployee2',
    async (token: string) => {
        const response = await fetch(Rest.employee+`/get-birthday2?token=${token}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data: EmployeeBirthdayResponseDto[] = await response.json();
        return data;
    }
);

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
                state.employee = action.payload.data;
            } else {

            }
        })
        build.addCase(fetchActivateEmployee.fulfilled, (state, action: PayloadAction<IResponse>) => {
           
                state.employee = action.payload.data;
           
        });
        build.addCase(fetchPassivateEmployee.fulfilled, (state, action: PayloadAction<IResponse>) => {
         
                state.employee = action.payload.data;
           
        });
        build.addCase(fetchYearsLeaveCount.fulfilled, (state, action: PayloadAction<number>) => {
            if (state.employee) {
                state.employee.yearsLeaveCount = action.payload;
            }
        });
        build.addCase(fetchBirthdayEmployee.fulfilled, (state, action: PayloadAction<EmployeeBirthdayResponseDto[]>) => {
            state.birthdayEmployeeList = action.payload;
        });
        build.addCase(fetchBirthdayEmployee2.fulfilled, (state, action: PayloadAction<EmployeeBirthdayResponseDto[]>) => {
            state.birthdayEmployeeList = action.payload;
        });
        build.addCase(fetchVardiyaList.pending, (state) => {
            state.isLoading = true;
        });
        build.addCase(fetchVardiyaList.fulfilled, (state, action: PayloadAction<VardiyaResponseDto[]>) => {
            state.vardiyaList = action.payload;
            state.isLoading = false;
        });
        build.addCase(fetchVardiyaList.rejected, (state) => {
            state.isLoading = false;
        });
    }
})

export default employeeSlice.reducer;