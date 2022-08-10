import React from "react";

// Css
import styles from "./Reasons.module.css";

// Assets
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";

const Reasons = () => {
  return (
    <div className={styles.reasons} id="reasons">
      <div className={styles.left_r}>
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className={styles.right_r}>
        <span className={styles.right_r_title}>some reasons</span>

        <div>
          <span
            className={`stroke-text ${styles.reasons_text}`}
            style={{ marginRight: "10px" }}
          >
            why
          </span>
          <span className={styles.reasons_text}>choose us?</span>
        </div>

        <div className={styles.details_r}>
          <div>
            <img src={tick} alt="" />
            <span>OVER +140 EXPERT COACHS</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>RELIABLE PARTINERS</span>
          </div>
        </div>
        <span
          className={styles.partners_text}
          style={{ color: "var(--gray)", fontWeight: "normal" }}
        >
          OUR PARTNERS
        </span>
        <div className={styles.partners}>
          <img src={nb} alt="" />
          <img src={adidas} alt="" />
          <img src={nike} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
