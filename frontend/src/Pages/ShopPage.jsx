import React from "react";
import "./ShopPage.css";
import Got from "../Images/got.jpg";
import Hobbit from "../Images/Hobbit.jpg";
import HarryPotter from "../Images/HarryPotter.jpg";
import BookTheif from "../Images/BookTheif.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ShopPage() {
  return (
    <div className="hero">
      <div className="bg-shop">
        <div className="shop">
          <div className="container_1">
            <h1>20% OFF</h1>
            <h2>For New Users</h2>
          </div>

          <button className="btn_explore">Explore</button>
        </div>
      </div>
      <div className="body">
        <div className="shop-heading">
          <h2>Most Popular</h2>
        </div>
        <div className="content">
          <div className="book-card">
            <h2>A Game of Thrones </h2>

            <img src={Got} alt="GOT-Img" />
            <h4>by George R. R. Martin</h4>
            <p>
              A Game of Thrones is the first novel in A Song of Ice and Fire, a
              series of fantasy novels by George R. R. Martin in 1996.
            </p>
          </div>
          <div className="book-card">
            <h2>The Hobbit</h2>

            <img src={Hobbit} alt="Hobbit-Img" />
            <h4>by J. R. R. Tolkien</h4>
            <p>
              The Hobbit, or There and Back Again is a children's fantasy novel
              by the English author J. R. R. Tolkien. It was published in 1937
            </p>
          </div>
          <div className="book-card">
            <h2>Harry Potter </h2>
            <img src={HarryPotter} alt="HarryPotter-Img" />
            <h4>by J. K. Rowling </h4>
            <p>
              Harry Potter is a series of seven fantasy novels written by
              British author J. K. Rowling. The novels chronicle the lives of a
              young wizard, Harry Potter
            </p>
          </div>
          <div className="book-card">
            <h2>The Book Thief</h2>
            <img src={BookTheif} alt="BookTheif-Img" />
            <h4>by Markus Zusak</h4>
            <p>
              The Book Thief is a historical fiction novel by the Australian
              author Markus Zusak, set in Nazi Germany during World War II.
              Published in 2005
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
