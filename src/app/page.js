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
            <a
              className={
                space_mono.className +
                " bg-teal-700 hover:bg-teal-900 text-white font-bold py-3 px-10 text-l rounded-lg"
              }
              href="https://drive.google.com/file/d/1bJ1FpzB6wKJQAW3I_kDMudLm3t76S70H/view"
              target="_blank"
              style={{ marginLeft: "15px", marginTop: "10px" }}
            >
              SPONSOR
            </a>
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
