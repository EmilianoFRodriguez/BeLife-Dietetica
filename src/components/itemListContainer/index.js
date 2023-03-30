import './style.scss'
import React, { useState, useEffect } from 'react'
import getItemsFromDatabase from '../firebase/configFirestore';


export default function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let promiseData = getItemsFromDatabase();
    promiseData.then((products) => setProducts(products))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);



  return (
    <div className='productsContainer'>
      <div className='titleContainer'>
        <h2>PRODUCTOS</h2>
      </div>
      <div className='itemListContainer'>
        <ul className='itemList'>
          {loading && <li>Cargando . . .</li>}
          {error && <li>ERROR 404</li>}
          {products.map((producto) => (
            <li key={producto.id}>
              <img src={producto.img} alt={producto.name} />
              <p>{producto.name}</p>
              <p>{`$${producto.price}`}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
