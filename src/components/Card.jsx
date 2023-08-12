
import React from 'react'

function Card(props) {

  return (

    <div className='card'>
        <img src={`${props.img}`} alt='img' className='card--image'/> 
        <div className='card--stats'>
        <img src={props.star} alt='img' className='card--star'/> 
          <span>{props.rating}</span>
          <span className='gray'>({props.reviewCount})</span>
          <span className='gray'>{props.location}</span>
        </div>
        <p className='card--title'>{props.title}</p>
        <p><b>From ${props.price}</b> / person</p>
       
    </div>
  )
}

export default Card