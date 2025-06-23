'use client'

import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Aurora from "../reactBits/Aurora/Aurora";
import RotatingText from "../reactBits/RotatingText/RotatingText";
import SplitText from "../reactBits/SplitText/reactBits/SplitText";
import { ArrowDown } from "@deemlol/next-icons";

export default function Home() {
    return (
        <section id="home" className={styles.container}>
            <Aurora
                colorStops={["#ff66ff", "#6666ff", "#ff66ff"]}
                blend={0.5}
                amplitude={1.0}
                speed={0.7}
            />
            <div className={styles.infoContainer}>
                <div className={styles.imageContainer}>
                    <Image src="/pfp.png" alt="PFP" fill/>
                </div>
                <div className={styles.textContainer}>
                    <SplitText
                        text="Hi! I'm"
                        className={styles.splitText}
                        delay={100}
                        duration={0.6}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                    />
                    <RotatingText
                        texts={['Sirius.', 'Batman.', 'dev.']}
                        mainClassName={styles.rotatingText}
                        staggerFrom={"last"}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        transition={{ type: "spring", damping: 40, stiffness: 500 }}
                        rotationInterval={5000}
                    />
                </div>
            </div>
            <ArrowDown
                className={styles.arrowDown}
                size={24}
                color={'#666'}
            />
        </section>
    )
}