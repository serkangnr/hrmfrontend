import React from 'react'
import { useNavigate } from 'react-router-dom'

function DropdownDanismanliklar() {
  const navigate = useNavigate();
  const goToDanismanliklar = () => {
    navigate('/danismanlik')
  }
  return (
    

    <>


      <div className="dropdown w-100">
        <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          DANIŞMANLIKLAR
        </button>
        <ul className="dropdown-menu dropdown-menu-dark  ">
  
          <li><a className="dropdown-item" href="#" onClick={goToDanismanliklar}> <i className="fa-regular fa-clipboard fa-xl "></i><label className='m-2'>  Bordro ve Teşvik Danışmanlığı</label></a></li>
          <li><a className="dropdown-item" href="#"> <i className="fa-solid fa-chart-line fa-xl"></i><label className='m-2'>  Performans Değerlendirme Danışmanlığı</label></a></li>
          <li><a className="dropdown-item" href="#"> <i className="fa-solid fa-users fa-xl"></i><label className='m-2'>  İK Danışmanlığı</label></a></li>
        </ul>
      </div>
    </>


  )
}

export default DropdownDanismanliklar