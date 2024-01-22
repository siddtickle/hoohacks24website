import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Space_Mono, Ubuntu, Mohave } from "next/font/google";
import { useScramble } from "use-scramble";
import { useInView } from "framer-motion";
import { Replay } from "@mui/icons-material";
import styles from "../globals.css";

import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

const space_mono = Space_Mono({ weight: "400", subsets: ["latin"] });
const ubuntu = Ubuntu({ weight: "400", subsets: ["latin"] });
const mohave = Mohave({ weight: "400", subsets: ["latin"] });

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const { ref: textRef, replay: replay1 } = useScramble({
    text: "A hackathon is a 24-hour tech event for teams of students to learn new skills, build cool tech projects, and meet tons of other students and tech professionals. There's food, awesome workshops, and super cool swag. ",
    speed: 0,
    tick: 0,
    step: 0,
    scramble: 0,
    overdrive: false,
    playOnMount: false,
  });
  const { ref: textRef2, replay: replay2 } = useScramble({
    text: "There is absolutely no cost for attending UVA’s hackathon! We'll provide the resources for you to participate comfortably.",
    speed: 0,
    tick: 0,
    step: 0,
    scramble: 0,
    overdrive: false,
    playOnMount: false,
  });
  const { ref: textRef3, replay: replay3 } = useScramble({
    text: "If you are planning to compete for a prize, you may be in a team of 1-4 people. If you don't have one yet, no worries! We will have a team formation workshop before hacking begins.",
    speed: 0,
    tick: 0,
    step: 0,
    scramble: 0,
    overdrive: false,
    playOnMount: false,
  });
  const { ref: textRef4, replay: replay4 } = useScramble({
    text: "All current undergraduate, graduate, and high school students at least 16 years of age may attend HooHacks. <strong>No coding experience is necessary!</strong> Non-STEM majors, first-time hackers, and beginner coders are welcomed and encouraged to join us!",
    speed: 0,
    tick: 0,
    step: 0,
    scramble: 0,
    overdrive: false,
    playOnMount: false,
  });

  const { ref: textRef5, replay: replay5 } = useScramble({
    text: "Schedule, location, team information, and more.",
    speed: 0,
    tick: 0,
    step: 0,
    scramble: 0,
    overdrive: false,
    playOnMount: false,
  });
  const { ref: textRef6, replay: replay6 } = useScramble({
    text: "Feel free to contact us at <a href='mailto:team@hoohacks.io' style='text-decoration: underline; font-weight: bold;'>team@hoohacks.io</a> or message us on <a href='https://www.facebook.com/hoohacks' style='text-decoration: underline; font-weight: bold;'>Facebook</a> if you have any questions, concerns, or feedback!",
    speed: 0,
    tick: 0,
    step: 0,
    scramble: 0,
    overdrive: false,
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
    <>
      <div id="faq" className="FAQContainer">
        <div className="FAQGrid">
          <div className="FAQItem">
            <h2
              className={space_mono.className + " FAQTitle"}
              style={{ textAlign: "center", marginBottom: 20 }}
              ref={ref}
            >
              What is a hackathon?
            </h2>
            <h3
              className={space_mono.className + " FAQContent"}
              ref={textRef}
            />
          </div>

          <div className="FAQItem">
            <h2
              className={space_mono.className + " FAQTitle"}
              style={{ textAlign: "center", marginBottom: 20 }}
              ref={ref}
            >
              How much will it cost?
            </h2>
            <h3
              className={space_mono.className + " FAQContent"}
              ref={textRef2}
            />
          </div>

          <div className="FAQItem">
            <h2
              className={space_mono.className + " FAQTitle"}
              style={{ textAlign: "center", marginBottom: 20 }}
              ref={ref}
            >
              Do I need a team?
            </h2>
            <h3
              className={space_mono.className + " FAQContent"}
              ref={textRef3}
            />
          </div>

          <div className="FAQItem">
            <h2
              className={space_mono.className + " FAQTitle"}
              style={{ textAlign: "center", marginBottom: 20 }}
              ref={ref}
            >
              Who can attend?
            </h2>
            <h3
              className={space_mono.className + " FAQContent"}
              ref={textRef4}
            />
          </div>

          <div className="FAQItem">
            <h2
              className={space_mono.className + " FAQTitle"}
              style={{ textAlign: "center", marginBottom: 20 }}
              ref={ref}
            >
              Coming Soon!
            </h2>
            <h3
              className={space_mono.className + " FAQContent"}
              ref={textRef5}
            />
          </div>

          <div className="FAQItem">
            <h2
              className={space_mono.className + " FAQTitle"}
              style={{ textAlign: "center", marginBottom: 20 }}
              ref={ref}
            >
              Have more questions?
            </h2>
            <h3
              className={space_mono.className + " FAQContent"}
              ref={textRef6}
            />
          </div>
        </div>
        <img src="/assets/FAQ.svg" alt="FAQ" className="FAQImage" />
      </div>
      <div id="faq" className="FAQContainer2">
        <h3 className={space_mono.className + " FAQContainerTitle"} ref={ref}>
          Frequently Asked Questions
        </h3>
        <div className="faqaccordionContainer">
          <Accordion
            sx={{
              backgroundColor: "#2a3a3a",
              color: "#FFF",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              What is a hackathon?
            </AccordionSummary>
            <AccordionDetails>
              A hackathon is a 24-hour tech event for teams of students to learn
              new skills, build cool tech projects, and meet tons of other
              students and tech professionals. There's food, awesome workshops,
              and super cool swag.
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              backgroundColor: "#2a3a3a",
              color: "#FFF",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              How much will it cost?
            </AccordionSummary>
            <AccordionDetails>
              There is absolutely no cost for attending UVA’s hackathon! We'll
              provide the resources for you to participate comfortably.
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              backgroundColor: "#2a3a3a",
              color: "#FFF",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              Do I need a team?
            </AccordionSummary>
            <AccordionDetails>
              If you are planning to compete for a prize, you may be in a team
              of 1-4 people. If you don't have one yet, no worries! We will have
              a team formation workshop before hacking begins.
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              backgroundColor: "#2a3a3a",
              color: "#FFF",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              Who can attend?
            </AccordionSummary>
            <AccordionDetails>
              All current undergraduate, graduate, and high school students at
              least 16 years of age may attend HooHacks. No coding experience is
              necessary! Non-STEM majors, first-time hackers, and beginner
              coders are welcomed and encouraged to join us!
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              backgroundColor: "#2a3a3a",
              color: "#FFF",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              Coming Soon!
            </AccordionSummary>
            <AccordionDetails>
              Schedule, location, team information, and more.
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              backgroundColor: "#2a3a3a",
              color: "#FFF",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              Have more questions?
            </AccordionSummary>
            <AccordionDetails>
              Feel free to contact us at <a href='mailto:team@hoohacks.io' class="text-orange-500">team@hoohacks.io</a> or message us on 
              <a href='https://www.facebook.com/hoohacks'class="text-orange-500"> Facebook</a> if you have any questions, concerns, or feedback!
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </>
  );
}
