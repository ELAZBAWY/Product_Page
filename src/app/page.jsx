import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
// import hero from "./images/hero.svg";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.col}>
        <h1 className={styles.title}>Your Best Online Shop Destination</h1>
        <p className={styles.description}>
          Discover a world of endless shopping possibilities at our online
          store. Browse, choose, and order your favorite products from the
          comfort of your home.
        </p>
        <Link href="/blog">
          <button className={styles.button}>Shop Now</button>
        </Link>
      </div>
      <div className={styles.col}>
        <img src="/images/hero.svg" alt="Hero image" className={styles.img} />
      </div>
    </div>
  );
}
