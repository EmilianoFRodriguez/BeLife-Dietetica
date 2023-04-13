import { useState } from "react";
import Button from "../button/Button";


export default function CounterButtons({ initial, stock }) {
    const [count, setCount] = useState(initial);

    const add = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    };

    const subtract = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    return (
        <div className="counterContainer">
            <div className="counterControl">
                <Button color="red" onTouchButton={add}>
                    -
                </Button>
                <span className="itemcount_count">{count}</span>
                <Button color="green" onTouchButton={subtract}>
                    +
                </Button>
            </div>
        </div>
    )
}


export function ButtonAdd(addToCart){

    return(
        <Button onTouchButton={() => addToCart()}>Agregar al carrito</Button>
    );
};