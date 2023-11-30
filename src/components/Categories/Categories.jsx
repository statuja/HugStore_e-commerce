import React from "react";
import "./Categories.scss";
import {Link} from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://static.massimodutti.net/3/cms/assets/uploads/wNewCode14_6.jpg?impolicy=massimodutti-itxmediumhigh&imwidth=2300&imformat=chrome"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">Sale</Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://static.massimodutti.net/3/cms/assets/uploads/wEditDesktopSeasons11_1.jpg?impolicy=massimodutti-itxmediumhigh&imwidth=2300&imformat=chrome"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">Women</Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            src="https://static.massimodutti.net/3/cms/assets/uploads/wEditDesktopSulMare21_1.jpg?impolicy=massimodutti-itxmediumhigh&imwidth=2100&imformat=chrome"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">New Collection</Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://images.pexels.com/photos/10679218/pexels-photo-10679218.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <button>
            <Link className="link" to="/products/1">Men</Link>
          </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="https://static.massimodutti.net/3/cms/assets/uploads/wEditDesktopBlueParadise21_1.jpg?impolicy=massimodutti-itxmediumhigh&imwidth=2300&imformat=chrome"
                alt=""
              />
              <button>
            <Link className="link" to="/products/1">Accessories</Link>
          </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://static.massimodutti.net/3/photos//2023/I/1/1/p/1722/150/700/01/1722150700_7_1_16.jpg?t=1685955012503&impolicy=massimodutti-itxmediumhigh&imwidth=1600&imformat=chrome"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">Shoes</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
