import React from "react";
import Image from "next/image";
import { Space_Mono } from "next/font/google";
import { FaInstagram, FaTwitter, FaDiscord } from "react-icons/fa";

const space_mono = Space_Mono({ weight: "400", subsets: ["latin"] });

export default function Newsletter() {
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className={`bg-gradient-to-r from-customColor1 to-customColor2 p-8 rounded-lg shadow-md border-3 border-customStrokeColor max-w-xl w-full ${space_mono.className}`}
      >
        <h2 className="text-2xl font-bold mb-4">Subscribe to our Newsletter</h2>

        <div className="mb-4">
          <label className="block text-gray-700 text-24 font-bold mb-2">
            First Name
          </label>
          <div className="flex items-center text-12">
            <p style={{ color: "#2AABF2", fontStyle: "italic" }}>hoohacks</p>
            <p>
              new.
              <span style={{ color: "#F78012" }}>user</span>
              <span style={{ color: "#00FF0A" }}>('First Name')</span>
            </p>
            <p>{">>"}</p>
            <p>to.newsletter</p>
          </div>
          <input
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="First Name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Last Name
          </label>
          <div className="flex items-center">
            <p style={{ color: "#2AABF2", fontStyle: "italic" }}>hoohacks</p>
            <p>
              new.
              <span style={{ color: "#F78012" }}>user</span>
              <span style={{ color: "#00FF0A" }}>('Last Name')</span>
            </p>
            <p>{">>"}</p>
            <p>to.newsletter</p>
          </div>
          <input
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="Last Name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <div className="flex items-center">
            <p style={{ color: "#2AABF2", fontStyle: "italic" }}>hoohacks</p>
            <p>
              new.
              <span style={{ color: "#F78012" }}>user</span>
              <span style={{ color: "#00FF0A" }}>('Email')</span>
            </p>
            <p>{">>"}</p>
            <p>to.newsletter</p>
          </div>
          <input
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="Email"
          />
        </div>

        <button
          className="bg-teal-500 text-white p-2 rounded-md w-full"
          type="submit"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
