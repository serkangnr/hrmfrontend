import React from 'react'
import { useNavigate } from 'react-router-dom'

function DropdownUygulamalar() {
  const navigate = useNavigate()
  const ucretlendirme = () => {
    navigate('/ucretlendirme')
  }
  const vardiya = () => {
    navigate('/vardiya')
 
  }
  const personel = () => {
    navigate('/personel')
  }
  return (
    <>

<div className="dropdown">
  <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    UYGULAMALAR
  </button>
  <ul className="dropdown-menu dropdown-menu-dark">
  <li><a className="dropdown-item" href="#" onClick={personel}>Personel </a></li>

<li><a className="dropdown-item" href="#">Performans</a></li>

<li><a className="dropdown-item" href="#">İşe Alım Ve Aday Takip</a></li>

<li><a className="dropdown-item" href="#" onClick={vardiya}>Vardiya</a></li>

<li><a className="dropdown-item" href="#" onClick={ucretlendirme} >Ücret Değerlendirme </a> </li>
  </ul>
</div>
    </>
  )
}

export default DropdownUygulamalar