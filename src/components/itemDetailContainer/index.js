import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom';
import getSingleItemFromDatabase from '../firebase/firestoreGetSingle';


export default function ItemDetailContainer() {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const params = useParams();
    const idProduct = params.idProduct;

    useEffect(() => {
        getSingleItemFromDatabase(idProduct)
            .then((productSingle) => {setProduct(productSingle)})
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, []);
    console.log("producto", product);
    return (
        <div className='productsContainer'>
            <div className='titleContainer'>
                <h2>DETALLE DEL PRODUCTO</h2>
            </div>
            <div className='itemDetailContainer'>
                <ul className='itemDetail'>
                    {loading && <li>Cargando . . .</li>}
                    {error && <li>ERROR 404</li>}
                    <li key={product.id}>
                        <div className='imgContainer'>
                            <img src={product.img} alt={product.name} />
                        </div>
                        <p>{product.name}</p>
                        <p>{`$${product.price}`}</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}
