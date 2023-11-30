import React, { useState, useEffect } from "react";
import "./Cart.scss";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import SignUpPopup from "../SignUpPopup/SignUpPopup";

const Cart = ({ cartItems, setCartItems, openCart, setOpenCart }) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setTotalAmount(calculateTotalAmount(cartItems));
  }, [cartItems]);

  function calculateTotalAmount(items) {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  function addToCart(item) {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      const updatedItems = cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCartItems(updatedItems);
    } else {
      const updatedItems = [...cartItems, { ...item, quantity: 1 }];
      setCartItems(updatedItems);
    }
  }

  function decreaseQuantity(id) {
    const updatedItems = cartItems.map((item) => {
      if (item.id === id) {
        const updatedQuantity = Math.max(1, item.quantity - 1);
        return { ...item, quantity: updatedQuantity };
      }
      return item;
    });
    setCartItems(updatedItems);
  }

  function removeFromCart(id) {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
  }

  function resetCart() {
    setCartItems([]);
    setTotalAmount(0);
  }

  function handleProceedToCheckout() {
    setShowPopup(true);
    setOpenCart(false);
  }

  function handleClosePopup() {
    setShowPopup(false);
    setOpenCart(true); 
  }

  return (
    <>
      {openCart && (
        <div className="cart">
          <h1>Products in your cart</h1>
          {cartItems.map((item) => (
            <div className="item" key={item.id}>
              <img src={item.img} alt="" />
              <div className="details">
                <h1>{item.title}</h1>
                <p>{item.desc.substring(0, 100)}</p>
              </div>
              <div className="quantity">
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => addToCart(item)}>+</button>
              </div>
              <div className="price"> x €{item.price}</div>
              <DeleteOutlineIcon
                className="remove"
                onClick={() => removeFromCart(item.id)}
              />
            </div>
          ))}

          <div className="total">
            <span>SUBTOTAL</span>
            <span>€{totalAmount}</span>
          </div>
          <button className="check-out" onClick={() => setShowPopup(true)}>
            PROCEED TO CHECKOUT
          </button>
          <span className="reset" onClick={resetCart}>
            Reset Cart
          </span>
        </div>
      )}

      {showPopup && (
        <SignUpPopup
          handleClosePopup={handleClosePopup}
          handleProceedToCheckout={handleProceedToCheckout}
        />
      )}
    </>
  );
};

export default Cart;

