import React from 'react'

function UpCarosel() {
  return (
    <>
     <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="./image/resim.jpg" className="d-block w-100 rounded" style={{ height: 500 }} alt="Slide 1" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="./image/resim4.jpeg" className="d-block w-100 rounded" style={{ height: 500 }} alt="Slide 2" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="./image/resim2.jpg" className="d-block w-100 rounded" style={{ height: 500 }} alt="Slide 3" />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true" />
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
    </>
  )
}

export default UpCarosel