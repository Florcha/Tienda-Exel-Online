import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, getDocs, getDoc, setDoc, doc, addDoc} from 'firebase/firestore/lite'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCsO9ZtR486hZJ2GY_HjLsJm3GaKNvBXww",
    authDomain: "ecommerce-coder-tiendaexel.firebaseapp.com",
    projectId: "ecommerce-coder-tiendaexel",
    storageBucket: "ecommerce-coder-tiendaexel.appspot.com",
    messagingSenderId: "31937901530",
    appId: "1:31937901530:web:93e5bfde64202df14886e3",
    measurementId: "G-ZLNMVMX10D"
};
  
  
initializeApp(firebaseConfig);
/*const db = getFirestore(app);*/


const PRODUCTS = [
    {
        id: 1, 
        productName:'Gel', 
        mark:'Exel',
        category: 'Facial',
        price:' 1.100',
        stock:'150',
        pictureUrl: 
        'https://www.heavenimagenes.com/heavencommerce/cbed7736-4c76-4fd0-b719-9ff071142423/images/v2/EXEL/2007151124473576_01_medium.jpg'
    },

    {
        id: 2, 
        productName:'Crema', 
        mark:'Lidherma',
        category: 'Corporal',
        price:' 2.900',
        stock:'300',
        pictureUrl: 
        'https://www.lidherma.com/thumbnails/ldh_skinbioma_facecream_450x450.jpg'
    },

    {
        id: 3, 
        productName:'Enjuague', 
        mark:'Loreal',
        category: 'Cabello',
        price:' 1.200',
        stock:'100',
        pictureUrl: 
        'https://http2.mlstatic.com/D_NQ_NP_613395-MLA32318582398_092019-W.jpg'
    },

    {  
        id: 4, 
        productName:'Shampoo', 
        mark:'Nexxus',
        category: 'Cabello',
        price:' 1.900',
        stock:'210',
        pictureUrl: 
        'https://images.ulta.com/is/image/Ulta/2049094?op_sharpen=1&resMode=bilin&qlt=85&wid=800&hei=800&fmt=jpg'
    },
];


  async function dataToFirebase() {
    PRODUCTS.forEach((item) => {     
        const newItem = doc(collection(db, "products"));

        setDoc(newItem, item).then(() => {
          console.log("Document written with ID: ", newItem.id)})
        .catch(err => {
            console.error("Error adding document: ", err);
        });
    });
}

export default dataToFirebase;