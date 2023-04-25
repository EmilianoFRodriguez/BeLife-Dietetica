import React, { createContext, useState } from 'react'

const cartContext = createContext({ cart: [] });
const Provider = cartContext.Provider;

export function CartContextProvider({ children }) {
    const [cart, setCart] = useState([]);

    // function addItem(item) {
    //     const newCart = JSON.parse(JSON.stringify(cart));
    //     let id = item.id;

    //     if (isInCart(item.id)) {
    //         setCart(
    //             newCart.map((item) => {
    //                 if (item.id === id) {
    //                     return { ...item, quantity: item.quantity + 1 }
    //                 } else {
    //                     return item;
    //                 }
    //             })
    //         );
    //     } else {
    //         return setCart([newCart, { ...item, quantity: 1 }])
    //     }
    // };

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
    }

    // const addItem = (item) => {
    //     const newCart = JSON.parse(JSON.stringify(cart));
    //     const isInCart = newCart.find((itemInCart) => itemInCart.id === item.id);

    //     if(isInCart){
    //         setCart(newCart.map((itemInCart) => (itemInCart.id === item.id ?
    //             { ...item, quanty: item.quanty + 1 }: item)));
    //     } else{
    //         setCart([newCart, item]);
    //     }
    // };


    /*function addItem(item) {
        const newCart = [...cart];
        newCart.push(item);
        setCart(newCart);
    }*/

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
        <Provider value={{ cart, setCart, addItem, isInCart, removeItemFromCart }}>
            {children}
        </Provider>
    )
}


export default cartContext;