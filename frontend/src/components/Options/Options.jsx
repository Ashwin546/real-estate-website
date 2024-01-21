// Options.js

import React from 'react';
import './Options.css'; // Import the CSS file for styling

function Options({ data }) {
  return (
    <div className='option-container'>
      <img src={data.imagename} className='option-image' />
      <div className='option-name'>{data.point}</div>
    </div>
  );
}

export default Options;
