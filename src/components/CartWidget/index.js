import React from 'react'
import './style.scss'
import { useContext } from 'react'
import cartContext from '../../context/cartContext'


export default function CartWidget() {
    const {cart, test } = useContext(cartContext);
    const carCount = cart.length;

  return (
    <div>CartWidget</div>
  )
}
