import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from "../Cart/Cart";

const Navbar = () => {
const [openCart, setOpenCart] = useState(false);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
            <div className="item">
                <img src="/img/en.png" alt="flag" />
                <KeyboardArrowDownIcon/>
            </div>
            <div className="item">
                <span>EU</span>
                <KeyboardArrowDownIcon/>
            </div>
            <div className="item">
                <Link className="link" to = "/products/1">Women</Link>
            </div>
            <div className="item">
                <Link className="link" to = "/products/2">Men</Link>
            </div>
            <div className="item">
                <Link className="link" to = "/products/3">Accessories</Link>
            </div>
        </div>
        <div className="center">
            <Link className="link" to="/">HUGSTORE</Link>
        </div>
        <div className="right">
            <div className="item">
                <Link className="link" to = "/">Home</Link>
            </div>
            <div className="item">
                <Link className="link" to = "/">About</Link>
            </div>
            <div className="item">
                <Link className="link" to = "/">Contact</Link>
            </div>
            <div className="item">
                <Link className="link" to = "/">Stores</Link>
            </div>
            <div className="icons">
                <SearchIcon/>
                <PersonOutlineIcon/>
                <FavoriteBorderOutlinedIcon/>
                <div className="cartIcon" onClick={()=>setOpenCart(!openCart)}>
                   <ShoppingCartOutlinedIcon/>
                   <span>0</span>
                </div>
            </div>
        </div>
      </div>
      {openCart && <Cart/>}
    </div>
  );
};

export default Navbar;
