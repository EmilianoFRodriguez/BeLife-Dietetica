import React, { createContext, useState } from 'react'

const cartContext = createContext({ cart: [] });
const Provider = cartContext.Provider;

export function cartContextProvider({ children }) {
    const [cart, setCart] = useState([]);

    return (
        <Provider value={ { cart, test:"ok" } }>
            {children}
        </Provider>
    )
}

export default cartContext;