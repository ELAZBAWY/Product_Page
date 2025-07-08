"use client"
import { useContext } from "react";
import styles from "./darkmodetoggle.module.css";
import { ThemContext } from "app/context/themecontex";

export default function DarekModeToggle() {
  const{mode , toggle} = useContext(ThemContext)
  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>🌞</div>
      <div className={styles.icon}>🌘</div>
      <div
        className={styles.switcher}
        style={{
          transition: ".5s",
          ...(mode === "light" ? { left: "2px" } : { right: "2px" }),
        }}
      />
    </div>
  );
}
