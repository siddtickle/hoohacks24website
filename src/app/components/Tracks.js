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

export default function Tracks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const { ref: textRef, replay } = useScramble({
    text: "PRIZE TRACKS",
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
    <div id="tracks" className="TracksContainer">
      <div className={space_mono.className + " TracksAccordionContainer"}>
        <h3 className={ubuntu.className + " TracksTitle"} ref={textRef} />
        <div className="tracksaccordionContainer">
          <p class="TracksSubtitle">
            This year, we have 7 different tracks participants can choose from
            to submit a project to. As a reminder, these prompts are simply to
            help spark ideas-- you can either answer one of the following
            prompts or let your imagination run free and see which track fits!
          </p>
          <Accordion
            sx={{
              backgroundColor: "#2a3a3a",
              color: "#FFF",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ fill: "#FFF" }} />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Accessibility and Empowerment
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li>
                  How can global climate change initiatives be more accessible
                  and feasible for developing countries to implement?
                </li>
                <li>
                  How can video conferencing platforms be modified to be more
                  accessible for people with auditory and visual impairments?
                </li>
                <li>
                  Food deserts are communities without access to food with
                  nutritional value. How can we provide communities with the
                  means to access nutrition?
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              backgroundColor: "#2a3a3a",
              color: "#FFF",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ fill: "#FFF" }} />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Art and Gaming
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li>
                  What creative outlets could be viable on a global scale to
                  encourage online connectivity?
                </li>
                <li>
                  How can we best bring attention to lesser known artistic
                  communities?
                </li>
                <li>
                  Can we modernize past formats for games and give it a new
                  spin?
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              backgroundColor: "#2a3a3a",
              color: "#FFF",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ fill: "#FFF" }} />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Data Science
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li>
                  Design an application that allows users to upload pictures of
                  trash and predicts when it is recyclable or compostable
                </li>
                <li>Make a browser extension that detects fake news</li>
                <li>
                  Build an interactive map of Charlottesville overlaid with
                  historic sites and their information
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              backgroundColor: "#2a3a3a",
              color: "#FFF",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ fill: "#FFF" }} />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Education
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li>
                  How can online learning be more fun and engaging for young
                  students? Come up with a tool educators can integrate into
                  their current curriculum
                </li>
                <li>How can we encourage students to stay organized?</li>
                <li>
                  How can we create a positive and uplifting community of
                  teachers? Examples include creating an application where
                  teachers can share and upload resources that have helped their
                  classes, or creating an algorithm to find the most useful
                  resource for a teacher based on their needs
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              backgroundColor: "#2a3a3a",
              color: "#FFF",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ fill: "#FFF" }} />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Finance
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li>
                  Design and build an applications to calculate a user’s credit
                  score.
                </li>
                <li>
                  Use machine learning to track a user’s spending habits by
                  categorizing purchases, alerting the user for repeat
                  purchases, etc.
                </li>
                <li>
                  Identify an area in which the experience of banking can be
                  enhanced and build an application to improve it
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              backgroundColor: "#2a3a3a",
              color: "#FFF",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ fill: "#FFF" }} />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Health
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li>
                  How can we get people to work out while they may be stuck at
                  home? Be sure to take into account a user’s time restraints
                  and the limited equipment they may have at home
                </li>
                <li>
                  How can we incentivize healthy eating and dieting habits?
                </li>
                <li>
                  How can we help people focus on and improve their mental
                  health?
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              backgroundColor: "#2a3a3a",
              color: "#FFF",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ fill: "#FFF" }} />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Sustainability
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li>
                  What small changes could contribute to aiding global
                  sustainability efforts when gradually implemented by
                  communities at large?
                </li>
                <li>
                  As the world adjusts to newer technologies, how can we prevent
                  efforts against sustainability?
                </li>
                <li>
                  How can we bring more awareness and promote eco-friendly
                  options?
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
