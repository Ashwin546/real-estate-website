import React from 'react'
import './image_and_search_bar.css'
function Image_and_search_bar() {
  return (
    <div className='image'> 
         <h1 className='para'>
             your dream rental,just a click away.
             welcome home with RentHub 
         </h1>
         <div className="search-container">
          <input
            className='search-input'
            type="text"
            placeholder="Search for a property"
            
          />
          <select id="buy_or_rent">
            <option value="buy">buy</option>
            <option value="rent">rent</option>
          </select>
          <select id="type">
            <option value="PG">PG</option>
            <option value="Flat">FLat</option>
            <option value="Plot">Plot</option>
            <option value="house">house</option>
          </select>
          <button >Search</button>
          </div>
         
    </div>
  )
}

export default Image_and_search_bar