import React from "react";
import Typical from "react-typical";
import "./css/profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.instagram.com/milind_basavaraja/">
                <i className="fa-brands fa-instagram-square"></i>
              </a>
              <a href="https://github.com/milindbasavaraja">
                <i className="fa-brands fa-github-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/milindbasavaraja/">
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'm
              <span className="highlighted-text"> Milind Basavaraja</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-test">
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Devloper 🔴",
                    1000,
                    "Full Stack Devloper 💻",
                    1000,
                    "Experienced Backend Devloper 🧑🏻‍💻",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building data intensive applications with Front and
                Backend operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">Hire Me</button>
            <a
              href="Milind_Basavaraja_Resume.pdf"
              download="Milind-Basavaraja.pdf"
            >
              <button className="btn highlighted-btn"> Get Resume </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
