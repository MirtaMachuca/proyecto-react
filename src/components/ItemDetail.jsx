import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import cartContext from "../context/cartContext";

function ItemDetail(props) {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const navigate = useNavigate(); 

  const { price, title, img, stock, id } = props;
  const { addItem } = useContext(cartContext);

  function onSubmitCount(count) {
    addItem({ id, price, count, img });
    setIsAddedToCart(true);
  }

  return (
    <div>
      <img src={img} width="150" height="150" alt="product img" />
      <div>
        <h3>{title}</h3>
        <div>
          <p>$ {price}</p>
        </div>
      </div>
      <div>
        {isAddedToCart ? (
          <button onClick={() => navigate("/cart")}>Ver Carrito</button> 
        ) : (
          <ItemCount onSubmitCount={onSubmitCount} max={stock} />
        )}
      </div>
    </div>
  );
}

export default ItemDetail;
