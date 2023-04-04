import { getFirestore, collection, getDocs } from 'firebase/firestore'
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

export default async function getItemsByCategoryFromDatabase(categoryURL) {
    const colectionRef = collection(database, "products-list");
    const q = query(colectionRef, where("category", "==", categoryURL));
    const querySnapshot = await getDocs(q);
    const documents = querySnapshot.docs;
    const dataProducts = documents.map((doc) => ({ ...doc.data(), id: doc.id }));
    
    return dataProducts;
}