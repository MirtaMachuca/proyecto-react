
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./App.css";
import NavBar from "./components/NavBar";
import Greeting from './components/Greeting';
import Carrito from "./components/Carrito";

function App() {
  const titulo = "Clase 3 - JSX";
  const userFavoriteColor = "rgb(255, 50, 80)";
  

  return (
    <>
    <NavBar
      img="/imagenes/logo.bmp"
      carrito={<Carrito/>}
    />
   <div>
      <Greeting props="¡Hola, bienvenido a nuestra tienda online Dakota!" />
    </div>
   
    </>
  );
}

export default App;