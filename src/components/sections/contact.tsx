"use client"

import { motion } from "framer-motion"
import { FiGithub, FiLinkedin, FiMapPin } from "react-icons/fi"
import { personalInfo } from "@/lib/utils"

export function Contact() {
  const contactInfo = [
    {
      icon: FiMapPin,
      label: "Location",
      value: personalInfo.location,
      href: null,
    },
    {
      icon: FiGithub,
      label: "GitHub",
      value: "github.com/rinta-toyoda",
      href: personalInfo.github,
    },
    {
      icon: FiLinkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/rinta-toyoda",
      href: personalInfo.linkedin,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Let&apos;s Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities and interesting projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-8">Get in Touch</h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass rounded-xl p-6 hover:shadow-xl transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-center">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white mr-4">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{item.label}</div>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-muted-foreground">{item.value}</div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>

          {/* Interactive Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center"
          >
            <motion.div
              className="glass rounded-3xl p-8 max-w-sm w-full text-center"
              whileHover={{ y: -10, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                {personalInfo.name.split(" ").map(n => n[0]).join("")}
              </motion.div>

              <h3 className="text-xl font-semibold mb-2">{personalInfo.name}</h3>
              <p className="text-muted-foreground mb-4">{personalInfo.title}</p>
              <p className="text-sm text-muted-foreground mb-6">
                {personalInfo.location} • {personalInfo.experienceYears} Experience
              </p>

              <div className="flex justify-center gap-3">
                <motion.a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiGithub size={18} />
                </motion.a>
                <motion.a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiLinkedin size={18} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}