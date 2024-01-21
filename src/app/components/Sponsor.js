import React from "react";
import { Space_Mono, Ubuntu } from "next/font/google";
import Image from "next/image";
import { useScramble } from "use-scramble";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const space_mono = Ubuntu({ weight: "400", subsets: ["latin"] });

export default function Sponsor() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const { ref: textRef, replay } = useScramble({
    text: "OUR SPONSORS",
    speed: 0.5,
    tick: 1,
    step: 1,
    scramble: 5,
    overdrive: false,
    playOnMount: false,
  });

  useEffect(() => {
    if (isInView) {
      replay();
    }
  }, [isInView]);

  return (
    <div className="sponsorContainer" ref={ref} id="sponsor">
      <h2
        className={space_mono.className + " welcomeTitle"}
        style={{ textAlign: "center" }}
        ref={textRef}
      />
      <img
        src="/assets/sponsors.svg"
        alt="Hoohacks 2024 Sponsors"
        style={{ width: "100vw" }}
      />
    </div>
  );
}
