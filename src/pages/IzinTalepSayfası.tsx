import React, { useEffect, useState } from 'react'
import ContactCard from '../component/molecules/ContactCard'

import { useDispatch } from 'react-redux'
import { HrmDispatch, useAppSelector } from '../store'

import Swal from 'sweetalert2'
import { ELeaveType, fetchRequestLeave } from '../store/feature/leaveSlice'
import EmployeeSidebar from '../component/molecules/Sidebar/EmployeeSidebar'
import { setToken } from '../store/feature/authSlice'

function IzinTalepSayfası() {
  const dispatch = useDispatch<HrmDispatch>();

  const token = useAppSelector(state => state.auth.token);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
        dispatch(setToken(token));
    }
}, [dispatch]);

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');
  const [leaveType, setLeaveType] = useState<ELeaveType>(ELeaveType.YILLIK_IZIN);
  const handleLeaveTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLeaveType(event.target.value as ELeaveType);
  };
  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };


  const addLeave = () => {
    dispatch(fetchRequestLeave({
      startDate: startDate,
      endDate: endDate,
      leaveType: leaveType,
      description: description,
      token: token
    })).then(data => {
      console.log(data)
      if (data.payload.code === 200) {
        Swal.fire("Başarılı!", "İzin talebiniz gönderilmiştir!", "success")

      } else {
        Swal.fire("Hata!", "İzin talep edilemedi!", "error");
      }
    })
  }



  return (
    <>

      <div className="contaniner" style={{ backgroundColor: '#EEEEEE' }} >
        <div className="row shadow" style={{ height: '50px', backgroundColor: '#EEEEEE' }}>
          <ContactCard companyPhone="5555555555" companyEmail="assim@gmail.com" />
        </div>
        <div className="row">
          <div className="col-2">

            <EmployeeSidebar /> </div>
          <div className="col-9">


            <div className="container">
              <section className="section register d-flex flex-column justify-content-center">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8 d-flex flex-column align-items-center justify-content-center">
                      <div className="d-flex justify-content-center">
                        <img src="./image/logo.png" style={{ width: "200px", height: "200px" }} alt="Logo" />
                      </div>
                      {/* End Logo */}
                      <div className="card mb-5" style={{ backgroundColor: 'rgba(255, 255, 255,0.3)' }}>
                        <div className="card-body">
                          <div className="pt-4 pb-2">
                            <h5 className="card-title text-center pb-0 mb-5">İzin Talebi Oluştur</h5>

                          </div>

                          <div className="modal-body">




                            <div className="mb-3">
                              <h6 style={{ color: 'black' }}>İZİN BAŞLAMA TARİHİ</h6>
                              <input
                                type="date"
                                value={startDate}
                                onChange={evt => setStartDate(evt.target.value)}
                                className="form-control"
                                id="startDate"
                              />
                            </div>
                            <div className="mb-3">
                              <h6 style={{ color: 'black' }}>İZİN BİTİŞ TARİHİ</h6>
                              <input
                                type="date"
                                value={endDate}
                                onChange={evt => setEndDate(evt.target.value)}
                                className="form-control"
                                id="endDate"
                              />
                            </div>

                            <div>
                              <h6 style={{ color: 'black' }}>İZİN TÜRÜ</h6>
                              <select

                                value={leaveType}
                                onChange={handleLeaveTypeChange}
                                className="form-control"
                                id="leaveType"
                              >
                                {Object.values(ELeaveType).map((leave) => (
                                  <option key={leave} value={leave}>
                                    {leave.replace('_', ' ').toUpperCase()}
                                  </option>
                                ))}
                              </select>
                            </div>

                            <div>
                              <h6 style={{ color: 'black',marginTop:'10px' }}>AÇIKLAMA</h6>
                              <textarea
                                value={description}
                                onChange={handleDescriptionChange}
                                className="form-control"
                                id="description"
                                rows={5} // Textarea'nın yüksekliğini ayarlamak için 'rows' kullanabilirsiniz
                                placeholder="İzinle ilgili açıklamaları buraya yazın..."
                              />
                            </div>







                          </div>
                          <div className="col-12">
                  <button onClick={addLeave} className="btn btn-secondary w-100 mt-3" type="submit">İzin Talep et</button>
                </div>




                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

          </div>


        </div>
      </div>






    </>
  )
}

export default IzinTalepSayfası