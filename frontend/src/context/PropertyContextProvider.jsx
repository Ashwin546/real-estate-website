import React, { useContext, useState } from 'react'
import PropertyContext from './PropertyContext'

const PropertyContextProvider = ({children}) => {
    const [search,setSearch]=useState()

    const [properties,setProperties]=useState([]);
    const getProperties = async (searchTerm) => {
        try {
          const response = await fetch('http://localhost:8000/api/property/viewProperty', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ search: searchTerm }),
          });
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
    
          const data = await response.json();
          setProperties(data);
        } catch (error) {
            console.error('Error fetching properties:', error);
        }
      };
    
    return (
       <PropertyContext.Provider value={{properties,getProperties}}>
           {children}
       </PropertyContext.Provider>
    
  )
}
 export const usePropertyContext = () => {
    const context = useContext(PropertyContext);
    if (!context) {
      throw new Error('usePropertyContext must be used within a PropertyProvider');
    }
    return context;
  };
export default PropertyContextProvider