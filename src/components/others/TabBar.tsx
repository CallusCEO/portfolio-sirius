'use client';

import styles from "@/styles/TabBar.module.css";
import Dock from "../reactBits/Dock/Dock";
import { House, Archive, Heart, User  } from "@deemlol/next-icons"


export default function TabBar() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
      
    const items = [
        { icon: <House size={18} />, label: 'Home', onClick: () => scrollToSection('home') },
        { icon: <User size={18} />, label: 'About Me', onClick: () => scrollToSection('about') },
        { icon: <Archive size={18} />, label: 'Showcase', onClick: () => scrollToSection('showcase') },
        { icon: <Heart size={18} />, label: 'Contact', onClick: () => scrollToSection('contact') },
      ];

    return (
        <div className={styles.container}>
            <Dock 
                items={items}
                panelHeight={48}
                baseItemSize={52}
                magnification={64}
            />
        </div>
    )
}