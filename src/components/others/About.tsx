'use client'

import styles from "@/styles/About.module.css"
import ScrollReveal from "../reactBits/ScrollReveal/ScrollReveal"

export default function About() {
    return (
        <section id="about" className={styles.containerAbout}>
            <div className={styles.scrollRevealContainer}>
                <ScrollReveal
                    enableBlur={true}
                    baseRotation={20}
                    blurStrength={10}
                    textClassName="font-semibold text-sm leading-relaxed font-[var(--font-montserrat)]"
                    containerClassName="flex justify-center items-center relative w-[clamp(264px,80vw,664px)]"
                >
                    Passionate about coding, tech and entrepreuneurship, I am willing to create the best apps for people (but also for me).
                </ScrollReveal>
                <ScrollReveal
                    enableBlur={true}
                    baseRotation={20}
                    blurStrength={10}
                    textClassName="font-semibold text-sm leading-relaxed font-[var(--font-montserrat)]"
                    containerClassName="flex justify-center items-center relative w-[clamp(264px,80vw,664px)]"
                >
                    I am a 16 years old student in France. Currently in hight school, 
                    I am learning on my own coding and all the tech stuff.
                </ScrollReveal>
                <ScrollReveal
                    enableBlur={true}
                    baseRotation={20}
                    blurStrength={10}
                    textClassName="font-semibold text-sm leading-relaxed font-[var(--font-montserrat)]"
                    containerClassName="flex justify-center items-center relative w-[clamp(264px,80vw,664px)]"
                >
                    I build things that I love - productivity apps, games, etc.
                    Why do I build? I am willing to learn and improve my skills. 
                    That is why I am constantly working on new projects.
                </ScrollReveal>
                <ScrollReveal
                    enableBlur={true}
                    baseRotation={20}
                    blurStrength={10}
                    textClassName="font-semibold text-sm leading-relaxed font-[var(--font-montserrat)]"
                    containerClassName="flex justify-center items-center relative w-[clamp(264px,80vw,664px)]"
                >
                    Oh, I forgot to say!
                    I am also a passionate about philosophy & I love poker. 
                </ScrollReveal>
                <ScrollReveal
                    enableBlur={true}
                    baseRotation={20}
                    blurStrength={10}
                    textClassName="font-semibold text-sm leading-relaxed font-[var(--font-montserrat)]"
                    containerClassName="flex justify-center items-center relative w-[clamp(264px,80vw,664px)]"
                >
                    "Life is risky. Proof? You won't get out of it alive."
                </ScrollReveal>
            </div>
        </section>
    )
}
