import React, { useState, useEffect } from 'react';
import PropComp from '../../components/PropComp/PropComp';
import { usePropertyContext } from '../../context/PropertyContextProvider';
import SearchBar from '../../components/SearchBar/SearchBar';

function Property() {
    
    const {properties}=usePropertyContext();
    if(properties.length===0){
      return (
        <h1>
          No properties found
        </h1>
      )
    }
  return (
  <>
        <SearchBar/>
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
  </>
    
  );
}

export default Property