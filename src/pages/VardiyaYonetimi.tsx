import React, { useEffect } from 'react'
import ContactCard from '../component/molecules/ContactCard'
import ManagerSidebar from '../component/molecules/Sidebar/ManagerSidebar'
import CalisanListTablo from '../component/molecules/CalisanListTablo'
import { HrmDispatch, useAppSelector } from '../store';
import { useDispatch } from 'react-redux';
import { fetchEmployeeList, fetchVardiyaList } from '../store/feature/employeeSlice';
import VardiyaEklemeTablosu from '../component/molecules/VardiyaEklemeTablosu';

function VardiyaYonetimi() {

    const vardiyaList = useAppSelector(state => state.employee.vardiyaList);
    const dispatch = useDispatch<HrmDispatch>();
    const token = useAppSelector(state => state.auth.token);

   useEffect(() => {
    if (token) {
      dispatch(fetchVardiyaList(token));
    }
  }, [token, dispatch]); 

  
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
                                    <th colSpan={15} className="table-active  "><h1 className='text-center' >Vardiya Listesi</h1></th>
                                    </tr>

                                    


                                </thead>
                                <thead>
                                    <tr>
                                       
                                        <th scope="col">İsim</th>
                                        <th scope="col">Soyisim</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Telefon</th>
                                        <th scope="col">Pozisyon</th>
                                        <th scope="col">Departman</th>
                                        <th scope="col">Meslek</th>
                                        <th scope="col">Cinsiyet</th>
                                        <th scope="col">Vardiya Türü</th>
                                        <th scope="col">Vardiya Başlangıç Tarihi</th>
                                        <th scope="col">Vardiya Bitiş Tarihi</th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                        
                                    </tr>
                                </thead>
                                
                                <tbody>
                                    {
                                        <VardiyaEklemeTablosu employees={vardiyaList} />
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

export default VardiyaYonetimi