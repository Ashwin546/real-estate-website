import React, { useState } from 'react';
import './SearchBar.css'; // Import your CSS file
import { usePropertyContext } from '../../context/PropertyContextProvider';

const SearchBar = () => {
    const [search,setSearch]=useState('')
    const {getProperties}=usePropertyContext();
    const handle=(e)=>{
        e.preventDefault();
        if(search===''){
            return (
                console.log('please enter a location')
            )
        }
        getProperties({location:search});
    }
    return (
        <div className="search-container">
            <input type="text" className="search-bar" placeholder="Search location ..." value={search}
               onChange={(e)=>(setSearch(e.target.value))}
            />
            <button className="search-button" onClick={handle}>Search</button>
        </div>
    );
};

export default SearchBar;
