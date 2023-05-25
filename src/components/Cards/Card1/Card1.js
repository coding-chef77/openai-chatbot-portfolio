import React from "react";
import image from "../images/twinChat.png";
import "../Card.css";

function Card1() {
  return (
    <div className="card-container">
      <div className="card">
        <img
          src={image}
          alt="Twin Chat homepage screenshot"
          className="card-img"
        />
        <h2 className="card-title">SoMe Project</h2>
        <a
          href="https://twin-chat.netlify.app/"
          target="_blank"
          rel="noreferrer"
          className="card-subheader"
        >
          https://twin-chat.netlify.app/
        </a>
        <p className="card-content">
          This project was my final exam where the goal was to create a social
          media platform. Having twins myself I thought it would be a good idea
          to create a solution that would target twin parents. This is my first
          project using Material UI and really enjoyed the flexibility of it.
          Please click on either the github link for full details or the button
          below for a brief overview.
        </p>
        <div className="card-actions">
          <a
            href="https://github.com/Noroff-FEU-Assignments/project-exam-2-heine5150.git"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card1;
