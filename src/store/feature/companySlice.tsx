import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IResponse } from "../../models/IResponse";
import { IAdminList } from "../../models/IAdminList";
import { ICompanyList } from "../../models/ICompanyList";
import Rest from '../../config/RestApis';

export interface ICompanyByManagerResponseDto {
    id: string;
    name: string;
    title?: string;          
    description?: string;   
    address: string;
    phone: string;
    email: string;
    website: string;
    logo: string;
    sector: string;
    taxNumber?: string;      
    taxOffice?: string;      
    mersisNo?: string;       
    vision?: string;         
    mission?: string;        
    country: string;
    city: string;
    employeeCount?: number;  
    founded?: string;        
    foundingYear?: string;   
    linkedin?: string;       
}

export interface ICompanyUpdateRequestDto {
    token: string;
    id: string;
    name: string;
    title?: string;          
    description?: string;    
    address: string;
    phone: string;
    email: string;
    website: string;
    logo: string;
    sector: string;
    taxNumber?: string;     
    taxOffice?: string;      
    mersisNo?: string;       
    vision?: string;        
    mission?: string;        
    country: string;
    city: string;
    founded?: string;        
    foundingYear?: string;   
    linkedin?: string;       
}




const initialCompanyState={
    token: '',
    id:'',
    companyList:[] as ICompanyList[],
    companyListByManager: [] as ICompanyByManagerResponseDto[],
    isLoadingLogin: false,
    isLoadingRegister: false,
    editCompany: {} as ICompanyByManagerResponseDto,
    company: {} as ICompanyByManagerResponseDto,
    
}

export const fetchUpdateCompanyByManager = createAsyncThunk(
    'company/fetchUpdateCompanyByManager',
    async (payload: ICompanyUpdateRequestDto) => {
        const res = await fetch(Rest.company + '/update-company-by-manager', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                token: payload.token,
                id: payload.id,
                name: payload.name,
                title: payload.title,
                description: payload.description,
                address: payload.address,
                phone: payload.phone,
                email: payload.email,
                website: payload.website,
                logo: payload.logo,
                sector: payload.sector,
                taxNumber: payload.taxNumber,
                taxOffice: payload.taxOffice,
                mersisNo: payload.mersisNo,
                vision: payload.vision,
                mission: payload.mission,
                country: payload.country,
                city: payload.city,
                founded: payload.founded,
                foundingYear: payload.foundingYear,
                linkedin: payload.linkedin
            })
        }).then(response => response.json());
        return res;
    }
);

export const fetchgetCompanyByToken = createAsyncThunk(
    'company/fetchgetCompanyByToken',
    async (token: string) => {
        const result = await fetch(Rest.company+'/get-company-by-token?token=' + token)
            .then(data => data.json());
        return result;

        
    });

export const fetchCompanyList = createAsyncThunk(
    'company/fetchCompanyList',
    async () => {
        const response = await fetch(Rest.company+'/get-all-company', {
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



const companySlice = createSlice({
    name:'company',
    initialState: initialCompanyState,
    reducers: {
       
    },
    extraReducers:(build)=>{

        build.addCase(fetchCompanyList.fulfilled, (state, action: PayloadAction<IResponse>) => {
            state.companyList = action.payload.data; 
        })
        build.addCase(fetchgetCompanyByToken.fulfilled, (state, action: PayloadAction<IResponse>) => {
            if (action.payload.code === 200) {
                state.editCompany = action.payload.data;
                state.company = action.payload.data;
            } else {

            }
        })
        build.addCase(fetchUpdateCompanyByManager.fulfilled, (state, action: PayloadAction<IResponse>) => {
            
            console.log('Company update response:', action.payload);
        });


        

    }
});

export default companySlice.reducer;