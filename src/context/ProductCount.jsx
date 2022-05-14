import React, { useState } from "react"

const ProductCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleSubstract = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };
  const handleAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  return (
    <>
      <div className="counter-container">
        <button
          onClick={handleSubstract}
          disabled={count === initial}
          className="btn plus-minus"
        >
          -
        </button>
        <span>{count}</span>
        <button
          onClick={handleAdd}
          disabled={count === stock}
          className="btn plus-minus"
        >
          +
        </button>
      </div>
      <button onClick={() => onAdd(count)} className="btn btn-add-to-cart">
        Agregar al carrito
      </button>
    </>
  );
};

export default ProductCount;