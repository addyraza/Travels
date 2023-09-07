import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.css';
function ImageSlider(props) {
    const {headings} = props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
  
    const images = [
    './California.jpg',
    './New-York-City.jpg',
    './New-Jersey.jpg',
    './Los-Angeles.jpg',
    './San-Francisco.jpg',
    './Virginia.jpg',
    './beach1.jpg',
      // Add more image URLs here
    ];
  
    return (
      <div className='slide'>
        <h1 style={{padding:"2rem"}} className='h'>Top destinations</h1>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className='over'>
            <img src={image} alt={`Image ${index + 1}`} className='image'/>
            <h3> {headings} </h3>
            <p>Tours</p>
          </div>
        ))}
      </Slider>
      </div>
    );
  }
  export default ImageSlider;