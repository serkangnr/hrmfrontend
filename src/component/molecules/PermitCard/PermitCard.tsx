import React, { useEffect } from 'react';
import './permit.css';
import { useDispatch } from 'react-redux';
import { HrmDispatch, useAppSelector } from '../../../store';
import { fetchUpcomingCompanyDates } from '../../../store/feature/managerSlice';



function PermitCard() {

  const dispatch = useDispatch<HrmDispatch>();
  const companyList = useAppSelector(state => state.manager.upcomingCompanyDates);

  useEffect(() => {
    dispatch(fetchUpcomingCompanyDates());

}, [])





  return (
    <div className="card leave-card shadow">
      <div className="card-header">
      <i className="fa-solid fa-calendar-days"></i> Üyelik bitimi yaklaşan şirketler
      </div>
      <ul className="list-group list-group-flush">
        {companyList.map((company, index) => (
          <li className="list-group-item" key={index}>
            <img src={company.logo}  />
            <a href="#">{company.name}</a>
            <span>{company.registrationEndDate}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PermitCard;
