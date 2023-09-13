import React from 'react'
import { Link } from 'react-router-dom'

export default function Product({Products}) {

    return(
        <>
       {Products?.data?.map((item)=>{
        return <div key={item._id} className='col-md-2'>
            <div className='product'>
                <Link to={"/product-details/"+item._id} className='text-decoration-none bg-dark'>
                <img src={item.imageCover} alt='' className='w-100'/>
            <h6>{item.category.name}</h6>
           <p className='fw-bolder'> {item.title.split(' ').slice(0,4).join(' ')}  </p>
            <div className='d-flex justify-content-between align-items-center my-4'>
                <span>{item.price} EGP</span>
                <div>
                    <i className='fas fa-star rating-color '></i>
                    {item.ratingsAverage}
                </div>
            </div>
                </Link>
        
            <button className='btn bg-main w-100 text-white'>Add To Cart</button>
            </div>
        </div>
       })}
        </>
    )
  
}
