"use client"
import { ArrowDown } from 'lucide-react'
import React from 'react'
import { motion } from "framer-motion"
const AboutSectio = () => {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.15,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeInOut", // use a valid string for ease
            },
        },
    }

    const highlightVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                delay: 0.3,
            },
        },
    }


    return (
        <section className='space-y-8 container mx-auto my-10 relative'>
            <div className=" absolute top-0 b w-full h-[673px] bg-radial-[at_51%_164%] from-lime-400 from 22% via-teal-300/0 via 65% to-neutral-900/0 blur-[34px] -rotate-180 -z-30"></div>

            {/*  */}
            <div className="flex justify-end max-w-5xl ">
                <div className='flex items-center'>
                    <span className=" border-2 border-black rounded-full p-2.5">
                        <ArrowDown size={20} />
                    </span>
                    <span className="border-2 border-black rounded-full px-5 py-2.5">About</span>
                </div>
            </div>

            {/*  */}
            <div className=" ">
                <motion.div variants={containerVariants} initial="hidden" animate="visible" className="">
                    {/* Main Heading - exact text layout */}
                    <div className=" ">
                        <motion.div variants={itemVariants} className="mb-6 max-w-5xl mx-auto flex flex-col gap-5">
                            <h1 className="text-7xl  font-bold  flex flex-wrap gap-6 items-center justify-center ">
                                I’ve been
                                <motion.span
                                    variants={highlightVariants}
                                    className="inline-block bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-3xl mx-2"
                                >
                                    Developing
                                </motion.span>{" "}
                                Website since
                                <motion.span
                                    variants={highlightVariants}
                                    className="inline-block bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-3xl mx-2"
                                >
                                    2024
                                </motion.span>
                            </h1>
                            <p className=" text-center justify-start text-lg  leading-loose">We start every new client interaction with an in-depth discovery call where
                                we get to know each other and recommend the best course of
                                action.</p>
                        </motion.div>

                    </div>


                </motion.div>
            </div>
          
        </section>
    )
}

export default AboutSectio
