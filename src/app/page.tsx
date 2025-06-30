"use client"

import { motion } from "framer-motion"

import dynamic from 'next/dynamic';



const HeroSection = dynamic(() => import('./_components/hero-section'), { ssr: false });
const MySkills = dynamic(() => import('./_components/skills'), { ssr: false });
const AboutSection = dynamic(() => import('./_components/about/about'), { ssr: false });
const WorkProcessSection = dynamic(() => import('./_components/work-process/work-process'), { ssr: false });

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
