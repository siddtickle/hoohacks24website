import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Space_Mono, Ubuntu, Mohave } from "next/font/google";
import { useScramble } from "use-scramble";
import { useInView } from "framer-motion";
import { Replay } from "@mui/icons-material";
import styles from "../globals.css";

const space_mono = Space_Mono({ weight: "400", subsets: ["latin"] });
const ubuntu = Ubuntu({ weight: "400", subsets: ["latin"] });
const mohave = Mohave({ weight: "400", subsets: ["latin"] });

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const { ref: textRef, replay: replay1 } = useScramble({
    text: "A hackathon is a 24-hour tech event for teams of students to learn new skills, build cool tech projects, and meet tons of other students and tech professionals. There's food, awesome workshops, and super cool swag. ",
    speed: 0.5,
    tick: 1,
    step: 10,
    scramble: 5,
    overdrive: true,
    playOnMount: false,
  });
  const { ref: textRef2, replay: replay2 } = useScramble({
    text: "There is absolutely no cost for attending UVA’s hackathon! We'll provide the resources for you to participate comfortably.",
    speed: 0.5,
    tick: 1,
    step: 10,
    scramble: 5,
    overdrive: true,
    playOnMount: false,
  });
  const { ref: textRef3, replay: replay3 } = useScramble({
    text: "If you are planning to compete for a prize, you may be in a team of 1-4 people. If you don't have one yet, no worries! We will have a team formation workshop before hacking begins.",
    speed: 0.5,
    tick: 1,
    step: 10,
    scramble: 5,
    overdrive: true,
    playOnMount: false,
  });
  const { ref: textRef4, replay: replay4 } = useScramble({
    text: "All current undergraduate, graduate, and high school students at least 16 years of age may attend HooHacks. <strong>No coding experience is necessary!</strong> Non-STEM majors, first-time hackers, and beginner coders are welcomed and encouraged to join us!",
    speed: 0.5,
    tick: 1,
    step: 10,
    scramble: 5,
    overdrive: true,
    playOnMount: false,
  });

  const { ref: textRef5, replay: replay5 } = useScramble({
    text: "Schedule, location, team information, and more.",
    speed: 0.5,
    tick: 1,
    step: 10,
    scramble: 5,
    overdrive: true,
    playOnMount: false,
  });
  const { ref: textRef6, replay: replay6 } = useScramble({
    text: "Feel free to contact us at <a href='mailto:team@hoohacks.io' style='text-decoration: underline; font-weight: bold;'>team@hoohacks.io</a> or message us on <a href='https://www.facebook.com/hoohacks' style='text-decoration: underline; font-weight: bold;'>Facebook</a> if you have any questions, concerns, or feedback!",
    speed: 0.5,
    tick: 1,
    step: 10,
    scramble: 5,
    overdrive: true,
    playOnMount: false,
  });

  useEffect(() => {
    if (isInView) {
      replay1();
      replay2();
      replay3();
      replay4();
      replay5();
      replay6();
    }
  }, [isInView]);

  return (
    <div className="FAQContainer" id="faq">
      <h3 className={space_mono.className + " FAQContainerTitle"} ref={ref}>
        Frequently Asked Questions
      </h3>
      <div className="FAQGrid">
        <div className="FAQItem">
          <h2
            className={space_mono.className + " FAQTitle"}
            style={{ textAlign: "center", marginBottom: 20 }}
            ref={ref}
          >
            What is a hackathon?
          </h2>
          <h3 className={space_mono.className + " FAQContent"} ref={textRef} />
        </div>

        <div className="FAQItem">
          <h2
            className={space_mono.className + " FAQTitle"}
            style={{ textAlign: "center", marginBottom: 20 }}
            ref={ref}
          >
            How much will it cost?
          </h2>
          <h3 className={space_mono.className + " FAQContent"} ref={textRef2} />
        </div>

        <div className="FAQItem">
          <h2
            className={space_mono.className + " FAQTitle"}
            style={{ textAlign: "center", marginBottom: 20 }}
            ref={ref}
          >
            Do I need a team?
          </h2>
          <h3 className={space_mono.className + " FAQContent"} ref={textRef3} />
        </div>

        <div className="FAQItem">
          <h2
            className={space_mono.className + " FAQTitle"}
            style={{ textAlign: "center", marginBottom: 20 }}
            ref={ref}
          >
            Who can attend?
          </h2>
          <h3 className={space_mono.className + " FAQContent"} ref={textRef4} />
        </div>

        <div className="FAQItem">
          <h2
            className={space_mono.className + " FAQTitle"}
            style={{ textAlign: "center", marginBottom: 20 }}
            ref={ref}
          >
            Coming Soon!
          </h2>
          <h3 className={space_mono.className + " FAQContent"} ref={textRef5} />
        </div>

        <div className="FAQItem">
          <h2
            className={space_mono.className + " FAQTitle"}
            style={{ textAlign: "center", marginBottom: 20 }}
            ref={ref}
          >
            Have more questions?
          </h2>
          <h3 className={space_mono.className + " FAQContent"} ref={textRef6} />
        </div>
      </div>
      <img src="/assets/FAQ.svg" alt="FAQ" className="FAQImage" />
    </div>
  );
}
