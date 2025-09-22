"use client"

import { motion } from "framer-motion"
import { useState, useEffect, useMemo } from "react"
import { FiHome, FiCode, FiBriefcase, FiMail } from "react-icons/fi"

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home")

  const navItems = useMemo(() => [
    { id: "home", label: "Home", icon: FiHome, href: "#" },
    { id: "skills", label: "Skills", icon: FiCode, href: "#skills" },
    { id: "experience", label: "Experience", icon: FiBriefcase, href: "#experience" },
    { id: "contact", label: "Contact", icon: FiMail, href: "#contact" },
  ], [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // Check if we're at the very top
      if (window.scrollY < 100) {
        setActiveSection("home")
        return
      }

      // Check if we're near the bottom
      if (scrollPosition + windowHeight >= documentHeight - 100) {
        setActiveSection("contact")
        return
      }

      // Check each section
      const sections = ["skills", "experience", "contact"]
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          const elementTop = rect.top + window.scrollY
          const elementBottom = elementTop + rect.height

          if (scrollPosition >= elementTop - 300 && scrollPosition < elementBottom - 100) {
            setActiveSection(sectionId)
            return
          }
        }
      }
    }

    // Initial check
    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [navItems])

  const handleNavClick = (href: string, id: string) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="glass rounded-full px-6 py-4">
        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => handleNavClick(item.href, item.id)}
              className={`relative p-3 rounded-full transition-colors duration-300 ${
                activeSection === item.id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={item.label}
            >
              <item.icon size={20} />

              {activeSection === item.id && (
                <motion.div
                  className="absolute inset-0 bg-primary/20 rounded-full"
                  layoutId="nav-indicator"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}

              {/* Tooltip */}
              <motion.div
                className="absolute -top-12 left-1/2 transform -translate-x-1/2 glass px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 pointer-events-none"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {item.label}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 glass rotate-45 -mt-1" />
              </motion.div>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}