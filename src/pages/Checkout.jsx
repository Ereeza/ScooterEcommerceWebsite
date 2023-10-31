import { useContext } from "react";
import "../styles/checkout.scss";
import { AuthContext } from "../context/auth";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/signin");
  };
  return (
    <>
      {login ? (
        <div className="checkout">
          <h1>This page is not finished yet!</h1>
        </div>
      ) : (
        <div className="not-logged-in">
          <p>
            Please <span onClick={handleLogin}>Log in </span> to view this page
          </p>
        </div>
      )}
    </>
  );
};

export default Checkout;
