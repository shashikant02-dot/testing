import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "RoiScale",
  description: "Scale your e-commerce ROI with smarter tools.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Footer/>
        {children}
      </body>
    </html>
  );
}