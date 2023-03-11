import React from "react";
import "./Footer.css";
import instagram from "../images/instagram.svg";
import twitter from "../images/twitter.svg";
import { useHistory } from 'react-router-dom';

const Footer = () => {
    const history = useHistory()
  return (
    <div className="footer">
      <div className="footer-container">
        <h1>Bana ulaşmak için</h1>
        <p>
          İletişim için,aşağıdaki mail adresi veya form üzerinden bana
          ulaşabilirsiniz!
        </p>
        <a href="mailto:onurerkdizdar@gmail.com">onurerkdizdar@gmail.com</a>
        <div className="footer-iletisim">
          <button onClick={()=>history.push("/form")}>İletişim Formu</button>
        </div>
        <div className="footer-container-img">
          <div>
            <img src={instagram} alt="footer-logos"></img>
          </div>
          <div>
            <img src={twitter} alt="footer-logos"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
