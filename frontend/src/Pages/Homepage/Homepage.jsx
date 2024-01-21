import React from 'react'
import Image_and_search_bar from '../../components/image_and_search_bar/image_and_search_bar'
import Options from '../../components/Options/Options';
import  {OptionsData}  from '../../data/OptionsData';
import './Homepage.css'
function Homepage() {
    
  return (
    <div className='Homepage'>
        <Image_and_search_bar/>
        <h1 style={{ textAlign: 'center' }}>Explore real estate options</h1>
        <div className='Options'>
            
            {
                OptionsData.map((item)=>(
                    <Options key={item.id} data={item}/>
                ))
            }
        </div>

    </div>
  )
}

export default Homepage