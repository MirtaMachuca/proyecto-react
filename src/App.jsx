
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';
import Carrito from "./components/Carrito";

function App() {
  return (
    <>
    <NavBar
      img="/imagenes/logo.bmp"
      carrito={<Carrito/>}
    />
    <ItemListContainer greeting="¡Hola, bienvenido a nuestra tienda online Dakota!"/>

    </>
  );
}

export default App;