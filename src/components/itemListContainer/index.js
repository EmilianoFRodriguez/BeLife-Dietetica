import React, { useState, useEffect } from 'react'
import getItemsFromDatabase from '../firebase/configFirebase';


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
    <div>
      <h1>PRODUCTOS</h1>
      <div>
        <ul>
          {loading && <li>Cargando . . .</li>}
          {error && <li>ERROR 404</li>}
          {products.map((producto) => (
            <li key={producto.id}>
              <img src={producto.img} alt={producto.name} />
              <h4>{producto.name}</h4>
              <h4>{`$${producto.price}`}</h4>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
