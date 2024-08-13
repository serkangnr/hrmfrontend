import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Takvim.css'; // Stil dosyanız

type CalendarCardProps = {
  title: string;
};

const Takvim: React.FC<CalendarCardProps> = ({ title }) => {
  const [date, setDate] = useState<Date>(new Date());

  const handleDateChange = (newDate: Date) => {
    setDate(newDate);
  };

  return (
    <Card className="calendar-card">
     
        <Card.Title>{title}</Card.Title>
        <div className="calendar-container ">
          <Calendar
            
            value={date}
          />
        </div>
      
    </Card>
  );
};

export default Takvim;
