import { Montserrat, Geist_Mono, Lalezar } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import { ThemeProvider } from "./context/themecontex";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "900", "700"], // ✅ تأكد إنها مكتوبة كـ literals (من غير backticks)
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lalezar = Lalezar({
  subsets: ["arabic"],
  weight: "400",
  variable: "--font-lalezar",
});

// export default lalezar;

export const metadata = {
  title: "HEXASHOP",
  description:
    "  Explore the latest tech products including cutting-edge smartphones and high-performance laptops. Each item is carefully selected to meet your modern needs in speed, design, and innovation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ThemeProvider>
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
