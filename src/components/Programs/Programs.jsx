import React from "react";

// Css
import styles from "./Programs.module.css";

// Data
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";

function Programs() {
  return (
    <div className={styles.programs} id="programs">
      {/* header */}
      <div className={styles.programs_header}>
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">to shape you</span>
      </div>

      <div className={styles.program_categories}>
        {programsData.map((program,i) => (
          <div key={i} className={styles.category}>
            {program.image}
            <span> {program.heading} </span>
            <span> {program.details} </span>
            <div className={styles.join_now}>
              <span>Join Now</span>
              <img src={RightArrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Programs;
