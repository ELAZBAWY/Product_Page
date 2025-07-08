import styles from "./navbar.module.css";
import Link from "next/link";
import { links } from "./data";
import Button from "../../elements/button/button";
import { Geist, Geist_Mono, Lalezar } from "next/font/google";
import Logo from "app/elements/logo/logo";
import DarekModeToggle from "../darkmodetoggle/darkmodetoggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function Navbar() {
  return (
    <div className={styles.container}>
      <Logo/>
      <div className={styles.links}>
        <DarekModeToggle/>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        <Button />
      </div>
    </div>
  );
}

