"use client"

import { motion } from "framer-motion"
import { personalInfo } from "@/lib/utils"
import { FiBriefcase, FiBookOpen, FiExternalLink } from "react-icons/fi"

export function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
    },
  }

  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and academic background
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white mr-4">
                <FiBriefcase size={24} />
              </div>
              <h3 className="text-2xl font-semibold">Work Experience</h3>
            </div>

            <div className="space-y-8">
              {personalInfo.workExperience.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass rounded-2xl p-6 hover:shadow-2xl transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-primary mb-1">{exp.role}</h4>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{exp.company}</span>
                        {exp.url && (
                          <a
                            href={exp.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            <FiExternalLink size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white mr-4">
                <FiBookOpen size={24} />
              </div>
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>

            <div className="space-y-8">
              {personalInfo.education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass rounded-2xl p-6 hover:shadow-2xl transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-primary mb-1">{edu.degree}</h4>
                      <span className="font-medium">{edu.school}</span>
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground">
                    <span className="font-medium">Focus:</span> {edu.focus}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Projects */}
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-8">Featured Projects</h3>
              <div className="space-y-6">
                {personalInfo.projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="glass rounded-xl p-6 hover:shadow-xl transition-all duration-300"
                    whileHover={{ y: -2 }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-semibold text-primary">{project.name}</h4>
                      {(project.github || project.url) && (
                        <div className="flex gap-2">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-primary transition-colors"
                            >
                              <FiExternalLink size={16} />
                            </a>
                          )}
                          {project.url && (
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-primary transition-colors"
                            >
                              <FiExternalLink size={16} />
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                    <p className="text-muted-foreground mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}