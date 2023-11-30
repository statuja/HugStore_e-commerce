import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import Cart from "./components/Cart/Cart";
import React, {useState} from 'react';
import "./App.scss";

const Layout = () => {

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      img: "/img/1.jpg",
      img2: "/img/2.jpg",
      title: "Long Sleeve graphic T-shirt",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, nisi. Eveniet ipsa, omnis quae quibusdam inventore saepe reprehenderit quos odit aliquam laboriosam porro, cum blanditiis deleniti natus sint, libero quidem?",
      isNew: true,
      oldPrice: 19,
      price: 12,
      quantity: 1,
    },
    {
      id: 2,
      img: "/img/3.jpg",
      title: "Coat",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, nisi. Eveniet ipsa, omnis quae quibusdam inventore saepe reprehenderit quos odit aliquam laboriosam porro, cum blanditiis deleniti natus sint, libero quidem?",
      isNew: true,
      oldPrice: 95,
      price: 69,
      quantity: 1,
    },
  ]);


  
  return (
    <div className="app">
      <Navbar cartItems={cartItems} setCartItems={setCartItems} />
      <Outlet/>
      <Footer/>
      <Cart cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  

  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/products/:id",
        element: <Products/>,
      },
      {
        path: "/product/:id",
        element: <Product/>,
      },

    ]
  },

 
]);


function App() {
  return <div>
     <RouterProvider router={router} />
  </div>;
}

export default App;
