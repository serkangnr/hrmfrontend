import React from 'react'

import Sidebar from '../component/molecules/Sidebar/Sidebar'
import UserCard from '../component/molecules/usercard/UserCard'
import TrafficChart from '../component/molecules/trafficCharts/TrafficChart'
import LeaveInfo from '../component/molecules/LeaveInfo/LeaveInfo'

import PermitCard from '../component/molecules/PermitCard/PermitCard'
import Holiday from '../component/molecules/HolidayCards/Holiday'
import LineChart from '../component/molecules/LineChart'
import SubscriptionChart from '../component/molecules/SubscriptionChart'
import ContactCard from '../component/molecules/ContactCard'
import EmployeeSidebar from '../component/molecules/Sidebar/EmployeeSidebar'
import EmployeeCard from '../component/molecules/EmployeeCard'
import TrafficChartDepartman from '../component/molecules/TrafficChartDepartman'
import Takvim from '../component/atoms/Takvim'
import BirthdayCard2 from '../component/molecules/birthdayCard/BirtdayCard2'

function EmployeeDashboard() {
  //yenilendi
  
  return (
    <>

      <div className="contaniner " style={{ backgroundColor: '#EEEEEE' }}>
        <div className="row shadow" style={{ height: '50px', backgroundColor: '#EEEEEE' }}>
        <ContactCard companyPhone="5555555555" companyEmail="assim@gmail.com" />
        </div>
        <div className="row shadow">
          <div className="col-2 ">

            <EmployeeSidebar /> </div>
          <div className="col-9">

            <div className="row">
              <div className="col-4 p-4">
                <div className="row mt-2 ">
                  <EmployeeCard  />
                </div>
                
              </div>
              <div className="col-4 p-4">
                

                
                <div className="row">
                  <Holiday />
                </div>
                <div className="row">
                  <LeaveInfo
              
                  />
                </div>
              </div>
              <div className="col-4 p-4">
                <div className="row">
                  

                </div>
                
                <div className="row ">
                  <BirthdayCard2 />


                </div>
                <div className="row">
              <Takvim title="Takvim" />
              </div>
                



              </div>
            </div>
          </div>

        </div>
      </div>
    </>








  )


}
export default EmployeeDashboard;