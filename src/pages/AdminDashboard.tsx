import React, { useEffect } from 'react'

import Sidebar from '../component/molecules/Sidebar/Sidebar'
import UserCard from '../component/molecules/usercard/UserCard'
import TrafficChart from '../component/molecules/trafficCharts/TrafficChart'
import LeaveInfo from '../component/molecules/LeaveInfo/LeaveInfo'
import BirtdayCard from '../component/molecules/birthdayCard/BirtdayCard'
import PermitCard from '../component/molecules/PermitCard/PermitCard'
import Holiday from '../component/molecules/HolidayCards/Holiday'
import AdminSidebar from '../component/molecules/Sidebar/AdminSidebar'
import { useNavigate } from 'react-router-dom'
import ContactCard from '../component/molecules/ContactCard'
import { useDispatch } from 'react-redux'
import { HrmDispatch, RootState, useAppSelector } from '../store'
import { fetchgetAdmin } from '../store/feature/adminSlice'
import { IAdminIdentity } from '../store/feature/adminSlice'

function Dashboard() {
  const dispatch = useDispatch<HrmDispatch>();
  const token = useAppSelector(state => state.auth.token)
  const admin: IAdminIdentity | null = useAppSelector(state => state.admin.admin)

  // const token = localStorage.getItem('token')
  // console.log(token)

  // useEffect(() => {
  //   getAdmin()
  // }, [])


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
                  <UserCard name="Elif" imageUrl="https://media.licdn.com/dms/image/D4D12AQFGymRSxZDcxQ/article-cover_image-shrink_600_2000/0/1700413524614?e=2147483647&v=beta&t=KTR5NLBDWYJjw_-_Mtq3Yqu322M5BXQVBL0TJ9sjvXU"
                    birthDate='01.01.2000' startDate="01.01.2023" position="Yonetici" cardLink1="https://picsum.photos/200/300"
                    cardLink2="https://picsum.photos/200/300" />
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
export default Dashboard;