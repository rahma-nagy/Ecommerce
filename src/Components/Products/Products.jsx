import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { baseUrl } from '../utils/baseUrl';
import Product from '../Product/Product';

export default function Products() {
    const [Products,setProducts]=React.useState([])
    const getAllProducts =async ()=>{
      
     await axios.get(`${baseUrl}/products`).then((res)=>{

        setProducts(res.data)

      })
    
    }
        console.log(Products);

    useEffect(
      ()=>{
        getAllProducts()
  
      }, []);  
  return (
    <>
    <div className='container'>
        <div className='row'>
       <Product Products={Products} />
        </div>
    </div>
    </>
  )
}
