import Link from "next/link"
import styles from "./logo.module.css";
import { Geist} from "next/font/google";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function Logo() {
return (
    
<Link href="/" className={`${styles.logo} ${geistSans.className}`}>
  HEXASHOP
</Link>
)    
}

