import React from "react";

// Css
import styles from "./Plans.module.css";

// Data
import { plansData } from "../../data/plansData";

// Assets
import whiteTick from "../../assets/whiteTick.png";

const Plans = () => {
  return (
    <div className={styles.plans_container}>
      <div className={`blur ${styles.plans_blur_1}`}></div>
      <div className={`blur ${styles.plans_blur_2}`}></div>
      <div className={styles.programs_header}>
        <span className="stroke-text">ready to start</span>
        <span>your journey</span>
        <span className="stroke-text">now withus</span>
      </div>

      {/* plans card */}
      <div className={styles.plans_card_container} id="plans">
        {plansData.map((plan, i) => {
          return (
            <div key={i} className={styles.plan}>
              {plan.icon}
              <span> {plan.name} </span>
              <span> {plan.price} </span>

              <div className={styles.features}>
                {plan.features.map((feature, i) => {
                  return (
                    <div className={styles.feature}>
                      <img src={whiteTick} alt="" />
                      <span key={i}>{feature}</span>
                    </div>
                  );
                })}
              </div>

              <div>
                <span> See more benefits -> </span>
              </div>
              <button className="btn">Join now</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Plans;
