import React from 'react'

function DropdownDnismanliklar() {
  return (
//     <>
           
//     <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//       DANIŞMANLIKLAR
//     </a>
//           <ul className="dropdown-menu" style={{border:'1px solid white'}}>
            //   <li> <a href="#" className="list-group-item list-group-item-action " style={{border:'1px solid grey', borderRadius:'5px'}} aria-current="true">
            //       <div className="d-flex w-100 justify-content-between">
            //           <h5 className="mb-1"><i className="fa-solid fa-arrow-right"></i> Bordro ve Teşvik Danışmanlığı</h5>

            //       </div>

            //       <small>Bordrolarınızın hazırlanması ve teşvik takibi için alanında uzman ekimizden destek alın.</small>
            //   </a></li>
            //   <li><a href="#" className="list-group-item list-group-item-action" style={{border:'1px solid grey', borderRadius:'5px'}}>
            //       <div className="d-flex w-100 justify-content-between">
            //           <h5 className="mb-1"><i className="fa-solid fa-arrow-right"></i> Performans Değerlendirme Danışmalığı</h5>

            //       </div>

            //       <small className="text-body-secondary">Kurgudan sonuç analizine kadar tüm ihtiyaçlarınız için danışmanlık hizmetimizden yararlanın.</small>
            //   </a></li>
            //   <li><a href="#" className="list-group-item list-group-item-action" style={{border:'1px solid grey', borderRadius:'5px'}}>
            //       <div className="d-flex w-100 justify-content-between">
            //           <h5 className="mb-1"><i className="fa-solid fa-arrow-right"></i> İK Danışmanlığı</h5>

            //       </div>
            //       <small className="text-body-secondary">İyileştirme ihtiyacı duyduğunuz İK süreçleriniz için kendi danışmanlık paketinizi oluşturun.</small>
            //   </a></li>
//           </ul>
      
//   </>

<>


<div className="dropdown">
  <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    DANIŞMANLIKLAR
  </button>
  <ul className="dropdown-menu dropdown-menu-dark" style={{backgroundColor:'rgba(255, 255, 255, 0.8)', color:'black'}} >
  <li> <a href="#" className="list-group-item list-group-item-action " style={{ borderRadius:'5px'}} aria-current="true">
                  <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1"><i className="fa-solid fa-arrow-right"></i> Bordro ve Teşvik Danışmanlığı</h5>

                  </div>

                  <small>Bordrolarınızın hazırlanması ve teşvik takibi için alanında uzman ekimizden destek alın.</small>
              </a></li>
              <li><a href="#" className="list-group-item list-group-item-action" style={{ borderRadius:'5px'}}>
                  <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1"><i className="fa-solid fa-arrow-right"></i> Performans Değerlendirme Danışmalığı</h5>

                  </div>

                  <small >Kurgudan sonuç analizine kadar tüm ihtiyaçlarınız için danışmanlık hizmetimizden yararlanın.</small>
              </a></li>
              <li><a href="#" className="list-group-item list-group-item-action" style={{ borderRadius:'5px'}}>
                  <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1"><i className="fa-solid fa-arrow-right"></i> İK Danışmanlığı</h5>

                  </div>
                  <small >İyileştirme ihtiyacı duyduğunuz İK süreçleriniz için kendi danışmanlık paketinizi oluşturun.</small>
              </a></li>
  </ul>
</div>
    </>


  )
}

export default DropdownDnismanliklar