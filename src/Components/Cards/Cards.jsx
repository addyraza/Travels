import React from 'react'
import './Cards.css'
export default function Cards(props) {
  const {image, title, location, review, rate} = props;
  return (
    <div className='card text-center'>
      <div className="overflow">
          <img src={image} className="card-img-top" alt="img"/>
          <div className="card-body text-dark">
            <p>{location}</p>
            <a href="#" className='link'><h5 className="card-title">{title}</h5></a>
            <p className="card-text"> {review} </p>
            <hr />
            <p> {rate} </p>
          </div>
      </div>
    </div>
  )
}
