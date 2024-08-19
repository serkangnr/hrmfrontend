import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import Rest from '../../config/RestApis';
import { IResponse } from '../../models/IResponse';

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



export interface IShiftIdentity {
    id: number
    employeeId: string
    managerId: string
    name: string
    surname: string
    shiftType: EShiftType
    startDate: string
    endDate: string
}

interface IShiftState {
    shift: IShiftIdentity | null;
    shiftList: IShiftIdentity[]
    isLoading: boolean
    count: number
}

const initialShiftState: IShiftState = {
    shift: null,
    shiftList: [],
    isLoading: false,
    count:0
}

export interface IFetchCreateShift{
    token: string
    employeeId: string
    name: string
    surname: string
    shiftType: EShiftType
    startDate: string
    endDate: string

}

export const fetchShiftByEmployeeId = createAsyncThunk(
    'shift/fetchShiftByEmployeeId',
    async (id: string) => {
        try {
            const response = await fetch(`${Rest.shift}/get-shift-by-employee-id?id=${id}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data.data as IShiftIdentity;
        } catch (error) {
            throw new Error(`Fetch failed`);
        }
    }
);






export const fetchCreateShift = createAsyncThunk(
    'shift/fetchCreateShift',
    async (payload: IFetchCreateShift) => {
        try {
            const response = await fetch(Rest.shift+'/create-shift', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    token: payload.token,
                    employeeId: payload.employeeId,
                    name: payload.name,
                    surname: payload.surname,
                    shiftType: payload.shiftType,
                    startDate: payload.startDate,
                    endDate: payload.endDate,
                }),
            });

            // Yanıtın başarılı olup olmadığını kontrol edin
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            // JSON verisini parse edin
            const data = await response.json();
            return data;

        } catch (error) {
            // Hata durumunda catch bloğuna girer
            throw new Error(`Fetch failed`);
        }
    }
);

export const fetchDeleteShift = createAsyncThunk(
    'shift/fetchDeleteShift',
    async (id: string) => {
        const response = await fetch(`${Rest.shift}/delete-shift?id=${id}`, {
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

const shiftSlice =createSlice({
    name: 'shift',
    initialState: initialShiftState,
    reducers: { },
    extraReducers: (build) => {
        build.addCase(fetchCreateShift.pending,(state)=>{
            state.isLoading= true;
        });
        build.addCase(fetchCreateShift.fulfilled, (state, action) => {
            state.isLoading = false;
            
        });
        build.addCase(fetchShiftByEmployeeId.pending, (state) => {
            state.isLoading = true;
        });
        build.addCase(fetchShiftByEmployeeId.fulfilled, (state, action) => {
            state.isLoading = false;
            // Gelen vardiya bilgisini state'e ekleyin
            state.shift = action.payload;
        });
        build.addCase(fetchShiftByEmployeeId.rejected, (state) => {
            state.isLoading = false;
            // Hata durumunda gerekli işlemleri yapın
        });
        build.addCase(fetchDeleteShift.fulfilled, (state, action: PayloadAction<string>) => {

        })
        
       
        
       
    }
})

export default shiftSlice.reducer;