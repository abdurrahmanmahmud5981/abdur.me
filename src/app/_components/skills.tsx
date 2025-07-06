import React from 'react';
import TopLeftHeader from './top-left-header';
import { Code, FileCode, LayoutTemplate } from 'lucide-react';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type SkillCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
};

const skills = [
  {
    icon: <Code size={40} className="text-orange-400" />,
    title: "HTML & CSS",
    description: "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
  },
  {
    icon: <FileCode size={40} className="text-yellow-400" />,
    title: "Javascript",
    description: "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
  },
  {
    icon: <LayoutTemplate size={40} className="text-blue-400" />,
    title: "Webflow",
    description: "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
  },
];

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    viewport={{ once: true }}
    className="w-full bg-white/10 rounded-[30px] p-4 sm:p-9 hover:rotate-3 hover:scale-105 duration-300"
  >
    <div className="mb-6">{icon}</div>
    <h3 className="text-2xl font-bold leading-loose">{title}</h3>
    <p className="opacity-70 text-base leading-relaxed">{description}</p>
  </motion.div>
);

const MySkills = () => {
  return (
    <section className="container mx-auto -my-4 z-40 relative">
      <div className="py-6 px-4 sm:p-14 bg-black text-white rounded-[40px] space-y-8">
        <TopLeftHeader label="Why Choose Me" />

        <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-36">
          <h2 className="text-3xl sm:text-6xl font-bold lg:max-w-xl leading-tight">
            My Extensive List of Skills
          </h2>
          <p className="text-xl leading-loose border-b-4 border-b-muted-foreground lg:max-w-xl lg:text-right">
            Building the world’s best marketing. Your trusted partner for strategy, design, and dev.
          </p>
        </div>

        <div className="flex justify-end">
          {/* Keep your SVG here */}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:mt-28">
          {skills.map((skill, index) => (
            <SkillCard key={index} index={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySkills;
