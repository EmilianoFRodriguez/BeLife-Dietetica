import { useState , useContext } from "react";
import cartContext from "../../context/cartContext";
import Button from "../button/Button";


export default function CounterButtons({ initial, addToCart }) {
    const [count, setCount] = useState(initial);


    const subtract = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    };

    return (
        <div className="counterContainer">
            <div className="counterControl">
                <Button color="red" onTouchButton={subtract}>
                    -
                </Button>
                <span className="itemcount_count">{count}</span>
                <Button color="green" onTouchButton={() => addToCart()}>
                    +
                </Button>
            </div>
        </div>
    )
}


export function ButtonAdd({addToCart}){

    return(
        <Button onTouchButton={() => addToCart()}>Agregar al carrito</Button>
    );
};

export function ButtonDel({delToCart}){

    return(
        <Button onTouchButton={() => delToCart()}>Eliminar</Button>
    );
};

export function ButtonClear({clearCart}){

    return(
        <Button onTouchButton={() => clearCart()}>Vaciar Carrito</Button>
    );
};

export function ButtonRemoveItem({removeItemFromCart}){

    return(
        <Button onTouchButton={() => removeItemFromCart()}>X</Button>
    );
};