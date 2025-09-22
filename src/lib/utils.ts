import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const personalInfo = {
  name: "Rinta Toyoda",
  title: "Full-Stack Engineer",
  location: "Australia",
  experienceYears: "2+ years",
  email: "rinta.toyoda@example.com",
  github: "https://github.com/rinta-toyoda",
  linkedin: "https://linkedin.com/in/rinta-toyoda",
  languages: ["Japanese", "English", "Chinese"],
  bio: "Full-stack Engineer from Australia with 2+ years of experience in building scalable web applications and AI-powered solutions.",
  skills: {
    backend: ["PHP", "Laravel", "Python", "FastAPI", "Kotlin", "Spring Boot", "PostgreSQL"],
    frontend: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
    tools: ["Docker", "AWS", "Git", "Linux"]
  },
  education: [
    {
      school: "University of Sydney",
      degree: "Master of Computer Science",
      focus: "Artificial Intelligence and IT",
      period: "Current"
    },
    {
      school: "Waseda University",
      degree: "Bachelor of Engineering",
      focus: "Machine Learning and Neuroscience",
      period: "Completed"
    }
  ],
  workExperience: [
    {
      company: "Taskhub",
      role: "Full-Stack Engineer",
      period: "2023 - Present",
      description: "Developing fast-growing AI SaaS platform with focus on software requirements, APIs, testing, and debugging.",
      technologies: ["PHP", "Laravel", "Python", "FastAPI", "Kotlin", "Spring Boot", "PostgreSQL", "Tailwind", "TypeScript", "React", "Docker", "AWS"],
      url: "https://taskhub.jp"
    },
    {
      company: "Previous Company",
      role: "Backend Engineer",
      period: "2022 - 2023",
      description: "Developed TV program management software focusing on API implementation, testing, and debugging.",
      technologies: ["Python", "FastAPI", "Docker", "AWS"]
    }
  ],
  projects: [
    {
      name: "AI-Powered Portfolio",
      description: "Modern portfolio website built with Next.js 15, featuring advanced animations and SEO optimization.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/rinta-toyoda/portfolio"
    },
    {
      name: "Taskhub Platform",
      description: "Fast-growing AI SaaS platform for task management and automation.",
      technologies: ["PHP", "Laravel", "Python", "FastAPI", "React", "PostgreSQL"],
      url: "https://taskhub.jp"
    }
  ]
}