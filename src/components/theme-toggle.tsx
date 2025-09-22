"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { FiSun, FiMoon, FiMonitor } from "react-icons/fi"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const themes = [
    { name: "light", icon: FiSun, label: "Light" },
    { name: "dark", icon: FiMoon, label: "Dark" },
    { name: "system", icon: FiMonitor, label: "System" },
  ]

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="glass rounded-full p-1 flex gap-1">
        {themes.map(({ name, icon: Icon, label }) => (
          <motion.button
            key={name}
            onClick={() => setTheme(name)}
            className={`relative p-3 rounded-full transition-colors duration-200 ${
              theme === name
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Switch to ${label} theme`}
          >
            <Icon size={18} />
            {theme === name && (
              <motion.div
                className="absolute inset-0 bg-primary/20 rounded-full"
                layoutId="theme-indicator"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  )
}