import { Inter } from "next/font/google";
import "./styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HooHacks 2024",
  description: "See you on March 23!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="images/hoohacks-navbar-logo.png" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
