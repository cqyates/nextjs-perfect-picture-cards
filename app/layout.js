import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header.jsx"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Perfect Picture Cards",
  description: "A gift card generator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
