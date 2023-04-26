import React, { createContext, useState } from 'react'

const cartContext = createContext({ cart: [] });
const Provider = cartContext.Provider;

export function CartContextProvider({ children }) {
    const [cart, setCart] = useState([]);

    function addItem(item) {
        const newCart = JSON.parse(JSON.stringify(cart));

        if (isInCart(item.id)) {
            let index = cart.findIndex((itemInCart) => itemInCart.id === item.id);
      newCart[index].quantity = newCart[index].quantity + 1;
            console.log("sima cantidad", newCart);
        } else {
            newCart.push({ ...item, quantity: 1 });
            console.log("agrega 1", newCart);
        }
        setCart([...newCart]);
    };

    function delItem(item) {
        const newCart = JSON.parse(JSON.stringify(cart));

        if (isInCart(item.id)) {
            let index = cart.findIndex((itemInCart) => itemInCart.id === item.id);
      newCart[index].quantity = newCart[index].quantity - 1;
            console.log("sima cantidad", newCart);
        } else {
            newCart.pop({ item });
            console.log("agrega 1", newCart);
        }
        setCart([...newCart]);
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
        const total = cart.reduce((acc, item) => acc + item.price, 0)
        return total;
    }

    function isInCart(id) {
        return cart.find((item) => item.id === id);
    }

    return (
        <Provider value={{ cart, setCart, addItem, delItem, isInCart, removeItemFromCart }}>
            {children}
        </Provider>
    )
}


export default cartContext;