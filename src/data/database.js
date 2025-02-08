
import { initializeApp } from "firebase/app";
import { getFirestore,collection,getDocs,doc,getDoc, query, where } from "firebase/firestore";
//import products from "./data";

const firebaseConfig = {
  apiKey: "AIzaSyAQEZ0wpsEahEYEQrZ7_e-PuxNouSzDCZ4",
  authDomain: "dhaka-ecommerce.firebaseapp.com",
  projectId: "dhaka-ecommerce",
  storageBucket: "dhaka-ecommerce.firebasestorage.app",
  messagingSenderId: "277822673002",
  appId: "1:277822673002:web:321a89174264f25b86ba13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db =getFirestore(app);

export default async function getAsyncData() {

    const collectionRef = collection(db,"products");
    const productsSnapshot = await getDocs(collectionRef)
    const documentData = productsSnapshot.docs.map( doc=>{
        return {...doc.data(),id:doc.id}
    })
    return documentData;
    
       
  }


  
export async function getAsyncItemById(itemID) {
 
    const docRef = doc(db, "products",itemID)
    const docSnapshot = await getDoc(docRef);
    const docData = docSnapshot.data();
    
    return docData;
  
    
  }
  
  export async function getAsyncItemsByCategory(catID) {

    const productsColRef =collection(db,"products");
    const q =query(productsColRef,where("category","==", catID))
    const productsSnapshot = await getDocs(q)
    const documentData = productsSnapshot.docs.map( doc=>{
      return {...doc.data(),id:doc.id}
    })
    return documentData;
  }
  
 