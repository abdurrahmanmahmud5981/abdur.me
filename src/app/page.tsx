"use client"

import { motion } from "framer-motion"
import { HeroSection } from "./components/hero-section";
import MySkills from "./components/skills";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <HeroSection />
      <MySkills/>
      
    </motion.div>

  );
}
