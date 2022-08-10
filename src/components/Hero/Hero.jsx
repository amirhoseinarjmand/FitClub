import React from "react";

// Components
import Header from "../Header/Header";
import NumberCounter from "number-counter";

// Css
import styles from "./Hero.module.css";

// Assets
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

// Animation
import { motion } from "framer-motion";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <div className={styles.hero} id="home">
      <div className={`blur ${styles.hero_blur}`}></div>
      <div className={styles.left_h}>
        <Header />

        {/* the_best_ad */}
        <div className={styles.the_best_ad}>
          <motion.div
            initial={{ left: mobile ? "165px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>

        {/* hero text */}
        <div className={styles.hero_text}>
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
              similique quos incidunt
            </span>
          </div>
        </div>

        {/* figures */}
        <div className={styles.figures}>
          <div>
            <span>
              <NumberCounter end={140} start={80} delay="4" preFix="+" />
            </span>
            <span>expert coach</span>
          </div>

          <div>
            <span>
              <NumberCounter end={978} start={700} delay="4" preFix="+" />
            </span>
            <span>members joined</span>
          </div>

          <div>
            <span>
              <NumberCounter end={50} start={15} delay="4" preFix="+" />
            </span>
            <span>fitness Programs</span>
          </div>
        </div>

        {/* hero buttons */}
        <div className={styles.hero_buttons}>
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      <div className={styles.right_h}>
        <button className="btn">Join Now</button>

        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className={styles.heart_rate}
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
      </div>

      {/* hero image */}
      <img src={hero_image} alt="" className={styles.hero_image} />
      <motion.img
        initial={{ right: "11rem" }}
        whileInView={{ right: "22rem" }}
        transition={transition}
        src={hero_image_back}
        alt=""
        className={styles.hero_image_back}
      />

      {/* calories */}
      <motion.div
        initial={{ right: "40rem" }}
        whileInView={{ right: "32rem" }}
        transition={transition}
        className={styles.calories}
      >
        <img src={Calories} alt="" />
        <div>
          <span>Calories Burned</span>
          <span>220 kcal</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
