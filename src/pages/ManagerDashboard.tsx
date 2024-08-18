import React, { useEffect } from 'react'


import UserCard from '../component/molecules/usercard/UserCard'
import TrafficChart from '../component/molecules/trafficCharts/TrafficChart'
import LeaveInfo from '../component/molecules/LeaveInfo/LeaveInfo'
import BirtdayCard from '../component/molecules/birthdayCard/BirtdayCard'
import PermitCard from '../component/molecules/PermitCard/PermitCard'
import Holiday from '../component/molecules/HolidayCards/Holiday'
import ManagerSidebar from '../component/molecules/Sidebar/ManagerSidebar'

import LineChart from '../component/molecules/LineChart'
import SubscriptionChart from '../component/molecules/SubscriptionChart'
import ContactCard from '../component/molecules/ContactCard'
import ManagerCard from '../component/molecules/ManagerCard'
import TrafficChartDepartman from '../component/molecules/TrafficChartDepartman'
import { setToken } from '../store/feature/authSlice'
import { HrmDispatch, useAppSelector } from '../store'
import { useDispatch } from 'react-redux'

function ManagerDashboard() {
  const token = useAppSelector((state) => state.auth.token);
  const dispatch: HrmDispatch = useDispatch();

  useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            dispatch(setToken(token));
        }
    }, [dispatch]);
  return (
    <>

      <div className="contaniner " style={{ backgroundColor: '#EEEEEE' }}>
        <div className="row shadow" style={{ height: '50px', backgroundColor: '#EEEEEE' }}>
          <ContactCard companyPhone="5555555555" companyEmail="assim@gmail.com" />
        </div>
        <div className="row shadow">
          <div className="col-2 ">

            <ManagerSidebar /> </div>
          <div className="col-9">

            <div className="row">
              <div className="col-4 p-4">
                <div className="row  ">
                  <ManagerCard />
                </div>

                <div className="row">
                  <div className="card ">

                    <LineChart />

                  </div>


                </div>

              </div>

              <div className="col-4 p-4">



                <div className="card">

                  <SubscriptionChart />

                </div>
                <div className="card shadow" >

                  <div className="card-body pb-0">
                    <h6 className="card-title">

                      <i className='bx bxs-user-account bx-tada bx-rotate-180' ></i> <label style={{ fontSize: '20px' }} className='me-2 '>Departman Dağılımı</label>  <span>|<label style={{ fontSize: '15px' }} className='me-2 '>Bugün</label></span>
                    </h6>
                   
                    <br />
                    <TrafficChartDepartman />

                  </div>
                </div>

              </div>
              <div className="col-4 p-4">

                <div className="row ">
                  <BirtdayCard />


                </div>
                <div className="row">
                  <Holiday />
                </div>



              </div>
            </div>
          </div>

        </div>
      </div>
    </>








  )

}
export default ManagerDashboard;