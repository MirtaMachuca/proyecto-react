import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar img="/imagenes/logo.bmp" />
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer greeting="Zapatillas Deportivas" />}
        />
        <Route
          path="/category/:catid"
          element={<ItemListContainer greeting="Compras por categoría" />}
        />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
      <footer>
        <small>Tienda Online</small>
      </footer>
    </BrowserRouter>
  );
}

export default App;
