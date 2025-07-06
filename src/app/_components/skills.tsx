import React from 'react';
import TopLeftHeader from './top-left-header';

const skills = [
  {
    icon: "Icon will be here",
    title: "HTML & CSS",
    description: "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
  },
  {
    icon: "Icon will be here",
    title: "Javascript",
    description: "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
  },
  {
    icon: "Icon will be here",
    title: "Webflow",
    description: "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
  },
];

const SkillCard = ({ title, description }:{title:string , description:string}) => (
  <div className="w-full bg-white/10 rounded-[30px] p-4 sm:p-9 hover:rotate-6 duration-300">
    <div className="relative size-24 mb-4">
      <div className="w-24 h-7 absolute top-[34.5px] left-0 rounded-full outline-2 outline-white outline-offset-[-1px]"></div>
      <div className="w-24 h-7 absolute top-[84px] left-[11.26px] rotate-[-60deg] origin-top-left rounded-full outline-2 outline-white outline-offset-[-1px]"></div>
      <div className="w-24 h-7 absolute top-0 left-[37.24px] rotate-[60deg] origin-top-left rounded-full outline-2 outline-white outline-offset-[-1px]"></div>
      <div className="absolute size-3.5 top-[43px] left-[42px] bg-lime-300 rounded-full"></div>
    </div>
    <h3 className="text-2xl font-bold leading-loose">{title}</h3>
    <p className="opacity-70 text-base leading-relaxed">{description}</p>
  </div>
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
          <svg width="140" height="60" viewBox="0 0 140 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="80.5" y="0.5" width="59" height="59" rx="29.5" fill="black" stroke="white" />
            <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" fill="black" stroke="white" />
            <path d="M92 30H128M128 30C124.057 29.2727 116.171 25.8545 116.171 18M128 30C124.057 30.7273 116.171 34.1455 116.171 42" stroke="white" strokeWidth="2" strokeLinejoin="round" />
            <path d="M48 30H12M12 30C15.9429 29.2727 23.8286 25.8545 23.8286 18M12 30C15.9429 30.7273 23.8286 34.1455 23.8286 42" stroke="white" strokeWidth="2" strokeLinejoin="round" />
          </svg>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:mt-28">
          {skills.map((skill, index) => (
            <SkillCard key={index} title={skill.title} description={skill.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySkills;
