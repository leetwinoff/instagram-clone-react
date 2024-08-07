import React from "react";
import styles from "./homepage.module.css";
import Navigation from "./Navigation";
import TimeLine from "./TimeLine";

export default function Homepage() {
  return (
    <div className={styles.homepage}>
      <div className={styles.homepage__nav}>
        <Navigation />
      </div>
      <div className={styles.homepage__timeline}>
        <TimeLine />
      </div>
    </div>
  );
}
