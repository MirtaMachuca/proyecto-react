import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar({ img }) {
    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    <img
                        src={img}
                        //alt="Logo Dhaka"
                        className="navbar-brand-logo"
                        style={{ height: "40px" }}
                    />
                </NavLink>

                
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

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Inicio</NavLink>
                        </li>
                       
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/category/adidas">Adidas</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/category/under">Under</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/category/nike">Nike</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/category/topper">Topper</NavLink>
                        </li>
                    </ul>
                    <Link to="/cart"> 
                        <CartWidget /> 
                    </Link>
                </div>
            </div>
        </nav>
    );
}