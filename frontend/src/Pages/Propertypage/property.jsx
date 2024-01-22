import React, { useState, useEffect } from 'react';
import PropComp from '../../components/PropComp/PropComp';

function Property() {
  const [data, setData] = useState({ allProperties: {} });
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the backend API
        const response = await fetch('http://localhost:8000/api/property');

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        let result = await response.json();
        // Update state with the retrieved data
        console.log(result);
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <div className='properties'>
      <ul>
        {Array.isArray(data.allProperties) ? (
          data.allProperties.map((property, index) => (
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