import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom';
import getSingleItemFromDatabase from '../firebase/firestoreGetSingle';
import cartContext from '../../context/cartContext';
import './style.scss'
import { ButtonAdd, ButtonDel } from '../Counter/CounterButtons';

export default function ItemDetailContainer() {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const params = useParams();
    const idProduct = params.idProduct;

    useEffect(() => {
        getSingleItemFromDatabase(idProduct)
            .then((productSingle) => { setProduct(productSingle) })
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, []);


    const { addItem, delItem } = useContext(cartContext);

    function addToCart() {
        alert(`Agregaste ${product} al carrito`);
        addItem(product);
    };
    function delToCart() {
        alert(`Eliminaste ${product} del carrito`);
        delItem(product);
    };
    
    const unity = (product.unity > 100) ? `${product.unit} grs.` : `${product.unit} Unidades.`;

    return (
        <div className='itemDetailContainer'>
            <ul className='itemDetail'>
                {loading && <h3>Cargando . . .</h3>}
                {error && <h3>ERROR 404</h3>}
                {<li key={product.id}>
                    <div className='imgContainer'>
                        <img src={product.img} alt={product.name} />
                    </div>
                    <div className='detailContainer'>
                        <p>{product.name} x { unity }</p>
                        <p>{product.brand}</p>
                        <p>{product.category}</p>
                        <p>{`$${product.price}`}</p>
                    </div>
                    <ButtonAdd addToCart={() => addToCart(product)} />
                    <ButtonDel delToCart={() => delToCart(product)} />
                </li>}
            </ul>
        </div>
    )
}
