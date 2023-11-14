import EmptyCart from "../components/EmptyCart";
import IntroHeader from "../components/IntroHeader";
import { products } from "../data/dummyData.js";
import "../styles/cart.scss";
import { useContext, useState } from "react";
import { CartContext } from "../context/cart";
import Button from "../components/Shared/Button";
import { Link } from "react-router-dom";

import "../styles/quantityCounter.scss";

const Cart = () => {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    getCartTotal,
    getProductSubTotal,
  } = useContext(CartContext);

  const generateUrlTitle = (title) => {
    return title.toLowerCase().replace(/ /g, "-");
  };

  const [itemQuantities, setItemQuantities] = useState(() => {
    const initialQuantities = {};
    cartItems.forEach((item) => {
      initialQuantities[item.id] = item.quantity;
    });
    return initialQuantities;
  });

  return (
    <div className="cart-page container">
      <h2 className="cart-title">Cart</h2>
      {cartItems.length > 0 ? (
        <div className="cart-tables">
          <table className="cart-table products-cart">
            <thead>
              <tr>
                <th></th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td className="image-td">
                    <Link
                      to={`/product-details/${generateUrlTitle(item.title)}`}
                    >
                      <img src={item.img} alt="" />
                    </Link>
                  </td>
                  <td className="product-table__title">{item.title}</td>
                  <td className="product-table__price">${item.price}</td>

                  <td className="product-table__quantity">
                    <div className="quantity-counter ">
                      <button
                        className="quantity-counter__btn"
                        onClick={() => {
                          removeFromCart(item);
                        }}
                      >
                        -
                      </button>
                      <p className="quantity__input">{item.quantity}</p>

                      <button
                        className="quantity-counter__btn"
                        onClick={() => {
                          addToCart(item, 1);
                        }}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="product-table__subtotal">
                    ${getProductSubTotal(item)}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="cart-footer">
                <td colSpan="5">
                  <Button
                    className="button"
                    onClick={() => {
                      clearCart();
                    }}
                  >
                    Clear cart
                  </Button>
                </td>
              </tr>
            </tfoot>
          </table>

          <table className="cart-table cart-totals">
            <thead>
              <tr>
                <th colSpan="3">Cart Totals</th>
              </tr>
            </thead>
            <tbody>
              <tr colSpan="3">
                <td>Subtotal:</td>
                <td>${getCartTotal()}</td>
              </tr>
              <tr colSpan="3">
                <td>Total:</td>
                <td>${getCartTotal()}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="2">
                  <div className="button-center">
                    <Link to="/checkout">
                      <Button className="button checkout-btn">Checkout</Button>
                    </Link>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default Cart;
