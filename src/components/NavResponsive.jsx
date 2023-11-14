import { NavLink } from "react-router-dom";
import "../styles/nav.scss";
import "../styles/global.scss";
import logo from "../assets/images/logo.png";
import cart from "../assets/icons/cart.png";
import profile from "../assets/icons/profile.png";
import { useContext } from "react";
import SearchBar from "./SearchBar";
import { AuthContext } from "../context/auth";
import { NavItem } from "./Nav";

const NavResponsive = () => {
  const { login } = useContext(AuthContext);

  return (
    <nav className="nav-bar__mobile nav-bar__responsive">
      <div className="nav-bar__mobile-container">
        <NavLink to="/" className="nav-bar__mobile-logo">
          <img src={logo} alt="Logo" className="logo" />
        </NavLink>

        <ul className="nav-bar__mobile-list">
          <NavItem to="/shop" text="Shop" />
          <NavItem to="/about" text="About" />
          <NavItem to="/contact" text="Contact" />
        </ul>

        <SearchBar />
        <div className="nav-bar__mobile-footer">
          <NavLink to="/cart" className=" nav-item cart-icon">
            <img src={cart} alt="BasketCart" className="cart-img" />
          </NavLink>
          {login === true ? (
            <NavLink to="/profile" className="nav-item profile-icon">
              <img src={profile} alt="Profile" className="profile-img" />
            </NavLink>
          ) : (
            <NavLink to="/signup" className="nav-item signup-nav">
              Sign up
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavResponsive;
