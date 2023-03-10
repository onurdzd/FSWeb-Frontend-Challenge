import React from "react";
import img from "../images/profile_img.png";

const Profile = () => {
  return (
    <div className="profile">
      <div className="container">
        <h1>Profile</h1>
        <div className="profile-box">
          <div>
            <h2>Basic Information</h2>
            <div><p>Doğum Tarihi</p><span>03.04.1991</span></div>
            <div><p>İkamet Şehri</p><span>Antalya</span></div>
            <div><p>Eğitim Durumu</p><span>Ege Üniversitesi Finans Yönetimi Yüksek Lisans</span></div>
            <div><p>Tercih Ettiği Rol</p><span>Full Stack</span></div>
          </div>
          <div>
            <img src={img} alt="profile_pic"></img>
          </div>
          <div>
            <h2>About Me</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              aut, odit laborum aliquam voluptatum nisi mollitia. Mnima
              accusamus ratione soluta aperiam sit voluptate? Dicta quod
              deserunt quam temporibus cumque magnam!{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
