"use client"

import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Welcome to ABDUR.ME
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Personal portfolio website showcasing my work and projects
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-4xl"
          >
            <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2">Home</h3>
              <p className="text-sm text-muted-foreground">Welcome page with introduction</p>
            </div>
            <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2">About</h3>
              <p className="text-sm text-muted-foreground">Learn more about me</p>
            </div>
            <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2">Projects</h3>
              <p className="text-sm text-muted-foreground">My latest work and projects</p>
            </div>
            <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2">Contact</h3>
              <p className="text-sm text-muted-foreground">Get in touch with me</p>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
