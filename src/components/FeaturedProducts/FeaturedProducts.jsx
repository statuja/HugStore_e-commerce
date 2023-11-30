import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";

const FeaturedProducts = ({type}) => {
  const data = [
    {
      id: 1,
      img: "https://static.massimodutti.net/3/photos//2023/I/0/1/p/5177/727/250/5177727250_2_6_16.jpg?t=1684942149269&impolicy=massimodutti-itxmediumhigh&imwidth=800&imformat=chrome",
      img2: "https://static.massimodutti.net/3/photos//2023/I/0/1/p/5177/727/250/5177727250_2_7_16.jpg?t=1684942149269&impolicy=massimodutti-itxmediumhigh&imwidth=800&imformat=chrome",
      title: "Semi-sheer shirt with chest detailing",
      isNew: true,
      oldPrice: 95,
      price: 75,
    },
    {
      id: 2,
      img: "https://static.massimodutti.net/3/photos//2023/I/0/1/p/9410/953/400/9410953400_2_5_16.jpg?t=1687950946357&impolicy=massimodutti-itxmediumhigh&imwidth=800&imformat=chrome",
      img2: "https://static.massimodutti.net/3/photos//2023/I/0/1/p/9410/953/400/9410953400_2_7_16.jpg?t=1687950951251&impolicy=massimodutti-itxmediumhigh&imwidth=800&imformat=chrome",
      title: "Crochet knit top",
      isNew: true,
      oldPrice: 69,
      price: 49,
    },
    {
      id: 3,
      img: "https://12storeez.store/cdn/shop/files/644e95749d13c-27-04-202331558_720x.jpg?v=1687536413",
      title: "Linen pleated shorts",
      oldPrice: 65,
      price: 45,
    },
    {
      id: 4,
      img: "https://12storeez.store/cdn/shop/files/643028989d60d-03-04-202314126_720x.jpg?v=1684935160",
      title: "Wide leg trousers",
      oldPrice: 79,
      price: 59,
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
