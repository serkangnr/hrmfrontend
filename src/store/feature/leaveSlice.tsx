import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

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

export interface ILeaveIdentity{
    id: number;
    employeeId: string;
    authId: number;
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



const leaveSlice =createSlice({
    name:'leave',
    initialState: initialLeaveState,
    reducers:{},
    extraReducers: (build)=>{

    }
})

const shiftSlice =createSlice({
    name:'shift',
    initialState: initialLeaveState,
    reducers:{},
    extraReducers: (build)=>{
        build.addCase(fetchSaveLeave.pending,(state)=>{
            state.isLoading= true;
        });
        build.addCase(fetchSaveLeave.fulfilled,(state)=>{
            state.isLoading= false;
        });
    }
})

export default leaveSlice.reducer;
