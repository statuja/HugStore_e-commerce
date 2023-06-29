import React from 'react';
import './Cart.scss';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


const Cart = () => {
    const data=[ 
        {
        id: 1,
        img: "/img/1.jpg",
        img2: "/img/2.jpg",
        title: "Long Sleeve graphic T-shirt",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, nisi. Eveniet ipsa, omnis quae quibusdam inventore saepe reprehenderit quos odit aliquam laboriosam porro, cum blanditiis deleniti natus sint, libero quidem?",
        isNew: true,
        oldPrice: 19,
        price: 12,
      }, 
      {
        id: 2,
        img: "/img/3.jpg",
        title: "Coat",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, nisi. Eveniet ipsa, omnis quae quibusdam inventore saepe reprehenderit quos odit aliquam laboriosam porro, cum blanditiis deleniti natus sint, libero quidem?",
        isNew: true,
        oldPrice: 95,
        price: 69,
      },
    ];

  return (
    <div className='cart'>
        <h1>Products in your cart</h1>
        {data.map((item)=>(
            <div className="item" key={item.id}>
                <img src={item.img} alt="" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc.substring(0, 100)}</p>
                </div>
                <div className="price">
                    1 x €{item.price}
                </div>
                <DeleteOutlineIcon className='delete'/>
            </div>
        ))}
        <div className="total">
            <span>SUBTOTAL</span>
            <span>€199</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className="reset">Reset Cart</span>
    </div>
  )
}

export default Cart