import getAsyncData, { getAsyncItemsByCategory } from "../data/getAsyncData";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer(props) {
  const [products, setProducts] = useState([]);
  const { catid } = useParams();

  useEffect(() => {
    if (catid === undefined) {
      // Cargar todos los productos si no hay categoría seleccionada
      const respuestaPromise = getAsyncData();
      respuestaPromise
        .then((respuesta) => setProducts(respuesta))
        .catch((error) => alert(error));
    } else {
      // Cargar productos filtrados por categoría
      const respuestaPromise = getAsyncItemsByCategory(catid);
      respuestaPromise
        .then((respuesta) => setProducts(respuesta))
        .catch((error) => alert(error));
    }
  }, [catid]); // Ejecutar el efecto cuando `catid` cambie

  return (
    <div>
      <ItemList greeting={props.greeting} products={products} />
    </div>
  );
}

export default ItemListContainer;
