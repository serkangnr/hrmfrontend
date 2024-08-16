import React, { useEffect } from 'react'
import ContactCard from '../component/molecules/ContactCard'
import ManagerSidebar from '../component/molecules/Sidebar/ManagerSidebar'
import CalisanListTablo from '../component/molecules/CalisanListTablo'
import { HrmDispatch, useAppSelector } from '../store';
import { useDispatch } from 'react-redux';
import { fetchEmployeeList } from '../store/feature/employeeSlice';
import { setToken } from '../store/feature/authSlice';
import CalisanListDurumTablo from '../component/molecules/CalisanListDurumTablo';

function CalisanListDurum() {

    const employeeList = useAppSelector(state => state.employee.employeeList);
    const dispatch = useDispatch<HrmDispatch>();
    const token = useAppSelector(state => state.auth.token);
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            dispatch(setToken(token));
        }
    }, [dispatch]);

    useEffect(() => {
        if (token) {
            dispatch(fetchEmployeeList(token));
        }
    }, [dispatch, token]);

  return (
    <>


<div className="contaniner">
            <div className="row shadow" style={{ height: '50px', backgroundColor: '#EEEEEE' }}>
        <ContactCard companyPhone="5555555555" companyEmail="assim@gmail.com" />
        </div>
                <div className="row">
                    <div className="col-2">

                        <ManagerSidebar /> </div>
                    <div className="col-9">

                        <div className="row">
                            <table className="table table-dark table-striped mt-5">
                                <thead>
                                    <tr>
                                    <th colSpan={14} className="table-active  "><h1 className='text-center' >Çalışan Listesi</h1></th>
                                    </tr>

                                    


                                </thead>
                                <thead>
                                    <tr>
                                       
                                        <th scope="col">İsim</th>
                                        <th scope="col">Soyisim</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Adres</th>
                                        <th scope="col">Telefon</th>
                                      
                                        <th scope="col">Tc</th>
                                        <th scope="col">Doğum Tarihi</th>
                                        <th scope="col">İşe Başlangıç Tarihi</th>
                                     
                                        <th scope="col">Pozisyon</th>
                                        <th scope="col">Maaş</th>
                                        <th scope="col">Departman</th>
                                        <th scope="col">Meslek</th>
                                        <th scope="col">Cinsiyet</th>
                                        <th scope="col"></th>
                                        
                                    </tr>
                                </thead>
                                
                                <tbody>
                                    {
                                        <CalisanListDurumTablo employees={employeeList} />
                                    }
                                  


                                </tbody>
                            </table>
                        </div>



                    </div>
                </div>


            </div>



</>
  )
}

export default CalisanListDurum;