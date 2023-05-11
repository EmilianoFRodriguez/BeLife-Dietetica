import { getFirestore, doc, getDoc } from 'firebase/firestore'
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


// export default async function getSingleItemFromDatabase(id) {
//     const productsCollection = collection(database, "products-list");
//     const productRef = doc(productsCollection, id);
//     const docSnapshot = await getDoc(productRef);

//     return { ...docSnapshot.data(), id: docSnapshot.id };
// }


export default async function getSingleItemFromDatabase(idItem) {
    const productRef = doc(database, "products-list", idItem);
    const docSnapshot = await getDoc(productRef);

    return { ...docSnapshot.data(), id: docSnapshot.id };
}

