import React from 'react'
import './PropComp.css'
function PropComp({data}) {
  
  return (
    <div className="property-card">
      <img src={data.image} alt={data.title} />
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