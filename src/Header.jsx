import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./Header.css";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user },dispatch] = useStateValue();
  const length =
    basket.length > 0
      ? basket.reduce((a, b) => {
          return a + b.count;
        }, 0)
      : 0;
  const logout = () => {
    if (user) {
      dispatch({type:"EMPTY_CART"})
      auth.signOut();

    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"
          className="header__img"
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"} className="header__link">
          <div onClick={logout} className="header__option">
            <span className="header__optionLine1">Hi, {user?.email}</span>
            <span className="header__optionLine2">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLine1">Orders</span>
            <span className="header__optionLine2">&amp; Returns</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLine1">Your</span>
            <span className="header__optionLine2">Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingCartIcon />
            <span className="header__optionLine2 header__optionBasketCount">
              {length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
