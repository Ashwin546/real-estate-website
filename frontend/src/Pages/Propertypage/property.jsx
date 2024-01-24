import React, { useState, useEffect } from 'react';
import PropComp from '../../components/PropComp/PropComp';
import { usePropertyContext } from '../../context/PropertyContextProvider';

function Property() {
  
    const {properties}=usePropertyContext();

  return (
    <div className='properties'>
      <ul>
        {Array.isArray(properties) ? (
          properties.map((property, index) => (
             <div className='property'>
                <PropComp key={index} data={property}/>
             </div>   
         ))) : (
          <p>No properties found</p>
        )}
      </ul>
    </div>
  );
}

export default Property