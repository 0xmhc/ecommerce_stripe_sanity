import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar,Footer } from "./components";
import { StateContext } from "./context/StateContext"
import {Toaster} from "react-hot-toast"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chrono365",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <StateContext>
          <header>
          <Navbar />
        </header>
        <main className="main-container">
          <Toaster/>
          {children}
        </main>
        <footer>
            <Footer />
        </footer>
    </StateContext>
        </body>
    </html>
  );
}
