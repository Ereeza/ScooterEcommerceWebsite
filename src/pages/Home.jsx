import "../styles/home.scss";
import "../styles/global.scss";
import "../styles/about.scss";
import truck from "../assets/images/truck.png";
import send from "../assets/images/send.png";
import lock from "../assets/images/lock.png";
import banner from "../assets/images/banner.png";

import { products } from "../data/dummyData.js";
import ProductCard from "../components/ProductCard";
import Button from "../components/Shared/Button.jsx";
import { Link } from "react-router-dom";

const Home = () => {
  const onSaleProducts = products.product.filter((item) => item.onSale);
  const limitedOnSaleProducts = onSaleProducts.slice(0, 4);

  return (
    <div className="home">
      <div className="banner bg-circle">
        <div className="banner-content">
          <div className="banner-left">
            <h1 className="banner-title">Libero X250</h1>
            <h2 className="banner-subtitle">250 Watt Electric Scooter</h2>

            <div className="banner-info">
              <h4>Informations:</h4>

              <div className="banner-info__wrapper">
                <div className="banner-info__box">
                  <p>30 km</p> <span>battery</span>
                </div>
                <div className="banner-info__box">
                  <p>13 km</p> <span>kg</span>
                </div>
                <div className="banner-info__box">
                  <p>25 km</p> <span>km/h</span>
                </div>
              </div>
            </div>
            <div className="banner-btn">
              <Button className="button">Shop now</Button>
            </div>
          </div>

          <img src={banner} alt="" className="banner-img" />

          <div className="banner-desc">
            <div className="banner-desc__content">
              <h3 className="banner-desc__title">Description</h3>
              <p className="banner-desc__text">
                The Fully Loaded Libero x250 is a High Performance, Extremely
                Durable, High Speed, Lightweight Electric Scooter with a Huge
                Battery
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" products-onSale">
        <div className={`products-grid container simple-card`}>
          {limitedOnSaleProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>

        <Button className="button show-more__btn">Shop Now</Button>
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
