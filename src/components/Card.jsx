
import React from 'react'

function Card(props) {
  let badgeText 
  if (props.item.openSpots === 0){
    badgeText = " SOLD OUT"
  }else if (props.item.location === "Online"){
    badgeText = "ONLINE"
  }

  return (

    <div className='card'>
      {badgeText && <div className='card--badge'>{badgeText} </div>}

        <img src={`${props.item.img}`} alt='img' className='card--image'/> 
        <div className='card--stats'>
        <img src={props.item.star} alt='img' className='card--star'/> 
          <span>{props.item.stats.rating}</span>
          <span className='gray'>({props.item.stats.reviewCount})</span>
          <span className='gray'>{props.item.location}</span>
        </div>
        <p className='card--title'>{props.item.title}</p>
        <p><b>From ${props.item.price}</b> / person</p>
       
    </div>
  )
}

export default Card