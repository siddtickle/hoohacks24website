import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Space_Mono, Ubuntu, Mohave } from 'next/font/google';
import { useScramble } from 'use-scramble';
import { useInView } from 'framer-motion';
import { Replay } from '@mui/icons-material';
import styles from '../globals.css';

const space_mono = Space_Mono({ weight: '400', subsets: ['latin'] });
const ubuntu = Ubuntu({ weight: '400', subsets: ['latin'] });
const mohave = Mohave({ weight: '400', subsets: ['latin'] });

export default function Statistics() {

    const ref = useRef(null);
    const isInView= useInView(ref, {once: true});

    const { ref: textRef, replay: replay1 } = useScramble({
    text: "600+ Hackers",
    speed: 0.3,
    tick: 1,
    step: 1,
    scramble: 5,
    overdrive: false,
    playOnMount: false,
    });
    const { ref: textRef2, replay: replay2 } = useScramble({
        text: "24 Hours",
        speed: 0.3,
        tick: 1,
        step: 1,
        scramble: 5,
        overdrive: false,
        playOnMount: false,
    });
    const { ref: textRef3, replay: replay3 } = useScramble({
        text: "100+ Projects",
        speed: 0.3,
        tick: 1,
        step: 1,
        scramble: 5,
        overdrive: false,
        playOnMount: false,
    });
    const { ref: textRef4, replay: replay4 } = useScramble({
        text: "$10,000 in Prizes",
        speed: 0.3,
        tick: 1,
        step: 1,
        scramble: 5,
        overdrive: false,
        playOnMount: false,
    });


    useEffect(() => {
    if (isInView) {
        replay1();
        replay2();
        replay3();
        replay4();
    }
    }, [isInView]);

    return(
        <div className="statsContainer">
            <div>
                <h3 className={space_mono.className+" statsTitle"} ref={ref}>Loading data from HooHacks_2023...</h3>
                <h2 className={mohave.className +" statsNumber"} ref={textRef}/>
                <h2 className={mohave.className +" statsNumber"} ref={textRef2}/>
                <h2 className={mohave.className +" statsNumber"} ref={textRef3}/>
                <h2 className={mohave.className +" statsNumber"} ref={textRef4}/>
            </div>
                <img src="/assets/car.svg" alt="car" className='carImage'/>
        </div>
    )

}
