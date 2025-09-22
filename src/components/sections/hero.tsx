"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { FiGithub, FiLinkedin } from "react-icons/fi"
import { personalInfo } from "@/lib/utils"

export function Hero() {
  const socialLinks = [
    { href: personalInfo.github, icon: FiGithub, label: "GitHub" },
    { href: personalInfo.linkedin, icon: FiLinkedin, label: "LinkedIn" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.div variants={itemVariants} className="mb-6">
              <motion.h1
                className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-600 bg-clip-text text-transparent"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {personalInfo.name.split(" ")[0]}
              </motion.h1>
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-foreground/80 mb-6"
                variants={itemVariants}
              >
                {personalInfo.title}
              </motion.h2>
              <motion.p
                className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8"
                variants={itemVariants}
              >
                {personalInfo.bio}
              </motion.p>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="grid grid-cols-3 gap-6 text-center lg:text-left">
                <div>
                  <div className="text-2xl font-bold text-primary">
                    {personalInfo.experienceYears}
                  </div>
                  <div className="text-sm text-muted-foreground">Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">
                    {personalInfo.skills.backend.length + personalInfo.skills.frontend.length}+
                  </div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">
                    {personalInfo.languages.length}
                  </div>
                  <div className="text-sm text-muted-foreground">Languages</div>
                </div>
              </div>
            </motion.div>

            {/* Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.a
                href="#contact"
                className="glass px-8 py-4 rounded-full font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass p-3 rounded-full text-muted-foreground hover:text-primary transition-colors duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="order-1 lg:order-2 flex justify-center"
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-80 h-80 md:w-96 md:h-96 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-gradient-x opacity-20"></div>
                <motion.div
                  className="absolute inset-2 glass rounded-full overflow-hidden"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-full h-full"
                  >
                    <Image
                      src="/rinta-photo.jpg"
                      alt={personalInfo.name}
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 320px, 384px"
                    />
                  </motion.div>
                </motion.div>
              </div>

            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
      </div>
    </section>
  )
}