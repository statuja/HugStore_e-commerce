import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from "../Cart/Cart";
import SignUpPopup from "../SignUpPopup/SignUpPopup";

const Navbar = ({ cartItems, setCartItems }) => {
  const [openCart, setOpenCart] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [language, setLanguage] = useState(false);
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleLanguage = () => {
    setLanguage(!language);
  };

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
         {/*  <div className="item">
            <img src="/img/en.png" alt="flag" />
            <KeyboardArrowDownIcon />
          </div> */}
          <div className="select item">
            <select value={language} onChange={handleLanguage}>
              <option value="ENG">EN</option>
              <option value="GER">GER</option>
              <option value="RUS">RUS</option>
              <option value="FR">FR</option>
              <option value="JAP">IT</option>
              <option value="SP">SP</option>
            </select>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              New in
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/1">
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              Men
            </Link>
          </div>
         
        </div>
        <div className="center">
          <Link className="link" to="/">
            HUGSTORE
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              Home
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              About
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Contact
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Stores
            </Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <div className="personal-icon" onClick={() => setShowPopup(true)}>
              <PersonOutlineIcon />
            </div>
            <FavoriteBorderOutlinedIcon />
            <div className="cartIcon" onClick={() => setOpenCart(!openCart)}>
              <ShoppingCartOutlinedIcon />
              <span>{totalQuantity}</span>
            </div>
          </div>
        </div>
      </div>
      {openCart && (
        <Cart
          cartItems={cartItems}
          setCartItems={setCartItems}
          openCart={openCart}
          setOpenCart={setOpenCart}
        />
      )}
      {showPopup && (
        <SignUpPopup showPopup={showPopup} setShowPopup={setShowPopup} />
      )}
    </div>
  );
};

export default Navbar;
