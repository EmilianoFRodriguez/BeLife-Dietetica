import './style.scss'
import React, { useState, useEffect } from 'react'
import getItemsFromDatabase from '../firebase/configFirestore';
import { Link } from 'react-router-dom';
import Button from '../button/Button';

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getItemsFromDatabase()
      .then((products) => setProducts(products))
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
              <div className='imgContainer'>
                <img src={producto.img} alt={producto.name} />
              </div>
              <p>{producto.name} x { producto.unit } grs.</p>
              <p>{`$${producto.price}`}</p>
              <Link to={`/detalle/${producto.id}`}>
                <button>Detalle</button>
              </Link>
              <Button>Agregar al carrito</Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
