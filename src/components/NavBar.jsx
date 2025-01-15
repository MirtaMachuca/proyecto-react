import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./NavBar.css";

export default function NavBar({ img }) {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
      
        <NavLink className="navbar-brand" to="/">
          <img
            src={img}
            alt="Logo Dhaka"
            className="navbar-brand-logo"
            style={{ height: "40px" }} // Ajusta el tamaño del logo
          />
        </NavLink>

        {/* Botón de colapso para dispositivos pequeños */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links de navegación */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Inicio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/item">Detalle</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/Adidas">Adidas</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/Under">Under</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/Nike">Nike</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/Topper">Topper</NavLink>
            </li>
          </ul>

          {/* Widget del carrito */}
          <CartWidget />
        </div>
      </div>
    </nav>
  );
}
