'use client';

import styles from "@/styles/Showcase.module.css"
import TextPressure from "../reactBits/TextPressure/TextPressure";
import SplitText from "../reactBits/SplitText/reactBits/SplitText";

export default function Showcase() {
    return (
        <section id="showcase" className={styles.container}>
            <div className={styles.containerTextPressure}>
                <TextPressure
                    text="My Projects"
                    flex={true}
                    alpha={false}
                    stroke={false}
                    width={true}
                    weight={true}
                    italic={true}
                    textColor="#F5F5F5"
                    strokeColor="#ff0000"
                    minFontSize={36}
                />
            </div>
            <div className={styles.containerProjects}>
                <div className={styles.card}>
                    <SplitText
                        text="Title"
                        className="text-2xl font-semibold text-center font-[var(--font-montserrat)]"
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
                    <SplitText
                        text="Description"
                        className="text-sm font-semibold text-center font-[var(--font-montserrat)]"
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
                </div>
            </div>
        </section>
    )
}