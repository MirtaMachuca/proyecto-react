function Carrito() {
    const cantidad = 5; 
  
    return (
      <a href="" className="btn btn-outline-dark ms-3">
        <i className="fas fa-shopping-cart"></i> 
        <span>({cantidad})</span>
      </a>
    );
  }
  
  export default Carrito;
  