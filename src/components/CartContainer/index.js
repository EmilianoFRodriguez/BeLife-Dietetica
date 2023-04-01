import React, { useContext } from "react";
import cartContext from "../../context/cartContext";
import './style.scss';

export default function CartContainer() {
    const { cart, removeItemFromCart } = useContext(cartContext);

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
                    {cart.map((user) => {
                        return (
                            <tr key={user.id} className="cartList_row">
                                <td>
                                    <img height={50} src={user.avatar} alt={user.first_name} />
                                </td>
                                <td>{user.first_name}</td>
                                <td>$ {user.price}</td>
                                <td>{user.count}</td>
                                <td>
                                    <button color="#c63224">X</button>
                                </td>
                                <th>$ --,--</th>
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