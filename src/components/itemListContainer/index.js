import React, { useState, useEffect } from 'react'
import { getFirestore, collection, getDocs, doc } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'



const firebaseConfig = {
  apiKey: "AIzaSyDf_cVnTkucYdx1yVkRoCIXUwSJQnalVUI",
  authDomain: "belife-prototype.firebaseapp.com",
  projectId: "belife-prototype",
  storageBucket: "belife-prototype.appspot.com",
  messagingSenderId: "244403695824",
  appId: "1:244403695824:web:90ad4b17bcccc1c48eeed5"
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

async function getItemsFromDatabase() {
  const querySnapshot = await getDocs(collection(database, "products"))
  const documents = querySnapshot.docs;
  const dataProducts = documents.map((doc) => ({ ...doc.data(), id: doc.id }));

  return dataProducts;
}





export default function ItemListContainer() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    let promiseData = getItemsFromDatabase();
    promiseData.then((products) => setProducts(products))
  }, []);



  return (
    <div>
      <h1>PRODUCTOS</h1>
      <div>
        <ul>
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
