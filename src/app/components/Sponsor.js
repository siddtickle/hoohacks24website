import React from "react";
import { Space_Mono, Ubuntu } from "next/font/google";
import Image from "next/image";
import { useScramble } from "use-scramble";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ubuntu = Ubuntu({ weight: "400", subsets: ["latin"] });

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

  const { ref: textRef2, replay: replay2 } = useScramble({
    text: "OUR PARTNERS",
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
      replay2();
    }
  }, [isInView]);

  return (
    <div className="sponsorContainer" ref={ref} id="sponsor">
      <h2 className={ubuntu.className + " welcomeTitle"} ref={textRef} />
      <img src="/assets/sponsors.png" alt="Hoohacks 2024 Sponsors" />
      <h2 style={{marginTop: 40}}className={ubuntu.className + " welcomeTitle"} ref={textRef2} />
      <img src="/assets/partners.png" alt="Hoohacks 2024 Partners" />
    </div>
  );
}
