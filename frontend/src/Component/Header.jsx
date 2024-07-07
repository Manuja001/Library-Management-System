import React from "react";
import "./Header.css";
import Book from "./Images/Book.png";
import search from "./Images/Search.png";

function Header() {
  return (
    <div className="header">
      <h1 className="heading">Online Book Store</h1>
      <img src={Book} alt="book" className="book_image" />
      <div>
        <ul className="navbar">
          <li>
            <a href="https://www.google.com">Home</a>
          </li>
          <li>
            <a href="https://www.google.com"> About us</a>
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
        <button className="button_login">Sign In</button>
      </div>
    </div>
  );
}

export default Header;
