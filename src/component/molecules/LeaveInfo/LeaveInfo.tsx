import React from 'react';
import { Card, ProgressBar, ListGroup } from 'react-bootstrap';
import './permit.css';


interface LeaveInfoProps {
  totalDays: number;
  forwardDays: number;
  usedDays: number;
  leaves: {
    type: string;
    days: string;
    date: string;
    approved: boolean;
  }[];
}

function LeaveInfo(props: LeaveInfoProps) {
  const { totalDays, forwardDays, usedDays, leaves } = props;

  return (
    <Card className='leave-card shadow'  >
    <i className="fa-solid fa-plane"></i>  <Card.Header>İzin Bilgilerim  </Card.Header>
      
      <Card.Body>
        <Card.Title>{totalDays} gün</Card.Title>
        <ProgressBar now={(usedDays / totalDays) * 100} label={`${usedDays}`} />
        <ListGroup variant="flush">
          {leaves.map((leave, index) => (
            <ListGroup.Item key={index}>
              <span style={{ color: leave.approved ? 'green' : 'red' }}>
                {leave.type} ({leave.days}g) - {leave.date}
              </span>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <Card.Text className="mt-2">
          İleri Tarihli: {forwardDays} <br />
          Kullanılan: {usedDays}
        </Card.Text>
        <Card.Link href="#">Tümünü Gör</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default LeaveInfo;