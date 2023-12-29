// components/Navbar.js

import Link from "next/link";
import { Mohave } from "next/font/google";

const mohave = Mohave({ weight: "400", subsets: ["latin"] });

const Navbar = () => {
  return (
    <>
      <nav className="bg-customColor p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link legacyBehavior href="/">
              <img
                src="/images/hoohacks-owl-logo.svg"
                alt="Hoohacks Logo"
                className="h-10"
              />
            </Link>
          </div>

          <div
            className={
              mohave.className + " hidden md:flex items-center space-x-4"
            }
          >
            <Link legacyBehavior href="/">
              <a className="text-white">Home</a>
            </Link>
            <Link legacyBehavior href="/about">
              <a className="text-white">About</a>
            </Link>
            <Link legacyBehavior href="/faq">
              <a className="text-white">FAQ</a>
            </Link>
            <Link legacyBehavior href="/sponsors">
              <a className="text-white">Sponsors</a>
            </Link>
            <Link legacyBehavior href="/newsletter">
              <a className="text-white">Newsletter</a>
            </Link>
          </div>
          <div>{/* placeholder */}</div>
          <div className="md:hidden">{/* hide buttons when small */}</div>
        </div>
      </nav>

      {/* MLH Banner */}
      <a
        id="mlh-trust-badge"
        style={{
          display: "block",
          maxWidth: "100px",
          minWidth: "60px",
          position: "fixed",
          right: "50px",
          top: "0",
          width: "10%",
          zIndex: "10000",
        }}
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=black"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-black.svg"
          alt="Major League Hacking 2024 Hackathon Season"
          style={{ width: "100%" }}
        />
      </a>
    </>
  );
};

export default Navbar;
