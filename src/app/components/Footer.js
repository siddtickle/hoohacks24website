// components/Footer.js
import React from "react";
import Image from "next/image";
import { Mohave } from "next/font/google";
import { FaInstagram, FaTwitter, FaDiscord } from "react-icons/fa";

const mohave = Mohave({ weight: "400", subsets: ["latin"] });

export default function Footer() {
  return (
    <footer className="text-white">
      <div className="container mx-auto flex flex-col items-center justify-center mt-8">
        <Image src="/images/hoohacks-owl-logo.svg" width={75} height={75} />
        <div
          className="flex mt-4 mb-4"
          style={{ width: "140px", justifyContent: "space-between" }}
        >
          <a href="https://www.instagram.com/hoohacks">
            <FaInstagram size={24} />
          </a>
          <a href="https://twitter.com/hoohacks">
            <FaTwitter size={24} />
          </a>
          <a href="https://discord.com/">
            <FaDiscord size={24} />
          </a>
        </div>
        <p className={mohave.className}>
          &copy; 2024 HooHacks ~ Made in Charlottesville
        </p>
      </div>
    </footer>
  );
}
