import React from 'react';
import "./Footer.scss";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item link">
          <h1>Categories</h1>
          <Link><span>Women</span></Link>
          <Link><span>Men</span></Link>
          <Link><span>Accessories</span></Link>
          <Link><span>New Arrivals</span></Link>
        </div>
        <div className="item link">
        <h1>Links</h1>
        <Link><span>FAQ</span></Link>
        <Link><span>Pages</span></Link>
        <Link><span>Stores</span></Link>
        <Link><span>Cookies</span></Link>
        </div>
        <div className="item">
        <h1>About</h1>
          <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae nihil deserunt itaque sed aperiam minima ipsa delectus adipisci suscipit rem aliquam iusto laudantium quam saepe id impedit, asperiores voluptate iure.</span>
        </div>
        <div className="item" id="contact">
          <h1>Contact</h1>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae nihil deserunt itaque sed aperiam minima ipsa
            delectus adipisci suscipit rem aliquam iusto laudantium quam saepe id impedit, asperiores voluptate iure.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">HugStore</span>
          <span className="copyright">© Copyright 2023. All Rights Reserved</span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer