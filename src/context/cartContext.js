import React, { createContext, useState } from 'react'

const cartContext = createContext({ cart: [] });
const Provider = cartContext.Provider;
 
export function CartContextProvider({ children }) {
    const [cart, setCart] = useState([]);

  /*  function addItem(item, count) {
        const newCart = JSON.parse(JSON.stringify(cart));

        if (isInCart(item.id)) {
            let index = cart.findIndex((itemInCart) => itemInCart.id === item.id);
            newCart[index].count = newCart[index].count + count;
        } else {
            newCart.push({ ...item, count });
        }
        setCart(newCart);
    } */

    function addItem(item) {
        const newCart = [...cart];
        newCart.push(item);
        setCart(newCart);
    }

    function clearCart() {
        /* vaciar carrito */
    }

    function removeItemFromCart(id) {
        /* eliminar/filtrar items con id recibido */
        /* ESTO ESTÁ MALLL  */
        const newCart = JSON.parse(JSON.stringify(cart));
        newCart.pop();
        setCart(newCart);
    }

    function getCountInCart() {
        let total = 0;
        cart.forEach((item) => total + item.count);
        return total;
    }

    function isInCart(id) {
        return cart.some((item) => item.id === id);
    }

    return (
        <Provider value={ { cart, test: "ok", addItem, isInCart, removeItemFromCart } }>
            {children}
        </Provider>
    )
}

export default cartContext;