import React from "react";

// Css
import styles from "./Footer.module.css";

// Assets
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className={styles.footer_container} id="footer">
      <hr />
      <div className={styles.footer}>
        <div className={styles.social_links}>
          <img src={Github} id={styles.Github} alt=""></img>
          <img src={Instagram} id={styles.Instagram} alt=""></img>
          <img src={LinkedIn} id={styles.LinkedIn} alt=""></img>
        </div>
        <div className={styles.logo_f}>
          <img src={Logo} alt="" />
        </div>
      </div>

      <div className={`blur ${styles.footer_blur_1}`}></div>
      <div className={`blur ${styles.footer_blur_2}`}></div>
    </div>
  );
};

export default Footer;
