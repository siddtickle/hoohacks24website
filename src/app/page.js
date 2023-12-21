import Image from 'next/image';
import { Navbar } from './components/Navbar';
import styles from './globals.css';

export default function Home() {
  return (
    <main>
      <Navbar />
      <div style={{ position: 'relative', width: '100vw', height: '90vh' }}>
        <Image
          src="/assets/main_landing.png"
          alt="Landing Page"
          layout="fill"
          objectFit="cover"
        />
          <div className="overlayText">
          <h1>HooHacks 2024</h1>
          </div>
      </div>
    </main>
  );
}
