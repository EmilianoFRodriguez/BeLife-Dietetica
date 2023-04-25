import React, { useContext } from 'react'
import { BsCart4 } from 'react-icons/bs'
import './style.scss'
import cartContext from '../../context/cartContext'


export default function CartWidget() {
  const { cart } = useContext(cartContext);
  const cartCuantity = cart.reduce((acc, product) => {
    return acc + product.quantity;
  }, 0);

  return (
    <div className="cart-widget">
      <div>
        <BsCart4 className="icon" />
        <span className="badge">{cartCuantity}</span>
      </div>
    </div>
  );
}
