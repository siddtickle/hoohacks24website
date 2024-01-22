import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Space_Mono, Ubuntu } from "next/font/google";
import { useScramble } from "use-scramble";
import { useInView } from "framer-motion";
import { Replay } from "@mui/icons-material";
import styles from "../globals.css";

const space_mono = Space_Mono({ weight: "400", subsets: ["latin"] });
const ubuntu = Ubuntu({ weight: "400", subsets: ["latin"] });

export default function Welcome() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const { ref: textRef, replay } = useScramble({
    text: "Powered by a passionate team of UVA students, HooHacks is Virginia's largest hackathon and ranks among the top 50 biggest collegiate hackathons nationwide.  Our team also organizes Ideathon, a tech entrepreneurship pitching event, and a series of workshops & events year-round. Our mission is to foster entrepreneurship and innovation by making computer science more accessible + fun at UVA and beyond!",
    speed: 0.8,
    tick: 1,
    step: 10,
    scramble: 5,
    seed: 2,
    chance: 1,
    overdrive: true,
    overflow: false,
    playOnMount: false,
  });

  useEffect(() => {
    if (isInView) {
      replay();
    }
  }, [isInView]);

  return (
    <div id="about" className="welcomeContainer">
      <div className="welcomeBox">
        <div className="welcomeGap" />
        <h2
          className={ubuntu.className + " welcomeTitle"}
          style={{ textAlign: "center", marginBottom: 20 }}
          ref={ref}
        >
          WELCOME!
        </h2>
        <p
          className={space_mono.className + " welcomeText"}
          ref={textRef}
          style={{ textAlign: "center" }}
        ></p>
      </div>
      <img
        className="welcomeImage"
        src="/assets/lasers.png"
        alt="lasers"
        // style={{ width: "100vw", minHeight: 600, maxHeight: 800 }}
      />
    </div>
  );
}
