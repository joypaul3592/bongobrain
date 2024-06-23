import AOSInit from "./AOSInit";
import "./assets/styles/globals.css";
import { Space_Grotesk } from "next/font/google";
import Navbar from "./components/sheard/common/navbar/Navbar";
import Footer from "./components/sheard/common/footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "BrongoBrain - A Tech Solutions",
  description: "Where Ideas Meet Impeccable Execution - Welcome to BrongoBrain",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AOSInit />
      <body className={spaceGrotesk.className}>
        <div className=" bg-[#111204]">
          <Navbar />
          <div className=" container mx-auto 2xl:px-20 xl:px-10 px-2 z-[10]">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
