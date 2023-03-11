import React from "react";
import img from "../images/profile_img.jpg";

const Profile = () => {
  return (
    <div className="profile">
      <div className="container">
        <h1>Profile</h1>
        <div className="profile-box">
          <div className="profile-box-1 profile-box-container">
            <h2>Basic Information</h2>
            <div className="profile-box-1-detay"><p>Doğum Tarihi</p><span>03.04.1991</span></div>
            <div className="profile-box-1-detay"><p>İkamet Şehri</p><span>Antalya</span></div>
            <div className="profile-box-1-detay"><p>Eğitim Durumu</p><span>Ege Üniversitesi Finans Yönetimi Yüksek Lisans 2017</span></div>
            <div className="profile-box-1-detay"><p>Tercih Ettiği Rol</p><span>Full Stack</span></div>
          </div>
          <div className="profile-box-2 profile-box-container">
            <img src={img} alt="profile_pic"></img>
          </div>
          <div className="profile-box-3 profile-box-container">
            <h2>About Me</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              aut, odit laborum aliquam voluptatum nisi mollitia.
              <br></br><br></br>
              Mnima
              accusamus ratione soluta aperiam sit voluptate? Dicta quod
              {" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
