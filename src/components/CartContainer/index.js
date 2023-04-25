import React, { useContext } from "react";
import cartContext from "../../context/cartContext";
import './style.scss';
import CounterButtons from "../Counter/CounterButtons";

export default function CartContainer() {
    const { cart } = useContext(cartContext);
    const totalPriceItem = (a, b) => {
        let total = a * b;
        return total;
    }
    
    return (
        <div className="tableContainer">
            <table className="cartList">
                <thead className="cartList_head">
                    <tr className="cartList_row">
                        <th>Producto</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Remover</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((product) => {
                        return (
                            <tr key={product.id} className="cartList_row">
                                <td>
                                    <img height={50} src={product.img} alt={product.name} />
                                </td>
                                <td>{product.name}</td>
                                <td>$ {product.price}</td>
                                <td>{product.quantity}</td>
                                <td>
                                    <button color="red">X</button>
                                </td>
                                <th>$ {totalPriceItem(product.price, product.quantity)}</th>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <div className="cartListDetail">
                <h3>El total de tu compra es de $ --,--</h3>
            </div>
        </div>
    );
}