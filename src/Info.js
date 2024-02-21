import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./firebaseConfig";
import { NavLink, useNavigate } from "react-router-dom";
import { doc, setDoc, addDoc, collection } from "firebase/firestore";

function Info() {
  const [date, setDate] = useState();
  const [weight, setWeight] = useState(0);
  const [week, setWeek] = useState(0);
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
    <div>
      <form>
        <input
          type="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
          placeholder="Weight in lbs"
        />
        <input
          type="number"
          value={week}
          onChange={(e) => setWeek(e.target.value)}
          required
          placeholder="Week you are in"
        />
        <button type="submit" onClick={onUpdate}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Info;
