import React from 'react';
import Slider from "react-slick";
import grocerg from '../Assets/grocery5.jpeg';
import slider2 from '../Assets/slider2.jpeg';
import grocery3 from '../Assets/grocery6.png';

function slider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false
  };
  return (
    <div className='my-3'>
     <Slider {...settings}>
      
      <img src={grocerg}  alt=''/>
      <img src={slider2}   alt=''/>
      <img src={grocery3}  alt=''/>

    </Slider>
    </div>
  )
}


export default slider;