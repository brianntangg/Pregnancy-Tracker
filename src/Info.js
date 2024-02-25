import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./firebaseConfig";
import { NavLink, useNavigate } from "react-router-dom";
import { doc, setDoc, addDoc, collection } from "firebase/firestore";
import "./Info.css";

function Info() {
  const [date, setDate] = useState();
  const [weight, setWeight] = useState();
  const [week, setWeek] = useState();
  const [uid, setUid] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
      } else {
        navigate("/login");
      }
    });
  }, []);

  const onUpdate = async (e) => {
    e.preventDefault();
    try {
      const userRef = doc(db, "/users", uid);
      await setDoc(userRef, {
        name: name,
        date: date,
        weight: weight,
        week: week,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="info-container">
      <p className="info-title">We're excited to have you!</p>
      <p className="info-subtitle">
        Please provide the following information to get started!
      </p>
      <form className="info-form">
        <label className="info-label">Name</label>
        <input
          type="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Name"
          className="info-input"
        />
        <label className="info-label">Date of birth</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          placeholder="Date of birth"
          className="info-input"
        />
        <label className="info-label">Weight in lbs</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
          placeholder="Weight in lbs"
          className="info-input"
        />
        <label className="info-label">Week of Pregnancy</label>
        <input
          type="number"
          value={week}
          onChange={(e) => setWeek(e.target.value)}
          required
          placeholder="Week you are in"
          className="info-input"
        />
        <button type="submit" onClick={onUpdate} className="info-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Info;
