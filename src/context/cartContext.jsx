import { createContext, useState } from "react";

const cartContext = createContext({ cartItems: [] });

export function CartContextProvider(props) {
  const [cartItems, setCartItems] = useState([]);

  function getTotalPrice() {
    return cartItems.reduce((total, item) => total + item.count * item.price, 0);
  }

  function removeItem(id) {
    setCartItems(cartItems.filter((item) => item.id !== id));
  }

  function addItem({ price, id, title, img, count }) {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === id ? { ...item, count: item.count + count } : item
        );
      } else {
        return [...prevItems, { id, title, img, count, price }];
      }
    });
  }

  function countItemsInCart() {
    return cartItems.reduce((total, item) => total + item.count, 0);
  }

  function clearCart() {
    setCartItems([]); // Vacía el carrito
  }

  return (
    <cartContext.Provider
      value={{
        cartItems,
        countItemsInCart,
        addItem,
        removeItem,
        getTotalPrice,
        clearCart, 
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
}

export default cartContext;
