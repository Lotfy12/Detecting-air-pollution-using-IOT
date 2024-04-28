import ArdunioDescriptions from "./ArdunioDescriptions";
import bg1 from "../../public/img/Air.png";
import styles from "../App.module.css";
import React from "react";

function Arduino() {
  return (
    <body className={styles.app} style={{ backgroundImage: `url(${bg1})` }}>
      <div className={`${styles.overlay} ${styles.moveElements}`}>
        <div className={styles.container1}>
          <div className={styles.section_temperature}>
            <div className={styles.icon}>
              <img src="../public/img/icon (2).png" alt="weatherIcon" />
              <h3>description</h3>
            </div>
            <div className={styles.temperature}>
              <h1>x °C </h1>
            </div>
          </div>
          <ArdunioDescriptions />
        </div>
      </div>
    </body>
  );
}

export default Arduino;
