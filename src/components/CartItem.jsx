function CartItem({ id, title, price, count, img }) {
    const { removeItem } = useContext(cartContext);

    return (
        <div>
            <div>
                <img src={img} alt={title} style={{ maxWidth: "50px" }} /> 
                <h3>Nombre: {title}</h3>
                <p>Precio: ${price}</p>
                <p>Unidades: {count}</p>
                <button onClick={() => removeItem(id)}>Eliminar</button>
            </div>
            <hr />
        </div>
    );
}
