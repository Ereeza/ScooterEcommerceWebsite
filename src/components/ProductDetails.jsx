import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../data/dummyData.js";
import "../styles/productDetails.scss";
import Button from "../components/Shared/Button.jsx";
import QuantityCounter from "./QuantityCounter.jsx";
import paymentIcons from "../assets/images/payment-icons.png";
import { CartContext } from "../context/cart";

const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState(null);
  const [viewCart, setViewCart] = useState("viewCartHidden");
  const [quantity, setQuantity] = useState(1);
  const { title } = useParams();

  const { cartItems, addToCart } = useContext(CartContext);

  // Convert hyphens back to spaces in the title
  const decodedTitle = title.replace(/-/g, " ");

  useEffect(() => {
    const fetchedProduct = products.product.find(
      (item) => item.title.toLowerCase() === decodedTitle.toLowerCase()
    );

    setProductDetails(fetchedProduct);
  }, [decodedTitle]);

  if (!productDetails) {
    // Handle case where product details are loading or not found
    return <div>Product not found</div>;
  }

  const handleAddToCartClick = (event) => {
    addToCart(productDetails, quantity);
    event.currentTarget.disabled = true;
    setViewCart("viewCartShown");
  };

  return (
    <div className="product-page container">
      <div className="product-details">
        <div className="product-details__section product-details__image">
          <img src={productDetails.img} alt="" />
        </div>
        <div className="product-details__section product-details__info">
          <p className="product-details__category">{productDetails.category}</p>
          <h1 className="product-details__title">{productDetails.title}</h1>

          <p className="product-details__price">
            {productDetails.oldPrice && (
              <p className={`product-card__price product-card__oldPrice `}>
                ${productDetails?.oldPrice}.00
              </p>
            )}
            ${productDetails.price}.00{" "}
            <span className="product-details__shipping">& Free Shipping</span>
          </p>
          <p className="product-details__desc">{productDetails.description}</p>
          <div className="product-quantity__flex">
            <QuantityCounter quantity={quantity} setQuantity={setQuantity} />
            {/* <div className="flex gap-4">
              <button
                className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                onClick={() => {
                  addToCart(productDetails);
                }}
              >
                +
              </button>
              <p>{productDetails.quantity}</p>
              <button
                className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                onClick={() => {
                  removeFromCart(productDetails);
                }}
              >
                -
              </button>
            </div> */}
            <Button className="button" onClick={handleAddToCartClick}>
              Add to cart
            </Button>

            <Link to="/cart" className={viewCart}>
              View Cart
            </Link>
          </div>
          <div>
            <fieldset className="product__payment">
              <legend>Guaranteed Safe Checkout</legend>
              <img src={paymentIcons} alt="" />
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
