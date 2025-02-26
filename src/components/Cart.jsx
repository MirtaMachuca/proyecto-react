import cartContext from "../context/cartContext";
import { useContext } from "react";
import CartContainer from "./CartContainer";  // Corregido el nombre del import
import { Link } from "react-router-dom";

function Cart() {
    const { cartItems, getTotalPrice, clearCart } = useContext(cartContext);

    return (
        <>
            <div className="container text-center my-4">
                <h1 className="fw-bold">Carrito de Compras</h1>
                {cartItems.length > 0 && (
                   <button 
                        onClick={clearCart} 
                        className="mt-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                    >
                        🗑 Vaciar carrito
                    </button>
                )}
            </div>
            <CartContainer />

            {cartItems.length === 0 ? (
               <p className="text-gray-500 text-center">Tu carrito está vacío.</p>
            ) : (
                <div className="text-center mt-4">
                    <p className="font-bold">Total: ${getTotalPrice()}</p>
                    <Link to="/formcheckout">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                            🛒 Finalizar Compra
                        </button>
                    </Link>
                </div>
            )}
        </>
    );
}

export default Cart;
