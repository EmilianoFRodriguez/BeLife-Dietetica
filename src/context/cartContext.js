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
        } else {
            newCart.push({ ...item, quantity: 1 });
        }
        setCart([...newCart]);
    };

    function delItem(item) {
        const newCart = JSON.parse(JSON.stringify(cart));

        if (isInCart(item.id)) {
            let index = cart.findIndex((itemInCart) => itemInCart.id === item.id);
            if (newCart[index].quantity > 1 ) {
                newCart[index].quantity = newCart[index].quantity - 1;
            } else {
                newCart.pop({ item });
            };
        }
        setCart([...newCart]);
    }


    function clearCart() {
        const newCart = [];
        setCart(newCart)

    }

    function removeItemFromCart(item) {
        const newCart = JSON.parse(JSON.stringify(cart));
        if (isInCart(item.id)) {
            newCart.pop({ item });
        }
        setCart([...newCart]);
    }

    function getCountInCart() {
        const total = cart.reduce((acc, item) => acc + item.price, 0)
        return total;
    }

    function isInCart(id) {
        return cart.find((item) => item.id === id);
    }

    return (
        <Provider value={{ cart, setCart, addItem, delItem, clearCart, isInCart, removeItemFromCart }}>
            {children}
        </Provider>
    )
}


export default cartContext;