import { initializeApp } from "firebase/app";
import { getFirestore, query, where, collection, getDocs, getDoc, doc } from 'firebase/firestore/lite'



const firebaseConfig = {
  apiKey: "AIzaSyCsO9ZtR486hZJ2GY_HjLsJm3GaKNvBXww",
  authDomain: "ecommerce-coder-tiendaexel.firebaseapp.com",
  projectId: "ecommerce-coder-tiendaexel",
  storageBucket: "ecommerce-coder-tiendaexel.appspot.com",
  messagingSenderId: "31937901530",
  appId: "1:31937901530:web:93e5bfde64202df14886e3",
  measurementId: "G-ZLNMVMX10D"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCollection(value) {
  const collectionData = collection(db, value);
  const snapshot = await getDocs(collectionData);
  return snapshot.docs.map(doc => doc.data());
}

async function getProducts(category) {
  if (category) {
    const q = query(collection(db, 'products'), where('category', '==', category));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => doc.data());
  } else {
    return getCollection('products');
  }
}

async function getProduct(id) {
  const documentByld = doc(db, 'products', id);
    const snapshot = await getDoc(documentByld);
    return snapshot.data();
}

export { getProducts, getProduct };
