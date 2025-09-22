"use client"

import { motion } from "framer-motion"
import { personalInfo } from "@/lib/utils"
import { FiServer, FiMonitor, FiTool } from "react-icons/fi"

export function Skills() {
  // Calculate maximum months for proportional scaling
  const allSkills = [
    ...personalInfo.skills.backend,
    ...personalInfo.skills.frontend,
    ...personalInfo.skills.tools
  ]
  const maxMonths = Math.max(...allSkills.map(skill => skill.months))

  // Calculate proportional width for each skill
  const getSkillWidth = (months: number) => {
    return Math.max((months / maxMonths) * 100, 15) // Minimum 15% width for visibility
  }

  const skillCategories = [
    {
      title: "Backend",
      icon: FiServer,
      skills: personalInfo.skills.backend,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Frontend",
      icon: FiMonitor,
      skills: personalInfo.skills.frontend,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Tools & Cloud",
      icon: FiTool,
      skills: personalInfo.skills.tools,
      color: "from-purple-500 to-pink-500",
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
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="glass rounded-2xl p-8 hover:shadow-2xl transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mr-4`}>
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="font-medium">{skill.name}</span>
                        {skill.frameworks && skill.frameworks.length > 0 && (
                          <div className="text-xs text-muted-foreground mt-1">
                            {skill.frameworks.join(" • ")}
                          </div>
                        )}
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.experience}</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${getSkillWidth(skill.months)}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Languages Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-8">Languages</h3>
          <div className="flex justify-center flex-wrap gap-4">
            {personalInfo.languages.map((language, index) => (
              <motion.span
                key={language}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="glass px-6 py-3 rounded-full font-medium"
              >
                {language}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}