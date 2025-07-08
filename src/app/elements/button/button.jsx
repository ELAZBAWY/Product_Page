"use client";
import styles from "./button.module.css";

export default function Button() {
  return (
    <button
      className={styles.logout}
      onClick={() => {
        console.log("logout");
      }}
    >
      Logout
    </button>
  );
}
