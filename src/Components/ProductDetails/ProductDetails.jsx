import React, { useEffect , useState } from 'react'
import { useParams } from 'react-router-dom'
import { baseUrl } from '../utils/baseUrl'
import axios from 'axios'

export default function ProductDetails() {
   let {id}= useParams()
   const [Product,setProduct]= useState([])
   const getProduct =async ()=>{
     
   let {data} = await axios.get(`${baseUrl}/products/${id}`)
       setProduct(data.data)
   }
   useEffect(
     ()=>{
       getProduct()
     }, []);
  return (
    <>
      <div className='container '>
        <div className='row'>
         <div className='col-md-3'>
         <img src={Product.imageCover} className='w-100' alt=''/>
         </div>
         <div className='col-md-9'>
               <h6>{Product.title}</h6>
               <p>{Product.description}</p>
         </div>
        </div>
      </div>
    </>
  )
}
