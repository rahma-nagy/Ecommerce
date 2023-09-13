import React from 'react'
import Slider from '../Slider/Slider.jsx'
import CategorySlider from '../CategorySlider/CategorySlider'
import Products from '../Products/Products.jsx'
import ProductDetails from '../ProductDetails/ProductDetails.jsx'

export default function HomePage() {
  return (
    <>
      <Slider/>
      <CategorySlider/>
      <Products/>
    </>
  )
}
