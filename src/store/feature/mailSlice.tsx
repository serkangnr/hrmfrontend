import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IVerifyEmail } from "../../models/IVerifyEmail";



const initialMailState = {
    email: '',
    password: '',
    name: '',
   
}

export const fetchSendPasswordMail = createAsyncThunk(
    'mail/fetchSendPasswordMail',
    async(email:string)=>{
        const response =  await fetch(`http://localhost:9097/api/v1/mail/get-admin-by-id?id=${email}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               
                'email': email
                
                
            })
        }).then(data => data.json())
        return response;
    }
);


const mailSlice = createSlice({
    name: 'mail',
    initialState: initialMailState,
    reducers: {

    },

    extraReducers: (build) => {

        build.addCase(fetchSendPasswordMail.fulfilled, (state, action: any) => {

        })

    }





})

export default mailSlice.reducer
    