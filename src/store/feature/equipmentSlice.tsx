import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFetchSaveLeave } from "./leaveSlice";
import Rest from '../../config/RestApis';


export enum EEquipmentType {
    BILGISAYAR = "BILGISAYAR",
    TELEFON = "TELEFON",
    TABLET = "TABLET",
    KULAKLIK = "KULAKLIK",
    KLAVYE = "KLAVYE",
    FARE = "FARE",
    MONITOR = "MONITOR",
    YAZICI = "YAZICI",
    DOSYA_DOLABI = "DOSYA_DOLABI",
    KIRTASIYE = "KIRTASIYE",
    LAPTOP_CANTASI = "LAPTOP_CANTASI",
    USB_FLASH_BELLEK = "USB_FLASH_BELLEK"
}

export interface IEquipmentIdentity {
    id: number;
    employeeId: string;
    managerId: string;
    name: string;
    equipmentType: EEquipmentType;
    description: string;
    receivingDate: string;
    returningDate: string;
    fixtureNo: string;
}
interface IEquipmentState {
    equipment: IEquipmentIdentity | null,
    equipmentList: IEquipmentIdentity[],
    isLoading: boolean
    count: number
    equipmentResponseList: IEquipmentResponseList[],
}

export interface IFetchSaveEquipment {

    employeeId: string;
    name: string;
    equipmentType: EEquipmentType;
    description: string;
    token: string;
}

export interface IEquipmentResponseList {
    id: number;
    name: string;
    employeeName: string;
    employeeSurname: string;
    description: string;
    equipmentType: EEquipmentType;
    receivingDate: string;
    employeeId: string;
    fixtureNo: string;
}
export interface IRejectEquipment {

    id: number;
    description: string;
}


const initialEquipmentState: IEquipmentState = {
    equipment: null,
    equipmentList: [],
    equipmentResponseList: [],
    isLoading: false,
    count: 0



}

export const fetchSaveEquipment = createAsyncThunk(
    'equipment/fetchSaveEquipment',
    async (payload: IFetchSaveEquipment) => {
        const response = await fetch(Rest.equipment + '/save-equipment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                employeeId: payload.employeeId,
                name: payload.name,
                equipmentType: payload.equipmentType,
                description: payload.description,
                token: payload.token
            })
        }).then(data => data.json())
        return response;
    }
);

export const fetchDeleteEquipment = createAsyncThunk(
    'equipment/fetchDeleteEquipment',
    async (id: number) => {
        const response = await fetch(`${Rest.equipment}/delete-equipment?id=${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'id': id,

            })
        }).then(data => data.json())
        return response;

    });

export const fetchAcceptEquipment = createAsyncThunk(
    'equipment/fetchAcceptEquipment',
    async (id: number) => {
        const response = await fetch(`${Rest.equipment}/accept-equipment?id=${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'id': id,

            })
        }).then(data => data.json())
        return response;

    });

    export const fetchRejectEquipment = createAsyncThunk(
        'equipment/fetchRejectEquipment',
        async (payload: IRejectEquipment) => {
            const response = await fetch(`${Rest.equipment}/reject-equipment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'id': payload.id,
                    'description': payload.description
                })
            }).then(data => data.json());
    
            return response;
        }
    );




export const fetchAllEquipments = createAsyncThunk(
    'equipment/fetchAllEquipments',
    async (token: string) => {
        const response = await fetch(`${Rest.equipment}/get-all-equipments?token=${token}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch equipments');
        }

        const data = await response.json();
        return data.data as IEquipmentResponseList[];
    }
);

export const fetchGetMyEquipments = createAsyncThunk(
    'equipment/fetchGetMyEquipments',
    async (token: string) => {
        const response = await fetch(`${Rest.equipment}/get-my-equipments?token=${token}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch equipments');
        }

        const data = await response.json();
        return data.data as IEquipmentResponseList[];
    }
);
export const fetchGetRejectedEquipments = createAsyncThunk(
    'equipment/fetchGetRejectedEquipments',
    async (token: string) => {
        const response = await fetch(`${Rest.equipment}/get-description-rejected-equipment?token=${token}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch equipments');
        }

        const data = await response.json();
        return data.data as IEquipmentResponseList[];
    }
);
export const fetchGetPendingEquipments = createAsyncThunk(
    'equipment/fetchGetPendingEquipments',
    async (token: string) => {
        const response = await fetch(`${Rest.equipment}/get-pending-equipments?token=${token}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch equipments');
        }

        const data = await response.json();
        return data.data as IEquipmentResponseList[];
    }
);

export const fetchGetPendingEquipmentCount = createAsyncThunk(
    'equipment/fetchGetPendingEquipmentCount',
    async (token: string) => {
        const response = await fetch(Rest.equipment + `/get-pending-equipment-count?token=${token}`);
        const result = await response.json();
        console.log('API Result:', result);
        return result;
    }
);

const equipmentSlice = createSlice({
    name: 'equipment',
    initialState: initialEquipmentState,
    reducers: {},
    extraReducers: (build) => {
        build.addCase(fetchSaveEquipment.pending, (state) => {
            state.isLoading = true;
        });
        build.addCase(fetchSaveEquipment.fulfilled, (state) => {
            state.isLoading = false;
        })
        build.addCase(fetchAllEquipments.pending, (state) => {
            state.isLoading = true;
        });
        build.addCase(fetchAllEquipments.fulfilled, (state, action) => {
            state.isLoading = false;
            state.equipmentResponseList = action.payload;
        });
        build.addCase(fetchAllEquipments.rejected, (state) => {
            state.isLoading = false;
        });
        build.addCase(fetchDeleteEquipment.pending, (state) => {
            state.isLoading = true;
        });
        build.addCase(fetchDeleteEquipment.fulfilled, (state, action) => {
            if (action.payload.code === 200) {
                state.equipment = action.payload.data;
            } else {
            }
        }
        );
        build.addCase(fetchDeleteEquipment.rejected, (state) => {
            state.isLoading = false;
        });

        build.addCase(fetchGetMyEquipments.pending, (state) => {
            state.isLoading = true;
        });
        build.addCase(fetchGetMyEquipments.fulfilled, (state, action) => {
            state.isLoading = false;
            state.equipmentResponseList = action.payload;
        });
        build.addCase(fetchGetMyEquipments.rejected, (state) => {
            state.isLoading = false;
        });
        build.addCase(fetchGetPendingEquipments.fulfilled, (state, action) => {
            state.isLoading = false;
            state.equipmentResponseList = action.payload;
        });
        build.addCase(fetchAcceptEquipment.fulfilled, (state, action) => {
            if (action.payload.code === 200) {
                state.equipment = action.payload.data;
            } else {
            }
        });
        build.addCase(fetchGetPendingEquipmentCount.fulfilled, (state, action: PayloadAction<number>) => {
            state.count = action.payload;
        });
        build.addCase(fetchRejectEquipment.fulfilled, (state, action) => {
            if (action.payload.code === 200) {
                state.equipment = action.payload.data;
            } else {
            }
        });
        build.addCase(fetchGetRejectedEquipments.fulfilled, (state, action) => {
            state.isLoading = false;
            state.equipmentResponseList = action.payload;
        });


    }

})

export default equipmentSlice.reducer