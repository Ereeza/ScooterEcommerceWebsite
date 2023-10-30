import { NavLink, useNavigate } from "react-router-dom";
import "../styles/nav.scss";
import "../styles/global.scss";
import logo from "../assets/images/logo.png";
import search from "../assets/images/search-icon.png";
import cart from "../assets/icons/cart.png";
import profile from "../assets/icons/profile.png";
import Button from "./Shared/Button";
import TextField from "./Shared/TextField";
import { useContext, useState } from "react";
import SearchBar from "./SearchBar";
import { AuthContext } from "../context/auth";

const Nav = () => {
  // const [searchText, setSearchText] = useState("");
  // const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  return (
    <nav className="nav-bar ">
      <div className="nav-section nav-left">
        <ul className="nav-list">
          <NavItem to="/shop" text="Shop" />
          {/* //onClick={handleShopClick} */}
          <NavItem to="/about" text="About" />
          <NavItem to="/contact" text="Contact" />
        </ul>
      </div>
      <div className="nav-center">
        <NavLink to="/" className="logo-link">
          <img src={logo} alt="Logo" className="logo" />{" "}
          {/* Use the imported logo */}
        </NavLink>
      </div>
      <div className="nav-section">
        <ul className="nav-list nav-right">
          <SearchBar />
          <NavLink to="/cart" className=" nav-item cart-icon">
            <img src={cart} alt="BasketCart" className="cart-img" />
          </NavLink>
          {login === true ? (
            <NavLink to="/profile" className="nav-item profile-icon">
              <img src={profile} alt="Profile" className="profile-img" />
            </NavLink>
          ) : (
            <NavLink to="/signup" className="nav-item">
              Sign up
            </NavLink>
          )}

          {/* <NavLink to="/profile" className="nav-item profile-icon">
            <img src={profile} alt="Profile" className="profile-img" />
          </NavLink> */}
        </ul>
      </div>
    </nav>
  );
};

const NavItem = ({ to, text, onClick }) => {
  return (
    <li>
      <NavLink className={"nav-item"} to={to} onClick={onClick}>
        {text}
      </NavLink>
    </li>
  );
};

export default Nav;
