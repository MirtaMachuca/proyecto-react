/*function Carrito() { 
  return (
    <a href="#!" className="btn btn-outline-dark ms-3">
      <i className="fas fa-shopping-cart"></i>
      <span> 5 </span>
    </a>
  );
}
  
  export default Carrito;*/

  export default function CartWidget() {
    return (
      <div className="cart-icon">
        🛒
        <span className="cart-count">1</span>
      </div>
    );
  }

  