import React from "react";
import "./HomePage.css";
import Bookstore from "../Images/Background.jpg";

function HomePage() {
  return (
    <div className="Home">
      <div className="Main">
        <div className="contaiter_1">
          <h1>Welcome to ...</h1>
          <h2>Online Book Store</h2>

          <p>
            Dive into a world of stories at Online Book Store , your one-stop
            shop for bookworms! We offer a vast selection of new releases,
            hidden gems, and classics across every genre, all at competitive
            prices. Browse conveniently from the comfort of your home and get
            your next literary adventure delivered straight to your doorstep.
          </p>
          <h2>knowledge is power ...</h2>
        </div>
        <div className="container_2">
          <img src={Bookstore} alt="Book Store" />
        </div>
      </div>
      <hr />
    </div>
  );
}

export default HomePage;
