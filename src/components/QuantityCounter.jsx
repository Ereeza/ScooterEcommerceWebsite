import React, { useState } from "react";
import "../styles/quantityCounter.scss";

function QuantityCounter({ quantity, setQuantity }) {
  // const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleQuantityChange = (e) => {
    const inputQuantity = e.target.value;
    if (
      inputQuantity === "" ||
      (!isNaN(inputQuantity) && parseInt(inputQuantity) >= 1)
    ) {
      setQuantity(+inputQuantity);
    }
  };

  return (
    <div className="quantity-counter">
      <button onClick={decrementQuantity} className="quantity-counter__btn">
        -
      </button>
      <input
        type="text"
        value={quantity}
        onChange={handleQuantityChange}
        className="quantity-counter__input"
      />

      <button onClick={incrementQuantity} className="quantity-counter__btn">
        +
      </button>
    </div>
  );
}

export default QuantityCounter;
