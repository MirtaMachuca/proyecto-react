import { useContext, useState } from "react";
import cartContext from "../context/cartContext";
import { createBuyOrder } from "../data/database";
import { Link } from "react-router-dom";

function FormCheckout() {
  const { getTotalPrice, clearCart } = useContext(cartContext);
  const [formDisplay, setFormDisplay] = useState(true);
  const [orderID, setOrderID] = useState(null);

  const [userData, setUserData] = useState({
    username: "",
    surname: "",
    email: "",
  });

  function onInputChange(evt) {
    setUserData({
      ...userData,
      [evt.target.name]: evt.target.value,
    });
  }

  async function handleCheckout(evt) {
    evt.preventDefault();

    const orderData = {
      buyer: userData,
      total: getTotalPrice(),
      date: new Date(),
    };

    const newOrderID = await createBuyOrder(orderData);

    if (newOrderID) {
      setOrderID(newOrderID);
      setFormDisplay(false);
      clearCart();
    }
  }

  return (
    <>
      {formDisplay ? (
        <div>
          <h1>Complete el formulario para finalizar la compra</h1>
          <form onSubmit={handleCheckout}> 
            <div style={{ display: "flex", marginBottom: 8 }}>
              <label style={{ width: "100px", marginRight: 4 }}>Nombre</label>
              <input name="username" type="text" onChange={onInputChange} required />
            </div>

            <div style={{ display: "flex", marginBottom: 8 }}>
              <label style={{ width: "100px", marginRight: 4 }}>Apellido</label>
              <input name="surname" type="text" onChange={onInputChange} required />
            </div>

            <div style={{ display: "flex", marginBottom: 8 }}>
              <label style={{ width: "100px", marginRight: 4 }}>Email</label>
              <input name="email" type="email" onChange={onInputChange} required />
            </div>

            <button type="submit" disabled={!userData.username || !userData.surname || !userData.email}>
              Enviar
            </button>
          </form>
        </div>
      ) : (
        <div>
          <h1>Compra Finalizada</h1>
          <p>¡Gracias {userData.username.toUpperCase()} {userData.surname.toUpperCase()} por su compra!</p>
          <p>Número de orden: {orderID}</p>
          <Link to="/"><button>Seguir comprando</button></Link>
        </div>
      )}
    </>
  );
}

export default FormCheckout;
