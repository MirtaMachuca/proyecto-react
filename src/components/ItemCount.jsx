import { useState } from "react";

function ItemCount({ max, onSubmitCount }) {
  let [count, setCount] = useState(1);

  const handleAdd = () => {
    if (count < max) {
      setCount(count + 1);
    }
  };

  const handleSubtract = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleSubtract} disabled={count === 1}>-</button>
        <span>{count}</span>
        <button onClick={handleAdd} disabled={count === max}>+</button>
      </div>
      <div>
        <button onClick={() => onSubmitCount(count)}>Agregar al carrito</button>
      </div>
    </div>
  );
}

export default ItemCount;
