import React from "react";
import "./Symptoms.css";
import { FaArrowLeftLong } from "react-icons/fa6";

function Symptoms() {
  return (
    <div className="symptoms-container">
      <a href="/" className="back-link">
        <FaArrowLeftLong className="back-arrow" />
        <p>Back to Dashboard</p>
      </a>
      <p className="symptoms-header">Expected Symptoms</p>
      <div className="symptoms-text">
        <p>
          The three most common symptoms during the tenth week of pregnancy are:
        </p>
        <ul>
          <li>
            Nausea and vomiting (morning sickness): Many women experience
            nausea, and it may or may not be limited to the morning. Some women
            may also experience vomiting.
          </li>
          <li>
            Fatigue: Feeling more tired than usual is common during the first
            trimester. Your body is working hard to support the developing baby.
          </li>
          <li>
            Breast changes: Your breasts may become more tender, swollen, or
            sensitive. The areolas (the area around the nipples) may darken.
          </li>
        </ul>
        <p>Read more here:</p>
      </div>
      <div className="article-container">
        <a
          className="article-link"
          href="https://www.nhs.uk/start-for-life/pregnancy/week-by-week-guide-to-pregnancy/1st-trimester/week-10/#:~:text=The%20ears%20are%20starting%20to,3%20times%20your%20heart%20rate."
        >
          <div className="article">
            <p className="article-title">Ten Weeks Pregnant - NHS</p>
            <p className="article-description">
              Learn more about pregnancy, week by week.
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Symptoms;
