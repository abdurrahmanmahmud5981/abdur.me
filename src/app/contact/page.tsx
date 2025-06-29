"use client"

import { motion } from "framer-motion"

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-6xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Contact
          </h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-muted-foreground">
              This is the contact page. Here you can provide ways for people to 
              get in touch with you, including contact forms, email, and social media links.
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
