import { useContext } from "react";
import cartContext from "../context/cartContext";

function CartContainer() {
    const { cartItems, removeItem, getTotalPrice } = useContext(cartContext);

    return (
        <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
            {cartItems.map((item) => (
                <div key={item.id} className="flex items-center border-b border-gray-300 py-2">
                    {/* Imagen más pequeña */}
                    <img src={item.img} alt={item.title} className="w-12 h-12 object-cover rounded" />
                    <div className="flex-1 ml-3 text-sm">
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-gray-600">💲{item.price} | Cantidad {item.count}</p>
                    </div>
                    <button 
                        onClick={() => removeItem(item.id)} 
                        className="bg-red-500 text-white text-xs px-2 py-1 rounded hover:bg-red-600 transition"
                    >
                        ❌ Eliminar
                    </button>
                </div>
            ))}

            <div className="text-right mt-2 text-sm font-bold">
                Total: ${getTotalPrice()}
            </div>
        </div>
    );
}

export default CartContainer;
