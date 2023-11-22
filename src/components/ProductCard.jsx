import React from "react";
import { Link } from "react-router-dom";
import ImageZoom from "./ImageZoom.jsx";
import basketCart from "../assets/icons/basketCart.png";
import "../styles/productCard.scss";

const ProductCard = ({ cardType, product }) => {
  const generateUrlTitle = (title) => {
    return title.toLowerCase().replace(/ /g, "-");
  };

  return (
    <>
      <div className={`product-card ${cardType}__product`}>
        <div className={`product-card__image ${cardType}__image`}>
          <Link to={`/product-details/${generateUrlTitle(product.title)}`}>
            <ImageZoom imageUrl={product.img} />

            <div className="product-basketCart">
              <img src={basketCart} alt="basket cart" />
            </div>
          </Link>
          {product.onSale && <div className="sale-badge">Sale!</div>}
        </div>

        <div className={`product-card__info ${cardType}__info`}>
          <h4 className={`product-card__category ${cardType}__category`}>
            {product.category}
          </h4>
          <h2 className={`product-card__title ${cardType}__title`}>
            {product?.title}
          </h2>

          <div className="product-price__flex">
            {product.oldPrice && (
              <p
                className={`product-card__price product-card__oldPrice  ${cardType}__oldprice`}
              >
                ${product?.oldPrice}.00
              </p>
            )}
            <p className={`product-card__price ${cardType}__price`}>
              ${product?.price}.00
            </p>
          </div>
          <p className={`product-card__description ${cardType}__description`}>
            {product.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
