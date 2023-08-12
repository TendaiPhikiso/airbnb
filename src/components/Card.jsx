
import React from 'react'

function Card(props) {

  return (
    <div className='card'>
      

        <img src={`${props.img}`} alt='img' className='card--image'/> 
        <div className='card--stats'>
        {/* <img src={props.img} alt='img' className='card--image'/>  */}
        <span>{props.rating}</span>
        <span className='gray'>({props.reviewCount})</span>
        <span className='gray'>{props.location}</span>
        </div>
        <p>{props.title}</p>
        <p>From ${props.price} / person</p>
       

    </div>
  )
}

export default Card