import React,{useState} from 'react'
import './image_and_search_bar.css'
function Image_and_search_bar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('rent');

  const handleSearch = () => {
    
    console.log(`Searching for ${searchType}: ${searchQuery}`);
    // Implement your search logic here
  };
  return (
    <div className='image'> 
         <h1 className='para'>
             your dream rental,just a click away.
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
                onChange={() => setSearchType('plots')}
              />
              Plots/land
            </label>
          </div>
      <div className='search-location'>
        <input
          type="text"
          placeholder="location.."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className="btn btn-primary">Search</button>
      </div>
    </div>
    </div>
  )
}

export default Image_and_search_bar