"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {  Menu, X } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"


const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/projects" },
  { name: "Blog", href: "/" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="sticky top-0 z-50 w-full  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90">
      <div className="  mx-auto max-w-7xl  ">
        <div className="flex border-b px-5 py-5 rounded-bl-[30px] rounded-br-[30px] items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center space-x-2">
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                ABDUR.ME
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="text-foreground/80 hover:text-foreground transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <ModeToggle />
            </motion.div>
            {/* Start Project button*/}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link className="flex items-center justify-center space-x-2 bg-white text-black hover:bg-primary hover:text-muted transition-colors duration-200 px-4 py-2 font-semibold gap-0.5 rounded-full border-2 border-black hover:border-primary cursor-pointer shadow-md hover:shadow-lg"
                href="/">

                <svg className="-ml-4" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="37" height="37" rx="18.5" fill="white" stroke="black" />
                  <path d="M8 18.5H30M30 18.5C27.5905 18.0455 22.7714 15.9091 22.7714 11M30 18.5C27.5905 18.9545 22.7714 21.0909 22.7714 26" stroke="black" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
               
                <span className="text-lg ml-1">Start Project</span>

              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-foreground"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>

          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden relative  "
            >
              <div onClick={() => setIsOpen(false)} className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90  fixed top-16 left-0 w-full h-screen">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-accent rounded-md transition-colors duration-200"

                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                {/* start project button */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="mt-4"
                >
                  <Link className="flex items-center justify-center space-x-2 bg-white text-black hover:bg-primary hover:text-muted transition-colors duration-200 px-4 py-2 font-semibold gap-1.5 rounded-full border-2 border-black hover:border-primary cursor-pointer shadow-md hover:shadow-lg"
                    href="/">

                    <svg className="-ml-4" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="37" height="37" rx="18.5" fill="white" stroke="black" />
                      <path d="M8 18.5H30M30 18.5C27.5905 18.0455 22.7714 15.9091 22.7714 11M30 18.5C27.5905 18.9545 22.7714 21.0909 22.7714 26" stroke="black" strokeWidth="1.5" strokeLinejoin="round" />
                    </svg>
                    {/* <ArrowRight className="!w-10 !h-10   mr-3 ring-2 dark:ring-muted  rounded-full p-1.5 -ml-3 " /> */}
                    <span className="text-lg">Start Project</span>

                  </Link>
                </motion.div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
