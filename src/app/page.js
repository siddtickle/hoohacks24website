"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import styles from "./globals.css";
import { Space_Mono, Ubuntu } from "next/font/google";
import { useScramble } from "use-scramble";
import ShareLocationIcon from "@mui/icons-material/ShareLocation";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Welcome from "./components/Welcome";
import Statistics from "./components/Statistics";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import Sponsor from "./components/Sponsor";
import WordCloud from "./components/WordCloud";
import Popup from "reactjs-popup";

const space_mono = Space_Mono({ weight: "400", subsets: ["latin"] });
const ubuntu = Ubuntu({ weight: "400", subsets: ["latin"] });

export default function Home() {
  const { ref } = useScramble({
    text: "HooHacks_2024",
    speed: 0.3,
    tick: 1,
    step: 1,
    scramble: 5,
    overdrive: false,
  });
  return (
    <main style={{ overflow: "hidden", marginBottom: 50 }}>
      <div id="home" className="relative">
        <Navbar />
        <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
          <Image
            src="/assets/main_landing.png"
            alt="Landing Page"
            layout="fill"
            objectFit="cover"
            priority={true}
          />
        </div>
        <div className="overlayText">
        <h1
          className={space_mono.className}
          style={{ fontWeight: "Bold", marginTop: 25 }}
          ref={ref}
        />
        <div className="overlayButtons">
          <div className="dateLocation">
            <h2 className={ubuntu.className}>
              <CalendarMonthIcon style={{ marginTop: -5 }} /> March 23-24
            </h2>
            <h2 className={ubuntu.className}>
              <ShareLocationIcon style={{ marginTop: -5, marginRight: 5 }} />
              University of Virginia
            </h2>
          </div>
          <div style={{height:300}}>
            <a
              className={
                space_mono.className +
                " bg-teal-700 hover:bg-teal-900 text-white font-bold py-3 px-10 text-l rounded-lg"
              }
              href="https://app.hoohacks.io"
              target="_blank"
            >
              REGISTER
            </a>
            <Popup trigger={<a
              className={
                space_mono.className +
                " bg-teal-700 hover:bg-teal-900 text-white font-bold py-3 px-10 text-l rounded-lg"
              }
              target="_blank"
              style={{ marginLeft: "15px", marginTop: "10px", cursor: "pointer"}}
            >
              SPONSOR
            </a>} position="top center" modal="true">
              <div style={{height:"80vh", textAlign:"left",margin:50}}>
                <img src="/images/hoohacks-owl-logo-dark.svg" alt="HooHacks logo" style={{width:"100px"}}/>
                <h1 className={space_mono.className} style={{marginTop:"20px", color:"black", fontSize:40,  marginBottom:30}}>Interested in sponsoring HooHacks 2024?</h1>
                <p className={ubuntu.className} style={{color:"black", marginBottom:30,  fontSize:20, textAlign:"left"}}>
                <b>WHAT?</b> HooHacks is Virginia's biggest hackathon as well as one of the top 50 collegiate hackathons in the world! Last year we had over 1,000 hackers register and over 600 join us in-person having traveled from all over the eastern U.S.<br></br><br></br>
                <b>Why?</b> Sponsors have the opportunity to review students' innovative and creative solutions to company-specific challenges, network 1:1, recruit talent, and hold workshops with ambitious students, and build brand awareness on UVA's campus. <br></br><br></br>
                <b>How?</b> Email us and learn more about sponsorship opportunities by clicking the button below! <br></br><br></br>
                <b>⚠️The deadline to confirm a sponsorship is February 23.</b>
                </p>
                  <a
                  className={
                    space_mono.className +
                    " bg-teal-700 hover:bg-teal-900 text-white font-bold py-3 px-10 text-l rounded-lg"
                  }
                  href="mailto:team@hoohacks.io"
                  target="_blank"
                  style={{marginTop: "10px" }}
                >
                  Contact Us
                </a>
              </div>
            </Popup>
          </div>
        </div>
      </div>
      </div>

      <Welcome />
      <Statistics />
      <FAQ />
      <Sponsor />
      <Newsletter />
      <WordCloud />
      <Footer />
    </main>
  );
}
