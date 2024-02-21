import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./firebaseConfig";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { RiMentalHealthLine } from "react-icons/ri";
import { IoFastFoodOutline } from "react-icons/io5";
import { IoScaleOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import "./Home.css"

function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    date: "",
    week: 0,
    weight: 0,
  });
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        getUser(user);
      } else {
        navigate("/login");
      }
    });
  }, []);

  const getUser = async (user) => {
    try {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUser({
          name: docSnap.data().name,
          date: docSnap.data().date,
          week: parseInt(docSnap.data().week),
          weight: parseInt(docSnap.data().weight),
        });
      } else {
        // docSnap.data() will be undefined in this case
        console.log("User does not exist");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/login");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleSettings = (e) => {
    e.preventDefault();
    navigate("/settings");
  };

  return (
    <div className="containter">
      <p className="title">Welcome, {user.name}</p>
      <p className="update">
        You are in week {user.week}. You have {40 - user.week} more weeks left
        to go! Stay strong!
      </p>
      <div className="sectionsContainer">
      <div className="sections">
        <p>Expected Symptoms</p>
        <RiMentalHealthLine className="image"/>
      </div>
      <div className="sections">
        <p>Sleep and Diet Tips</p>
        <IoFastFoodOutline className="image"/>
      </div>
      <div className="sections">
        <p>Weight Tracker</p>
        <IoScaleOutline className="image"/>
      </div>
      </div>
      <div className="logout"> 
      <button onClick={handleLogout}>Logout</button>
      <button onClick={handleSettings}>
        <FaUserCircle />
      </button>
      </div>
    </div>
  );
}

export default Home;
