import React, { useEffect } from 'react';
import { Card, ProgressBar, ListGroup } from 'react-bootstrap';
import './permit.css';
import { useDispatch } from 'react-redux';
import { HrmDispatch, useAppSelector } from '../../../store';
import { fetchAllMyLeave } from '../../../store/feature/leaveSlice';
import { fetchYearsLeaveCount } from '../../../store/feature/employeeSlice';




function LeaveInfo() {
 
  const dispatch = useDispatch<HrmDispatch>();
  const leavelist = useAppSelector(state => state.leave.leaveListDto);
  const usedDays = useAppSelector(state => state.employee.employee?.yearsLeaveCount);
  const token = useAppSelector(state => state.auth.token)
  const id = useAppSelector(state => state.employee.employee?.id)
  useEffect(() => {
    dispatch(fetchAllMyLeave(token)); // Token'ı uygun şekilde geçir.
  }, [dispatch, token]);



  useEffect(() => {
    if (id) {
      dispatch(fetchYearsLeaveCount(id));
      console.log(id)
    }
  }, [dispatch, id]);

  
  
  
   
  
  return (
    <Card className='leave-card shadow'  >
     <Card.Header> <i className="fa-solid fa-calendar-days"></i> &nbsp;&nbsp; İzin Bilgilerim  </Card.Header>
      
      <Card.Body>
        <Card.Title>{20} gün</Card.Title>
        {usedDays !== undefined && (
       <ProgressBar now={(usedDays / 20) * 100} label={`${usedDays}`} />
)}
        <ListGroup variant="flush">
          <span style={{ textAlign: 'right', marginTop: '10px', color: 'blue', fontWeight: 'bold' }}>
          {"İzin Türü"} - {" Başlangıç Tarihi"} - {" Bitis tarihi"}
          </span>
      
          {leavelist.map((leave, index) => (
            <ListGroup.Item key={index}>
              <span >
                {leave.leaveType} - {leave.startDate} - {leave.endDate}
              </span>
            </ListGroup.Item>
          ))}
        </ListGroup>
        
       
      </Card.Body>
    </Card>
  );
}

export default LeaveInfo;