import React from 'react';
import "./heading.scss";

const Head = ({label,page}) => {
  return (
    <div className='header'>
      <div className="pg">{page}</div>
      <div className="head">

        <h1>{label}</h1>
      </div>
    </div>
    
  )
}

export default Head