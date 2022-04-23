import React from 'react'
import { useState } from 'react';
import img1 from "../assets/logo.png"
import img2 from "../assets/Bell.png"
import img3 from "../assets/Information.png"
import img4 from "../assets/Settings.png"
import { Link } from 'react-router-dom';
import "./Header.css"





const Header = ({  setSearchTerm, setSearchActive }) => {


   
  
    



  return (
    <div className='head'>

    <div className='logo'>
      <img src= {img1} alt="logo"/>
      <p>Cloud Drive</p>
    </div>
        
        <div className='icons'>
          <img src= {img2} alt="logo"/>
          <img src= {img3} alt="logo"/>
          <img src= {img4} alt="logo"/>
        </div>
          
         

        <div className='login'>
          <button>
              <Link to={'/login'}>Login</Link>
          </button>
          
        </div>
    </div>
  )
}

export default Header