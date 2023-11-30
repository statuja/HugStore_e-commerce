import React from "react";
import { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    "https://static.massimodutti.net/3/photos//2023/I/0/1/p/6625/612/500/6625612500_2_10_16.jpg?t=1684911384113&impolicy=massimodutti-itxmediumhigh&imwidth=800&imformat=chrome",
    "https://static.massimodutti.net/3/photos//2023/I/0/1/p/6625/612/500/6625612500_2_6_16.jpg?t=1684911384113&impolicy=massimodutti-itxmediumhigh&imwidth=800&imformat=chrome",
    "https://static.massimodutti.net/3/photos//2023/I/0/1/p/6625/612/500/6625612500_2_8_16.jpg?t=1684911384113&impolicy=massimodutti-itxmediumhigh&imwidth=800&imformat=chrome",
  ];
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
          <img src={images[2]} alt="" onClick={(e) => setSelectedImg(2)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>CREASED-EFFECT TUNIC DRESS</h1>
        <span className="price">€95</span>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo commodi
          illo voluptatibus. Sequi voluptatibus ad doloremque eveniet
          reprehenderit at quia possimus. Dolor incidunt iusto blanditiis atque,
          cupiditate, harum modi molestias quos animi alias ratione tempora non
          mollitia.
        </p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}> + </button>
        </div>
        <button className="add">
          <AddShoppingCartIcon />
          ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon /> ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
