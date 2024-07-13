import React from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  return (
    <div className="bg-img">
      <div className="container">
        <h1>Welcome Back ...</h1>
        <h2>Sign In</h2>

        <label for="email">
          <b>User Name</b>
        </label>
        <input
          className="input"
          type="text"
          placeholder="Enter Email"
          name="email"
          required
        />

        <label for="psw">
          <b>Password</b>
        </label>
        <input
          className="input"
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        />

        <button type="submit" className="btn" onClick={() => navigate("/shop")}>
          Sign In
        </button>
        <p>Don't have an account? </p>
        <p>
          <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
