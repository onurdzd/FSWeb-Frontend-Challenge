import React from "react";
import img from "../../images/profile_img.jpg";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile container">
        <h1>Profile</h1>
        <div className="profile-box">
          <div className="profile-box-1 profile-box-container">
            <h2>About</h2>
            <div className="profile-box-1-detay">
              <p>Birth-Date</p>
              <span>1991</span>
            </div>
            <div className="profile-box-1-detay">
              <p>City</p>
              <span>Antalya</span>
            </div>
            <div className="profile-box-1-detay">
              <p>Education</p>
              <span>Ege University Financial Management Master Degree 2017</span>
            </div>
            <div className="profile-box-1-detay">
              <p>Preffering Position</p>
              <span>Full Stack</span>
            </div>
          </div>
          <div className="profile-box-2 profile-box-container">
            <img src={img} alt="profile_pic"></img>
          </div>
          <div className="profile-box-3 profile-box-container">
            <p>
              I have worked in the financial sector for almost 7 years. Due to
              my personal interest in programming, I decided to go into
              development.</p> <br></br><p>
            I have attended a number of courses and training
              sessions on coding over the past few years. I am willing to learn
              and improve myself in both frontend and back-end development. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
