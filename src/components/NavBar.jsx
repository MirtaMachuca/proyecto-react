function NavBar( props ) {
  const { img,carrito } = props;
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="./index.html">
          <img src={img} width="150" height="150" alt="logo img" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                New In
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href=""
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Nosotros
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="">
                    ¿Quiénes Somos?
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    Preguntas Frecuentes
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="">
                Productos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="">
                Contáctanos
              </a>
            </li>
          </ul>
          {carrito}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
