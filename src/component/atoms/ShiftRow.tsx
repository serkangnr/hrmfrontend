import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { HrmDispatch, useAppSelector } from '../../store';
import { fetchShiftByEmployeeId } from '../../store/feature/shiftSlice';


function ShiftRow({ id }: { id: string }) {
    const dispatch = useDispatch<HrmDispatch>();
    
   
    let shift = useAppSelector(state => state.shift.shift); 
    console.log('Shift from Selector:', shift);


    useEffect(() => {
        dispatch(fetchShiftByEmployeeId(id));
    }, [dispatch, id]);

    return (
        <>
            <td>{shift?.shiftType}</td>
            <td style={{ whiteSpace: 'nowrap' }}>{shift?.startDate}</td>
            <td style={{ whiteSpace: 'nowrap' }}>{shift?.endDate}</td>
        </>
    );
}

export default ShiftRow;
