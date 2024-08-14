import React, { useEffect } from 'react'


import TrafficChart from '../component/molecules/trafficCharts/TrafficChart'
import LeaveInfo from '../component/molecules/LeaveInfo/LeaveInfo'

import PermitCard from '../component/molecules/PermitCard/PermitCard'
import Holiday from '../component/molecules/HolidayCards/Holiday'
import AdminSidebar from '../component/molecules/Sidebar/AdminSidebar'

import ContactCard from '../component/molecules/ContactCard'
import { useDispatch } from 'react-redux'
import { HrmDispatch, useAppSelector } from '../store'

import { IAdminIdentity } from '../store/feature/adminSlice'
import AdminCard from '../component/molecules/AdminCard'
import Takvim from '../component/atoms/Takvim'

function Dashboard() {
  const dispatch = useDispatch<HrmDispatch>();
  const token = useAppSelector(state => state.auth.token)
  const admin: IAdminIdentity | null = useAppSelector(state => state.admin.admin)

 


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
        <div className="row shadow" style={{ height: '50px', backgroundColor: '#EEEEEE' }}>
          <ContactCard companyPhone="5555555555" companyEmail="assim@gmail.com" />
        </div>
        <div className="row">
          <div className="col-2">

            <AdminSidebar /> </div>
          <div className="col-9">

            <div className="row">
              <div className="col-4 p-4">
                <div className="row">
                 <AdminCard/>
                </div>
                <div className="row">
                 
                    <LeaveInfo
                      totalDays={leaveData.totalDays} forwardDays={leaveData.forwardDays} usedDays={leaveData.usedDays} leaves={leaveData.leaves}
                    />
                  
                </div>
              </div>
              <div className="col-4 p-4">
                <div className="card " >

                  <div className="card-body pb-0">
                    <h5 className="card-title ">
                      <i className='bx bxs-user-account bx-tada bx-rotate-180 ' ></i>  Şirket Sektörel Dağılımı
                    </h5>


                    <TrafficChart />

                  </div>

                </div>

                <div className="row  " style={{width:'100%'}}>
                  <PermitCard />
                </div>

              </div>
              <div className="col-4 p-4">
                <div className="row ">
                  <Holiday />
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
export default Dashboard;