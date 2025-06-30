"use client"

import { motion } from "framer-motion"
import { Phone, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Variants } from "framer-motion";


const HeroSection = () => {
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

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut" as const, // ✅ fix for TS
            },
        },
    };  
    const highlightVariants: Variants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut" as const, // ✅ fix for TS
                delay: 0.3,
            },
        },
    };

    return (
        <section className="relative min-h-[700px] overflow-hidden container mx-auto  px-6 py-16 bg-image "
        >

            {/* Main Content */}
            <div className="relative z-10 flex  ">
                <motion.div variants={containerVariants} initial="hidden" animate="visible" className="">
                    {/* Main Heading - exact text layout */}
                    <div className="mb-12">
                        <motion.div variants={itemVariants} className="mb-6">
                            <h1 className="text-7xl  font-bold  leading-none tracking-tight flex items-center flex-wrap">
                                Trusted{" "}
                                <motion.span
                                    variants={highlightVariants}
                                    className="inline-block bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-3xl mx-2"
                                >
                                    Partner
                                </motion.span>{" "}
                                for
                            </h1>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <h1 className="text-7xl font-bold  leading-none tracking-tight flex items-center flex-wrap">
                                Your Website{" "}
                                <motion.span
                                    variants={highlightVariants}
                                    className="inline-block bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-3xl mx-2"
                                >
                                    Develop.
                                </motion.span>
                            </h1>
                        </motion.div>
                    </div>


                </motion.div>
            </div>
            {/* Description text - exact content */}
            <motion.div variants={itemVariants} className="  flex justify-between gap-20 ">


                {/* Exact gradient background to match image */}
                {/* <div className="absolute inset-0 -z-20 bg-gradient-to-br from-cyan-100 via-emerald-50 to-lime-100" /> */}

                {/* Social Media Sidebar - exact positioning */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="items-end -rotate-90"
                >
                    <div className="flex flex-col  items-start gap-6  mt-6">
                        {/* Vertical text */}
                        <div
                            className=" font-medium  tracking-wider text-start"
                        >
                            @williamey
                        </div>

                        {/* Vertical line */}
                        <div className="flex items-center justify-center gap-2   ">
                            <div className="w-8 h-1 bg-black dark:bg-white "></div>

                            {/* Social icons */}
                            <div className="flex gap-3">
                                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="cursor-pointer">
                                    <Instagram className="w-4 h-4 " />
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="cursor-pointer">
                                    <svg className="w-4 h-4 " viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </motion.div>
                            </div>


                        </div>
                    </div>
                </motion.div>



                <div className="md:ml-14">

                    <div className=" justify-start text-lg">Building the worlds best marketing websites for over a decade. Your trusted partner for strategy, design, and dev.</div>

                    <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                            size="lg"
                            variant="outline"
                            className="rounded-full h-16 w-48 mt-10 border-2 border-black"
                        >
                            <Phone className="!w-10 !h-10 mr-3 ring-2  rounded-full p-1.5 -m-6 " />
                            Schedule a Call
                        </Button>
                    </motion.div>

                </div>
            </motion.div>
        </section>
    )
}

export default HeroSection;