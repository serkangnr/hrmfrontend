import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { HrmDispatch, useAppSelector } from '../../store';
import { fetchShiftByEmployeeId } from '../../store/feature/shiftSlice';

function EmployeeShiftPopUp() {
    const dispatch = useDispatch<HrmDispatch>();
    const shift = useAppSelector(state => state.shift.shift);

    const id = useAppSelector(state => state.employee.employee?.id);

    useEffect(() => {
        if (id) {
            dispatch(fetchShiftByEmployeeId(id));
        }

    }, [dispatch, id]);



    return (
        <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true" >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header bg-dark" >
                        
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">

                        <>
                            <div className="card" style={{ width: '25rem' }}>
                                <div className="card-header text-center">
                                    <h5 className="card-title">Vardiya Bilgilerim</h5>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">İsim : {shift?.name}</li>
                                    <li className="list-group-item">Soyisim : {shift?.surname}</li>
                                    <li className="list-group-item">Vardiya Türü : {shift?.shiftType}</li>
                                    <li className="list-group-item">Vardiya Başlangıç : {shift?.startDate}</li>
                                    <li className="list-group-item">Vardiya Bitiş : {shift?.endDate}</li>
                                </ul>
                            </div>


                        </>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default EmployeeShiftPopUp