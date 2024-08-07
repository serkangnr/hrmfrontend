import React from 'react'

import Sidebar from '../component/molecules/Sidebar/Sidebar'
import UserCard from '../component/molecules/usercard/UserCard'
import TrafficChart from '../component/molecules/trafficCharts/TrafficChart'
import LeaveInfo from '../component/molecules/LeaveInfo/LeaveInfo'
import BirtdayCard from '../component/molecules/birthdayCard/BirtdayCard'
import PermitCard from '../component/molecules/PermitCard/PermitCard'
import Holiday from '../component/molecules/HolidayCards/Holiday'

function Dashboard() {
  //yenilendi
  const leaveData = {
    totalDays: 15,
    forwardDays: 3,
    usedDays: 12,
    leaves: [
      { type: 'Doğum Sonrası', days: '28g', date: '29 Haz 2023', approved: true },
      { type: 'Hastalık İzni', days: '1g', date: '24 Mar 2023', approved: true },
      { type: 'Yıllık İzin', days: '4g', date: '4 Şub 2023', approved: false },
      { type: 'Doğum Sonrası İzni', days: '1g', date: '1 Şub 2023', approved: true }
    ]

  };
  return (
    <>

      <div className="contaniner">
        <div className="row" style={{height:'50px', backgroundColor: 'black'}}></div>
        <div className="row">
          <div className="col-2">

            <Sidebar /> </div>
          <div className="col-9">
            
          <div className="row">
        <div className="col-4 p-4">
          <div className="row">
            <UserCard name="Elif" imageUrl="https://media.licdn.com/dms/image/D4D12AQFGymRSxZDcxQ/article-cover_image-shrink_600_2000/0/1700413524614?e=2147483647&v=beta&t=KTR5NLBDWYJjw_-_Mtq3Yqu322M5BXQVBL0TJ9sjvXU"
             birthDate='01.01.2000' startDate="01.01.2023" position="Yonetici" cardLink1="https://picsum.photos/200/300"
              cardLink2="https://picsum.photos/200/300" />
          </div>
          <div className="row">
            <div className="card">

              <div className="card-body pb-0">
                <h5 className="card-title">
                  <i className='bx bxs-user-account bx-tada bx-rotate-180' ></i>  Çalışan Dağılımı <span>| Today</span>
                </h5>
                <div id="trafficChart" style={{ minHeight: 300 }} className="echart" />

                <TrafficChart />
                
              </div>
             
            </div>
          </div>
        </div>
        <div className="col-4 p-4">
          <div className="row">
            <LeaveInfo
              totalDays={leaveData.totalDays} forwardDays={leaveData.forwardDays} usedDays={leaveData.usedDays} leaves={leaveData.leaves}
            />
          </div>
          <div className="row">
            <Holiday />
          </div>
        </div>
        <div className="col-4 p-4">
          <div className="row">
            <PermitCard />
          </div>
          <div className="row">
            <BirtdayCard />
            

          </div>
        </div>
      </div>

          </div>
        </div>


      </div>

      

    </>
































  )

}
export default Dashboard;