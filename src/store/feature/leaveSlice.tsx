import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IResponse } from "../../models/IResponse";

export enum ELeaveType {
    YILLIK_IZIN = "Yıllık İzin",
    MAZERET_IZNI = "Mazeret İzni",
    DOGUM_IZNI = "Doğum İzni",
    HASTALIK_IZNI = "Hastalık İzni",
    UCRETSIZ_IZIN = "Ücretsiz İzin",
    SUT_IZNI = "Süt İzni",
    EVLILIK_IZNI = "Evlilik İzni",
    ASKERLIK_IZNI = "Askerlik İzni",
    VEFAT_IZNI = "Vefat İzni",
    EGITIM_IZNI = "Eğitim İzni"
  }
export interface IFetchSaveLeave{
    employeeId: string;
    name: string;
    surname: string;
    startDate: string;
    endDate: string;
    leaveType: ELeaveType;
    description: string;
    token: string;
}
export interface IFetchRequestLeave{
   
  
    startDate: string;
    endDate: string;
    leaveType: ELeaveType;
    description: string;
    token: string;
}



export interface ILeaveIdentity{
    id: number;
    employeeId: string;
    managerId: string;
    name: string;
    surname: string;
    startDate: string;
    endDate: string;
    leaveType: ELeaveType;
    numberOfDays: number;
    description: string;
}



interface ILeaveState{
leave:  ILeaveIdentity | null,
leaveList: ILeaveIdentity[],
isLoading: boolean
}

const initialLeaveState:ILeaveState= {
    leave:null,
    leaveList: [],
    isLoading: false
}

export const fetchSaveLeave = createAsyncThunk(
    'leave/fetchSaveLeave',
    async(payload: IFetchSaveLeave)=>{
        const response =  await fetch('http://localhost:9098/api/v1/leave/save',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                employeeId: payload.employeeId,
                name: payload.name,
                surname: payload.surname,
                startDate: payload.startDate,
                endDate: payload.endDate,
                leaveType: payload.leaveType,
                description: payload.description,
                token: payload.token
            })
        }).then(data => data.json())
        return response;
    }
);

export const fetchRequestLeave = createAsyncThunk(
    'leave/fetchRequestLeave',
    async(payload: IFetchRequestLeave)=>{
        const response =  await fetch('http://localhost:9098/api/v1/leave/leave-request',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                startDate: payload.startDate,
                endDate: payload.endDate,
                leaveType: payload.leaveType,
                description: payload.description,
                token: payload.token
            })
        }).then(data => data.json())
        return response;
    }
);


export const fetchGetPendingLeave = createAsyncThunk(
    'leave/fetchGetPendingLeave',
    async (token:string) => {
        const response = await fetch(`http://localhost:9098/api/v1/leave/get-pending-leave?token=${token}`, {
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

const leaveSlice =createSlice({
    name:'leave',
    initialState: initialLeaveState,
    reducers:{},
    extraReducers: (build)=>{
        build.addCase(fetchSaveLeave.pending,(state)=>{
            state.isLoading= true;
        });
        build.addCase(fetchSaveLeave.fulfilled,(state)=>{
            state.isLoading= false;
        });
        build.addCase(fetchRequestLeave.pending,(state)=>{
            state.isLoading= true;
        });
        build.addCase(fetchRequestLeave.fulfilled,(state)=>{
            state.isLoading= false;
        });
        build.addCase(fetchGetPendingLeave.fulfilled, (state, action: PayloadAction<IResponse>) => {
            state.leaveList = action.payload.data;
        })
    }
})

export default leaveSlice.reducer;
