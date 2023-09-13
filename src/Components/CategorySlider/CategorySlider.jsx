import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {baseUrl} from '../utils/baseUrl.js';
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
 //import "slick-carousel/slick/slick-theme.css";

export default function CategorySlider() {
  const [categories,setCategories]= useState([])
  const getAllCategories =async ()=>{
     await axios.get(`${baseUrl}/categories`).then((res)=>{
      setCategories(res.data)

    })
  }

  console.log(categories);

  useEffect(
    ()=>{
      getAllCategories()

    }, []);

    var settings = {
      //dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      arrows:false,
      autoplay: true
    };


  return (
    <>
    <div className='my-5 container'>
      <h3>Shop Popular Categories</h3>
     <Slider {...settings} autoplaySpeed={3000}>
      {categories?.data?.map((item)=>{
        return <div key={item}>
          <img src={item.image} className='w-100' height={250} alt=''/>
          <h6>{item.name}</h6>
        </div>

      })}
      
    </Slider>
    </div>
    </>
  )
}
