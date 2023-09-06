import React from 'react'
// import './Cards.css'
export default function Cards(props) {
  const {image, title, location, review, rate} = props;
  return (
    <div className='cards text-center'>
      <div className="overflow">
          <img src={image} className="card-img-top" alt="img"/>
          <div className="card-body text-dark">
            <p>{location}</p>
            <h5 className="card-title">{title}</h5>
            <p className="card-text"> {review} </p>
            <hr />
            <p> {rate} </p>
            <a href="#" className="btn btn-outline-success">Go somewhere</a>
          </div>
      </div>
    </div>
  )
}
