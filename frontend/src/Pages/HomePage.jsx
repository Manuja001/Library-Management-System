import React from "react";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import Selection from "../Images/selection.png";
import Convenience from "../Images/Convenience.png";
import Quality from "../Images/quality.png";
import Ceo from "../Images/Ceo.png";
import Manager from "../Images/Manager.png";
import Developer from "../Images/Dev.png";

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="HomePage">
      <div className="bg-home">
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
          <button className="button_shop" onClick={() => navigate("/shop")}>
            Shop Now ▶
          </button>
        </div>
      </div>
      <hr />
      <h2>Why Choose Us?</h2>
      <div className="container_2">
        <div className="card">
          <h3>Wide Selection</h3>
          <img src={Selection} alt="book" />
          <p>
            Choose from a vast selection of books across every genre, all at
            competitive prices.
          </p>
        </div>
        <div className="card">
          <h3>Convenience</h3>
          <img src={Convenience} alt="book" />
          <p>
            Browse and shop from the comfort of your home, and get your books
            delivered straight to your doorstep.
          </p>
        </div>
        <div className="card">
          <h3>Quality</h3>
          <img src={Quality} alt="book" />
          <p>
            We offer only the best quality books, so you can enjoy an
            unforgettable reading experience.
          </p>
        </div>
      </div>
      <hr />
      <h2>Our Team</h2>
      <div className="container_3">
        <div className="member">
          <h3>CEO</h3>
          <img src={Ceo} alt="Ceo-profile" />
          <h3>Devika Priyadarshani </h3>
          <p>
            Devika Priyadarshani, CEO of "Online Book Store," blends literature
            passion and digital marketing expertise to offer vast selections,
            personalized recommendations, and foster a strong community, driving
            innovation and customer satisfaction.
          </p>
        </div>
        <div className="member">
          <h3>Manager</h3>
          <img src={Manager} alt="Manger-profile" />
          <h3>Manuri Dias</h3>
          <p>
            Manuri Dias, the bookstore manager, excels in operations management,
            fostering a welcoming environment, ensuring smooth daily operations,
            enhancing customer satisfaction, and leading the team with
            dedication and efficiency.
          </p>
        </div>
        <div className="member">
          <h3>Developer</h3>
          <img src={Developer} alt="Developer-profile" />
          <h3>Manuja Sandeep </h3>
          <p>
            Manuja Sandeep, a Full-Stack developer, excels in blending
            technology with literature, creating user-friendly platforms,
            enhancing customer experiences, and driving innovation for seamless
            book discovery and purchasing.
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default HomePage;
