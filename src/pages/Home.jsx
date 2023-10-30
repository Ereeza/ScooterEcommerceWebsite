import "../styles/home.scss";
import "../styles/global.scss";
import "../styles/about.scss";
import truck from "../assets/images/truck.png";
import send from "../assets/images/send.png";
import lock from "../assets/images/lock.png";
import banner from "../assets/images/banner.png";

import ProductDetails from "../components/ProductDetails";
import { products } from "../data/dummyData.js";
import ProductCard from "../components/ProductCard";
import Button from "../components/Shared/Button.jsx";
import { Link } from "react-router-dom";

const Home = () => {
  // Filter the products to get only those with onSale equal to true
  const onSaleProducts = products.product.filter((item) => item.onSale);
  const limitedOnSaleProducts = onSaleProducts.slice(0, 4);

  return (
    <div className="home">
      <div className="banner bg-circle">
        <div className="banner-content container">
          <img src={banner} alt="" />
          <div className="banner-title">
            <h1>Electric Scooters</h1>

            <h2>To make your adventure better</h2>
            <Button className="button">Shop Now</Button>
          </div>
        </div>
        <div></div>
      </div>
      <div className=" products-onSale">
        <div className={`products-grid container simple-card`}>
          {limitedOnSaleProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
        {/* <div className=" show-more__btn"> */}
        <Button className="button show-more__btn">Shop Now</Button>
        {/* </div> */}
      </div>

      <div className="section-seperator__wrapper">
        <span className="section-seperator"></span>
      </div>

      <div className="about-clients about-section container">
        <h6 className="sup-title">About Us</h6>
        <h2 className="about-section__title">
          If you&apos;re looking for a brand new electric scooter, you’re in the
          right place
        </h2>
        <p className="about-section__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.
        </p>
      </div>
      <div className="home-fixed__image">
        <div className="fixed-image__overlay">
          <Link to="/shop">
            <img src={products.product[0].img} alt="" />
            <h4 className="home-product__title">{products.product[0].title}</h4>
          </Link>
          <p className="home-product__price">${products.product[0].price}</p>
        </div>
      </div>

      <div className="section-seperator__wrapper">
        <span className="section-seperator"></span>
      </div>

      <div className="about-clients about-section container">
        <h6 className="sup-title"></h6>
        <h2 className="about-section__title">Why choose us</h2>
        <p className="about-section__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore sed do eiusmod tempor incididunt
          ut labore.
        </p>
      </div>

      <div className="our-services container">
        <div className="our-services__section">
          <div className="our-services__img">
            <img src={truck} alt="" />
          </div>
          <h2 className="our-services__title">Fast Delivery</h2>
          <p className="our-services__text">
            Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor
            consectetur incididunt ut labore
          </p>
        </div>
        <div className="our-services__section">
          <div className="our-services__img">
            <img src={send} alt="" />
          </div>
          <h2 className="our-services__title">Order Tracking</h2>
          <p className="our-services__text">
            Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor
            consectetur incididunt ut labore
          </p>
        </div>
        <div className="our-services__section">
          <div className="our-services__img">
            <img src={lock} alt="" />
          </div>
          <h2 className="our-services__title">Secure Payment</h2>
          <p className="our-services__text">
            Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor
            consectetur incididunt ut labore
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
