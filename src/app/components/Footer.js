// components/Footer.js
import React from "react";
import Image from "next/image";
import { Mohave } from "next/font/google";
import { FaInstagram, FaTwitter, FaDiscord, FaLinkedin, FaFacebook } from "react-icons/fa";

const mohave = Mohave({ weight: "400", subsets: ["latin"] });

export default function Footer() {
  return (
    <footer className="footerContainer flex flex-col items-center justify-center text-center">
      <Image src="/images/hoohacks-owl-logo.svg" width={75} height={75} />
      <div
        className="flex mt-4 mb-4"
        style={{ width: "140px", justifyContent: "space-between" }}
      >
        <a href="https://www.instagram.com/hoohacks">
          <FaInstagram size={24} />
        </a>
        <a href="https://www.facebook.com/hoohacks">
          <FaFacebook size={24} />
        </a>
        <a href="https://twitter.com/hoohacks">
          <FaTwitter size={24} />
        </a>
        <a href="https://www.linkedin.com/company/hoohacks">
          <FaLinkedin size={24} />
        </a>
      </div>
      <a className={mohave.className + " hover:text-teal-500"} target="_blank" href="https://hackp.ac/coc">MLH Code of Conduct</a>
      <p className={mohave.className}>
        &copy; 2024 HooHacks ~ Made in Charlottesville
      </p>
    </footer>
  );
}
