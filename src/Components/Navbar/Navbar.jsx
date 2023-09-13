import React from 'react';
import logo from '../Assets/freshcart-logo.svg';
import { NavLink } from 'react-router-dom';
function Navbar(){
    return(
      <>
       <nav className="navbar navbar-expand-lg bg-main-light">
  <div className="container">
    <NavLink className="navbar-brand" to="/">
      <img src= {logo} alt='image'/>
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0 me-auto ">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/products">Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/categories">Categories</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/brand">Brands</NavLink>
        </li>

      </ul>
      
      <ul className="navbar-nav mb-2 mb-lg-0 ms-auto mt-2">
        <a type="button" className="btn me-3 position-relative">
  Cart <i className="fa-solid fa-cart-shopping"></i>
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
    9+
    <span className="visually-hidden">unread messages</span>
  </span>
</a>
        {/* <li className="nav-item">
          < NavLink className="nav-link active" aria-current="page" to="/">Logout</NavLink>
        </li> */}
        <li className="nav-item">
          < NavLink className="nav-link active" aria-current="page" to="/register">Register</NavLink>
        </li>
        <li className="nav-item">
          < NavLink className="nav-link active" aria-current="page" to="/login">Login</NavLink>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
      </>   
      
      );
}

export default Navbar;