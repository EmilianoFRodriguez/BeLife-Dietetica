import { getFirestore, collection, doc, getDoc, getDocs, addDoc } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'
import productList from '../../Products/productsList'

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


export default async function getItemsFromDatabase() {
  const querySnapshot = await getDocs(collection(database, "products-list"))
  const documents = querySnapshot.docs;
  const dataProducts = documents.map((doc) => ({ ...doc.data(), id: doc.id }));

  return dataProducts;
}
export async function getSingleItemFromDatabase(id) {
  const productsCollection = collection(database, "products-list");
  const productRef = doc(productsCollection, id);
  const docSnapshot = await getDoc(productRef);

  return {...docSnapshot.data(), id: docSnapshot.id};
}

// export async function getSingleItemFromDatabase(idItem) {
//   const productRef = doc(database, "products-list", idItem);
//   const docSnapshot = await getDoc(productRef);

//   return {...docSnapshot.data(), id: docSnapshot.id};
// }

export async function exportData(){
  for(let item of productList){
    const collectionRef = collection(database, "products-list")
    const {id} = await addDoc(collectionRef, item)
    console.log("lista Creada", id);
  }
};
