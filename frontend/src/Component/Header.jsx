import React from "react";
import "./Header.css";
import Book from "../Images/Book.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="header">
      <h1 className="heading">Online Book Store</h1>
      <img src={Book} alt="book" className="book_image" />
      <div>
        <ul className="navbar">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/"}>Shop</Link>
          </li>
          <li>
            <Link to={"https://www.google.com"}> About us</Link>
          </li>
          <li>
            <a href="https://www.google.com"> Contact us</a>
          </li>
        </ul>
      </div>
      <div>
        <input className="search_bar" type="text" placeholder="Search" />

        <button className="button_search">Search</button>
      </div>
      <div>
        <button className="button_login" onClick={() => navigate("signin")}>
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Header;
