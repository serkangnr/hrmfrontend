import React from 'react'
import  './permit.css'

interface Holiday {
  name: string;
  date: string;
  
}

const holidays: Holiday[] = [
  {
    name: 'Cumhuriyet Bayramı',
    date: '29 Ekim',
     
  },
  {
    name: 'Zafer Bayramı',
    date: '30 Ağustos',
    
  },
  {
    name: '19 Mayıs Atatürk\'ü Anma, Gençlik ve Spor Bayramı',
    date: '19 Mayıs',
    
  },
];

function Holiday() {
  return (
    <>
      <div className="card holiday-card">
      <div className="card-header">
        <i className='bx bxs-plane-alt bx-flashing'></i> Resmi Tatiller
      </div>
      <ul className="list-group list-group-flush">
        {holidays.map((holiday, index) => (
          <li className="list-group-item" key={index}>
            
            <a href="#">{holiday.name}</a>
            <span>{holiday.date}</span>
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default Holiday