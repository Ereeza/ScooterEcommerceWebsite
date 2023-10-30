import { Link } from "react-router-dom";
import Button from "../components/Shared/Button.jsx";
import "../styles/emptyCart.scss";
import "../styles/global.scss";

const EmptyCart = () => {
  return (
    <>
      <div className="empty-cart__page">
        <div className="empty-cart__table">
          <p className="empty-cart__text">Your cart is currently empty.</p>
        </div>

        <div className="return-shopping">
          <Link to="/shop">
            <Button className="button">Return to Shop</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default EmptyCart;
