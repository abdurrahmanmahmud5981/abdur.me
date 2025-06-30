"use client"
import { Button } from "@/components/ui/button"
import { ArrowDown, Facebook, Instagram, Mail, Phone, Send, Twitter } from "lucide-react"
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Input } from "@/components/ui/input";
const ContactSection = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        project: ''
    });



    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
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


    return (
        <div className='space-y-8 container mx-auto my-16 bg-gradient-to-br from-gray-100 via-green-100 to-lime-400 relative overflow-hidden px-3 sm:px-6 py-10 rounded-3xl '>
            <div className=" absolute top-0 b w-full h-[673px] bg-radial-[at_51%_164%] from-lime-400 from 22% via-teal-300/0 via 65% to-neutral-900/0 blur-[34px] -rotate-180 -z-30"></div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 ">
                <div className="space-y-4">
                    <div className="flex  max-w-5xl ">
                        <div className='flex items-center'>
                            <span className=" border-2 border-black rounded-full p-2.5 text-black">
                                <ArrowDown size={20} />
                            </span>
                            <span className="border-2 border-black rounded-full px-5 py-2.5 text-black">Contact</span>
                        </div>
                    </div>

                    <motion.h2
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        className=" 
                        text-black text-3xl sm:text-7xl font-bold sm:leading-[100px]
                        "
                    >
                        Interested in 

                        <motion.span
                            variants={highlightVariants}
                            className="inline-block bg-black  text-white  px-6 rounded-3xl mx-2"
                        >
                            work
                        </motion.span>

                        together?
                    </motion.h2>

                    <p className=" justify-start text-black text-lg leading-loose">We start every new client interaction with an in-depth discovery call where
                        we get to know each other
                    </p>

                    <motion.div variants={itemVariants} whileTap={{ scale: 0.98 }}>
                        <Button
                            size="lg"
                            variant="outline"
                            className="rounded-full h-16 w-48 bg-transparent border-2 border-black dark:border-black dark:text-black"
                        >
                            <span className="p-1.5 ring-2 ring-black   rounded-full  -m-6 !w-10 !h-10 mr-3 flex items-center justify-center">
                                <Phone size={30} fill="black" />
                            </span>
                            Schedule a Call
                        </Button>
                    </motion.div>
                </div>

                <div className="  ">
                    <motion.div
                        className="bg-black rounded-3xl py-6 px-3 sm:p-8 text-white"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="space-y-6">
                            <div className="space-y-6">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.6 }}
                                >
                                    <Input
                                        name="name"
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="bg-transparent border-0 border-b border-gray-600 rounded-none px-0 py-4 text-white placeholder:text-gray-400 focus:!border-lime-300 focus-visible:ring-0 text-lg"
                                    />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.7 }}
                                >
                                    <Input
                                        name="email"
                                        type="email"
                                        placeholder="Your email address"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="bg-transparent border-0 border-b border-gray-600 rounded-none px-0 py-4 text-white placeholder:text-gray-400 focus:!border-lime-300 focus-visible:ring-0 text-lg"
                                    />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.8 }}
                                >
                                    <Textarea
                                        name="project"
                                        placeholder="Describe your project"
                                        value={formData.project}
                                        onChange={handleInputChange}
                                        rows={4}
                                        className="bg-transparent border-0 border-b border-gray-600 rounded-none px-0 py-4 text-white placeholder:text-gray-400 focus:!border-lime-300 focus-visible:ring-0 resize-none text-lg"
                                    />
                                </motion.div>
                            </div>

                            <motion.div
                                className="flex flex-col md:flex-row items-center gap-4 pt-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.9 }}
                            >

                                <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="rounded-full h-14   border-2 border-white bg-black text-white 0 dark:border-white"
                                    >
                                        <span className="p-1.5 ring-2 ring-white rounded-full  -m-6 !w-10 !h-10 mr-1 flex items-center justify-center">
                                            <Send size={30} fill="white" />
                                        </span>
                                        Send
                                    </Button>
                                </motion.div>

                                <span className="text-gray-400 text-sm">or</span>


                                <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="rounded-full h-14   border-2 border-white bg-black text-white  dark:border-white"
                                    >
                                        <span className="p-1.5 ring-2 ring-white rounded-full  -m-6 !w-10 !h-10 mr-1 flex items-center justify-center">
                                            <Mail size={30} />
                                        </span>
                                        Contact me
                                    </Button>
                                </motion.div>


                            </motion.div>

                            {/* Social Links */}
                            <motion.div
                                className="flex items-center justify-baseline gap-5 pt-8 border-t border-gray-700 flex-col md:flex-row"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1 }}
                            >
                                <span className="text-gray-400">@williamrey</span>
                                <div className="flex items-center gap-2.5">
                                    <div className="w-16 h-0.5 bg-muted-foreground"></div>
                                    <motion.span
                                        className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <Facebook className="w-6 h-6" />
                                    </motion.span>
                                    <motion.span

                                        className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <Instagram className="w-6 h-6" />
                                    </motion.span>
                                    <motion.span

                                        className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <Twitter className="w-6 h-6" fill="currentColor" />
                                    </motion.span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection

