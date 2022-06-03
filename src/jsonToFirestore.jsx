import { initializeApp } from "firebase/app";
import { getFirestore, query, where, collection, getDocs, getDoc, doc, addDoc } from 'firebase/firestore/lite'



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
  return convertSnapshot(snapshot);
}

async function getProducts(category) {
  if (category) {
    const q = query(collection(db, 'products'), where('category', '==', category));
    const snapshot = await getDocs(q);
    return convertSnapshot(snapshot);
  } else {
    return getCollection('products');
  }
}

async function getProduct(id) {
  try {
    const documentById = doc(db, 'products', id);
    const snapshot = await getDoc(documentById);
    return { id, ...snapshot.data() };
  } catch (error) {
    console.error(error);
    return {};
  }
}

function convertSnapshot(snapshot) {
  return snapshot.docs.map(d => {
    const data = d.data();
    const id = d.id;
    return { id, ...data };
  });
}

async function saveMessage(data) {
  return addDoc(collection(db, 'messages'), data);
}

async function saveCart(data) {
  return addDoc(collection(db, 'cart'), data);
}

export { getProducts, getProduct, saveMessage, saveCart };