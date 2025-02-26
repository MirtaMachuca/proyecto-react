
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/cartContext";
//import CartContainer from "./components/CartContainer";
import Cart from "./components/Cart";
import FormCheckout from "./components/FormCheckout";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
      <NavBar img={"../public/imagenes/logo.bmp"}/>

        <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:catid" element={<ItemListContainer greeting="Compras por categoría"/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/formcheckout" element={<FormCheckout/>} />

        </Routes>
        <footer class="text-white text-center py-3 mt-5">
          <small>Tienda Online &copy; 2025</small>
        </footer>

      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
