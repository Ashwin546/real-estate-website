import React from 'react'

function Carousel() {
  return (
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="1000">
            <img src="https://source.unsplash.com/random/800x800/?property" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item" data-bs-interval="1000">
            <img src="https://source.unsplash.com/random/800x800/?property" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item" data-bs-inetrval="1000">
            <img src="https://source.unsplash.com/random/800x800/?property" className="d-block w-100" alt="..."/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
  )
}

export default Carousel