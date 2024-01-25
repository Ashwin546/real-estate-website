import React from 'react'
import './PropComp.css'
import Carousel from '../carousel/Carousel'
function PropComp({data}) {
  
  return (
    <div className="property-card">
      <div className="img">
         <Carousel/>
      </div>
      
      <div className="property-details">
        <h2>{data.title}</h2>
        <p>{data.location}</p>
        <p>{data.price}</p>
        <p>{data.bedrooms} Bedrooms</p>
        <p>{data.bathrooms} Bathrooms</p>
        <p>{data.area}</p>
      </div>
    </div>
  )
}

export default PropComp