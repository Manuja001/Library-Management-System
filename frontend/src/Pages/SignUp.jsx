import React from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  return (
    <div className="bg">
      <div className="container">
        <h1>Welcome to our Page ...</h1>
        <h2>Sign Up</h2>

        <label for="fname">
          <b>First Name</b>
        </label>
        <input
          className="input"
          type="text"
          placeholder="Enter First Name"
          name="fname"
          required
        />
        <label for="lname">
          <b>Last Name</b>
        </label>
        <input
          className="input"
          type="text"
          placeholder="Enter Last Name"
          name="lname"
          required
        />
        <label for="username">
          <b>Username</b>
        </label>
        <input
          type="text"
          className="input"
          placeholder="Enter Username"
          name="username"
          required
        />
        <label for="phone">
          <b>Phone Number</b>
        </label>
        <input
          type="text"
          className="input"
          placeholder="Enter Phone Number"
          name="phone"
          required
        />

        <label for="email">
          <b>Email</b>
        </label>
        <input
          type="text"
          className="input"
          placeholder="Enter Email"
          name="email"
          required
        />

        <label for="password">
          <b>Password</b>
        </label>
        <input
          className="input"
          type="password"
          placeholder="Enter Password"
          name="password"
          required
        />

        <label for="password">
          <b>Confirm Password</b>
        </label>
        <input
          className="input"
          type="password"
          placeholder="Confirm Password"
          name="password"
          required
        />

        <button type="submit" className="btn" onClick={() => navigate("/signin")}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default SignUp;
