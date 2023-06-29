import React from "react";
import "./List.scss";
import Card from "../Card/Card";


const List = () => {

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
    <div className='list'>
        {data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  )
}

export default List