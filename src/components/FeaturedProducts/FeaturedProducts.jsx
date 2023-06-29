import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";

const FeaturedProducts = ({type}) => {
  const data = [
    {
      id: 1,
      img: "/img/1.jpg",
      img2: "/img/2.jpg",
      title: "Long Sleeve graphic T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "/img/3.jpg",
      title: "Coat",
      isNew: true,
      oldPrice: 95,
      price: 69,
    },
    {
      id: 3,
      img: "/img/4.jpg",
      title: "Skirt",
      oldPrice: 39,
      price: 25,
    },
    {
      id: 4,
      img: "/img/5.jpg",
      title: "Hat",
      oldPrice: 19,
      price: 12,
    },
  ];

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto non
          optio quisquam aliquid maiores numquam corrupti expedita! Expedita
          provident consequuntur sit exercitationem quod repellat odit at,
          numquam quae atque autem!
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => 
        <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
