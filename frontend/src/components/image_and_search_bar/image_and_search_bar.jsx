import React,{useContext, useState} from 'react'
import './image_and_search_bar.css'
import { usePropertyContext } from '../../context/PropertyContextProvider';
import { useNavigate } from 'react-router-dom';
function Image_and_search_bar() {
  const [searchType,setSearchType]=useState('')
  const [location,setLocation]=useState('')
  const {properties,getProperties}=usePropertyContext();
  const navigate=useNavigate()
  const handleSearch = (e) => {
    e.preventDefault();
    //console.log(`Searching for ${searchType}: ${searchQuery}`);
    // Implement your search logic here
    if(location===null){
      return console.log('please enter a location')
    }
    getProperties({location})
    console.log(properties)
    navigate('/properties')
  };
  return (
    <div className='image'> 
         <h1 className='para'>
             your dream rental,just a click away.
         </h1>
         <h1 className='para'>
             welcome home with RentHub 
         </h1>
         <div className="search-bar-container">
          <div className="radio-group">
            <label className="radio-label">
              <input
                type="radio"
                value="rent"
                checked={searchType === 'rent'}
                onChange={() => setSearchType('rent')}
              />
              Rent
            </label>
            <label className="radio-label">
              <input
                type="radio"
                value="buy"
                checked={searchType === 'buy'}
                onChange={() => setSearchType('buy')}
              />
              Buy
            </label>
            <label className="radio-label">
              <input
                type="radio"
                value="pg"
                checked={searchType === 'pg'}
                onChange={() => setSearchType('pg')}
              />
              PG/Co-Living
            </label>
            <label className="radio-label">
              <input
                type="radio"
                value="plots/land"
                checked={searchType === 'plots'}
                onChange={() => setSearchType('plot')}
              />
              Plots/land
            </label>
          </div>
      <div className='search-location'>
        <input
          type="text"
          placeholder="location.."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className="btn btn-primary">Search</button>
      </div>
    </div>
    </div>
  )
}

export default Image_and_search_bar