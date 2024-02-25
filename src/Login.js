import React, { useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { NavLink, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
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
        <p className="login-subtitle">Login</p>
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
        <button type="submit" onClick={onLogin} className="login-button">
          Login
        </button>
        <p className="signup-link">
          Don't have an account? Create one{" "}
          <span>
            <a href="/signup">here</a>
          </span>
          !
        </p>
      </form>
    </div>
  );
}

export default Login;
