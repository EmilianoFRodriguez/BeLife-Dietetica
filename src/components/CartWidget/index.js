import React, { useContext } from 'react'
import { BsCart4 } from 'react-icons/bs'
import './style.scss'
import cartContext from '../../context/cartContext'


export default function CartWidget() {
  const { cart, test } = useContext(cartContext);
  const cartCount = cart.length;
  console.log("Estas en cart widget", test);

  return (
    <div className="cart-widget">
      <div>
        <BsCart4 className="icon" />
        <span className="badge">{cartCount}</span>
      </div>
    </div>
  );
}
