import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './permit.css';
import { useDispatch } from 'react-redux';
import { HrmDispatch, useAppSelector } from '../../../store';
import { fetchBirthdayEmployee2 } from '../../../store/feature/employeeSlice';

function BirthdayCard2() {
  const dispatch = useDispatch<HrmDispatch>();
  const token = useAppSelector(state => state.auth.token);
  const employeeList = useAppSelector(state => state.employee.birthdayEmployeeList);

  useEffect(() => {
    if (token) {
      dispatch(fetchBirthdayEmployee2(token));
    } else {
      console.warn('Token is null or undefined');
    }
  }, [token, dispatch]);

  return (
    <div className="card birthday-card shadow">
      <div className="card-header">
        <i className="fa-solid fa-cake-candles"></i> Yaklaşan Doğum Günleri
      </div>
      <ul className="list-group list-group-flush">
        {employeeList && employeeList.length > 0 ? (
          employeeList.map((employee, index) => (
            <li className="list-group-item" key={index}>
              {employee.avatar && <img src={employee.avatar} alt={`${employee.name} ${employee.surname}`} />}
              <a>{employee.name} {employee.surname}</a>
              <span>{employee.birthDate}</span>
            </li>
          ))
        ) : (
          <li className="list-group-item">Henüz doğum günü bilgisi bulunmuyor.</li>
        )}
      </ul>
    </div>
  );
}

export default BirthdayCard2;
