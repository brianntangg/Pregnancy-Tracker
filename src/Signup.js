import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";
import "./Login.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/info");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <div className="container">
      <div className="image-container">
        <img src="/homelogo.png" width={550} height={550}></img>
      </div>
      <div className="login-divider"></div>
      <form className="form">
        <p className="login-title">Pregnancy Tracker</p>
        <p className="login-subtitle">Signup</p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email address"
          className="input"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Password"
          className="input"
        />
        <button type="submit" onClick={onSubmit} className="login-button">
          Sign up
        </button>
        <p className="signup-link">
          Already have an account? Sign in{" "}
          <span>
            <a href="/login">here</a>
          </span>
          !
        </p>
      </form>
    </div>
  );
}

export default Signup;
