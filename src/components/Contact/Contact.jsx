import React from 'react';
import { Link } from "react-router-dom";
import "./Contact.scss";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Contact = () => {
  return (
    <div className="contact">
        <div className="wrapper">
            <span>BE IN TOUCH WITH US</span>
            <div className="mail">
                <input type="email" placeholder='Enter your e-mail...'/>
                <button>JOIN US</button>
            </div>
            <div className="icons">
              <Link className='link'><FacebookIcon/></Link>
              <Link className='link'><InstagramIcon/></Link>
              <Link className='link'><TwitterIcon/></Link>
              <Link className='link'><GoogleIcon/></Link>
              <Link className='link'><PinterestIcon/></Link>
            </div>
        </div>
    </div>
  )
}

export default Contact