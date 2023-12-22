'use client'
import Image from 'next/image';
import { Navbar } from './components/Navbar';
import styles from './globals.css';
import { Space_Mono, Ubuntu } from 'next/font/google'
import { useScramble } from 'use-scramble';
import ShareLocationIcon from '@mui/icons-material/ShareLocation';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

 
const space_mono = Space_Mono({ weight: '400', subsets: ['latin']})
const ubuntu = Ubuntu({ weight: '400', subsets: ['latin']})


export default function Home() {
  const { ref } = useScramble({
    text: 'HooHacks_2024',
    speed: 0.3,
    tick: 1,
    step: 1,
    scramble: 5,
    overdrive: false
  });
  return (
    <main>
      <Navbar />
      <div style={{ position: 'relative', width: '100vw', height: '95vh' }}>
        <Image
          src="/assets/main_landing.png"
          alt="Landing Page"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="overlayText" >
      <h1 className={space_mono.className} style={{fontWeight:"Bold"}} ref={ref}/>
      <div className="overlayButtons">
        <div style={{display:"flex", fontSize:30, textAlign:"left"}}>
        <h2 className={ubuntu.className} ><CalendarMonthIcon style={{marginTop:-5}}/> March 23-24</h2>
        <h2 className={ubuntu.className} style={{marginLeft:20}}><ShareLocationIcon style={{marginTop:-5, marginRight:5}}/>University of Virginia</h2>
      </div>
      <div style={{textAlign:"left"}}>
      <button className="bg-orange-400 hover:bg-gray-500 text-white font-bold py-3 px-10 text-xl rounded-full">Register</button>
      <button className="bg-orange-400 hover:bg-gray-500 text-white font-bold py-3 px-10 text-xl rounded-full" style={{ marginLeft: "30px", marginTop:"10px" }}>Sponsor</button>
      </div>
      </div>
      </div>
     
    </main>
  );
}
