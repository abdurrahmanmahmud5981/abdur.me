"use client"

import { motion } from "framer-motion"

import dynamic from 'next/dynamic';
import { HeroSection } from "./components/hero-section";


const MySkills = dynamic(() => import('./components/skills'), { ssr: false });
const AboutSection = dynamic(() => import('./components/about/about'), { ssr: false });
const WorkProcessSection = dynamic(() => import('./components/work-process/work-process'), { ssr: false });

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <HeroSection />
      <MySkills />
      <AboutSection />

      <WorkProcessSection />
    </motion.div>

  );
}
