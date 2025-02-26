import cartContext from "../context/cartContext";
import { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


function CartWidget() {
    const context = useContext(cartContext);

    return (
        <div className="cart-widget">
            <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
            {context.countItemsInCart() > 0 && <p> {context.countItemsInCart()} </p>}
        </div>
    );
}

export default CartWidget;