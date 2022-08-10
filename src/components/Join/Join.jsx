import React from "react";

// Css
import styles from "./Join.module.css";

// Hook
import { useRef } from "react";

const Join = () => {
  const form = useRef();

  const showRef = (e) => {
    e.preventDefault();

    console.log(`Your addres email is : ${form.current.value}`);
    form.current.value = "";
  };

  return (
    <div className={styles.join} id="join-us">
      <div className={styles.left_j}>
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span> LEVEL UP</span>
        </div>

        <div>
          <span className="stroke-text">YOUR BODY</span>
          <span> WHIT US?</span>
        </div>
      </div>
      <div className={styles.right_j}>
        <form action="" className={styles.email_container}>
          <input
            ref={form}
            type="email"
            name="user_email"
            placeholder="Enter your Email address"
          />
          <button onClick={showRef} className={styles.byn_j}>
            Join Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Join;
