import { NavLink, useLocation } from "react-router-dom";
import "../styles/nav.scss";
import "../styles/global.scss";
import logo from "../assets/images/logo.png";
import cart from "../assets/icons/cart.png";
import profile from "../assets/icons/profile.png";
import { useContext, useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { AuthContext } from "../context/auth";
import NavResponsive from "./NavResponsive";

const Nav = () => {
  const [isNavResponsiveOpen, setIsNavResponsiveOpen] = useState(false);

  const location = useLocation();
  const { login } = useContext(AuthContext);

  const toggleNavResponsive = () => {
    setIsNavResponsiveOpen((prev) => !prev);
  };

  // set overflow hidden to body when nav responsive is opened
  useEffect(() => {
    if (isNavResponsiveOpen) {
      document.body.style.overflow = "hidden";
      return;
    }
    document.body.style.overflow = "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isNavResponsiveOpen]);

  // close nav responsive when path is being changed.
  useEffect(() => {
    if (isNavResponsiveOpen) {
      toggleNavResponsive();
    }
  }, [location.pathname]);

  return (
    <>
      <div>
        <div className="container nav-bar__mobile-btn--wrapper">
          <div className="nav-bar__mobile-btn" onClick={toggleNavResponsive}>
            <span
              className={
                isNavResponsiveOpen
                  ? "nav-bar__mobile-icon-up"
                  : "nav-bar__mobile-icon-up--inactive"
              }
            ></span>
            <span
              className={
                isNavResponsiveOpen
                  ? "nav-bar__mobile-icon-down"
                  : "nav-bar__mobile-icon-up--inactive"
              }
            ></span>
          </div>
        </div>

        <nav className="nav-bar nav-bar__desktop">
          <div className="nav-section nav-left">
            <ul className="nav-list">
              <NavItem to="/shop" text="Shop" />
              <NavItem to="/about" text="About" />
              <NavItem to="/contact" text="Contact" />
            </ul>
          </div>
          <div className="nav-center">
            <NavLink to="/" className="logo-link">
              <img src={logo} alt="Logo" className="logo" />
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
        {isNavResponsiveOpen && <NavResponsive />}
      </div>
    </>
  );
};

export const NavItem = ({ to, text, onClick }) => {
  return (
    <li>
      <NavLink className={"nav-item"} to={to} onClick={onClick}>
        {text}
      </NavLink>
    </li>
  );
};

export default Nav;
