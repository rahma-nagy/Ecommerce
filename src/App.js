import React from 'react';
import {Route, RouterProvider, Routes, createBrowserRouter} from 'react-router-dom';
import MainLayout from './Layouts/MainLayout.jsx';
import Products from './Components/Products/Products.jsx';
import Product from './Components/Product/Product.jsx';
import HomePage from './Components/Pages/HomePage.jsx';
import ProductDetails from './Components/ProductDetails/ProductDetails.jsx';
import Register from './Components/Register/Register.jsx';
import Login from './Components/Login/Login.jsx';

export default function App() {
  // let routes= createBrowserRouter([
  //   {
  //     path:'',
  //     element: <MainLayout/>,
  //     children: [
  //       {index:true, element:<HomePage/>},
  //       {path:'products', element:<Products/>},
  //     ]
  //   }
  // ]) 

  return (
    <>
    <MainLayout/>
     <Routes >
     <Route path='/'  element= {<HomePage/>}/>
      <Route path='products'  element= {<Products/>}/>
      <Route path='product-details/:id'  element= {<ProductDetails/>}/>
      <Route path='register'  element= {<Register/>}/>
      <Route path='login'  element= {<Login/>}/>




       
     </Routes>

    </>
  )
}
