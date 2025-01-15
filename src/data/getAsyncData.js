
import products from "./data"

function getAsyncData() {
  console.log("Solicitando datos")  
  const promiseData = new Promise( (resolve, reject) => { 
    const errorFatal = false;

    setTimeout( () => {
      if (errorFatal) reject("Algo salió mal!!!!")
      console.log("Promesa Terminada")
      resolve(products)
    }, 500)     
  })

  console.log("Promesa generada.")

  return promiseData;
}
/*
export function getAsyncItemById(itemID) {
  console.log("Solitando producto id....", itemID)
  
  const promiseData = new Promise( (resolve) => {    

    setTimeout( () => {      
      const requestedProduct = products.find( (item) => item.id === Number(itemID))
      // TODO: validar si encontramos un producto -> si no es así, rechazamos la promesa
      resolve(requestedProduct)
    }, 500)     
  })

  console.log("Promesa generada.")

  return promiseData;
}
*/

export function getAsyncItemById(itemID) {
  //console.log("Solicitando producto id...", itemID);
  
  const promiseData = new Promise((resolve, reject) => {
    setTimeout(() => {
      const requestedProduct = products.find((item) => item.id === Number(itemID));
      
      if (requestedProduct) {
        resolve(requestedProduct); // Si encontramos el producto, resolvemos la promesa.
      } else {
        reject(new Error(`Producto con ID ${itemID} no encontrado`)); // Si no lo encontramos, rechazamos la promesa.
      }
    }, 500);
  });

  //console.log("Promesa generada.");

  return promiseData;
}


export function getAsyncItemsByCategory(catID) {
  
  const promiseData = new Promise((resolve, reject) => {
    setTimeout(() => {
      const requestedProducts = products.filter(
        (item) => item.category.toLowerCase() === catID.toLowerCase()
      );

      if (requestedProducts.length > 0) {
        resolve(requestedProducts);
      } else {
        reject(`No se encontraron productos para la categoría: ${catID}`);
      }
    }, 500);
  });


  return promiseData;
}


  

export default getAsyncData;
