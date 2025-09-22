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
    backend: [
      {
        name: "Python",
        experience: "2+ years",
        months: 24,
        frameworks: ["FastAPI"]
      },
      {
        name: "Golang",
        experience: "8 months",
        months: 8,
        frameworks: ["Gin"]
      },
      {
        name: "PHP",
        experience: "8 months",
        months: 8,
        frameworks: ["Laravel"]
      },
      {
        name: "Kotlin",
        experience: "8 months",
        months: 8,
        frameworks: ["Spring Boot"]
      },
      {
        name: "PostgreSQL",
        experience: "2+ years",
        months: 24,
        frameworks: []
      }
    ],
    frontend: [
      {
        name: "TypeScript",
        experience: "8 months",
        months: 8,
        frameworks: ["React"]
      },
      {
        name: "CSS",
        experience: "1.5 years",
        months: 18,
        frameworks: ["Tailwind CSS"]
      }
    ],
    tools: [
      {
        name: "Docker",
        experience: "2+ years",
        months: 24,
        frameworks: []
      },
      {
        name: "AWS",
        experience: "1.5 years",
        months: 18,
        frameworks: ["EC2", "DynamoDB", "Lambda",  "ElasticSearch"]
      },
      {
        name: "Git",
        experience: "2+ years",
        months: 24,
        frameworks: []
      }
    ]
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
      period: "2025/1 - Present",
      description: "Developing fast-growing AI SaaS platform with focus on software requirements, APIs, testing, and debugging.",
      technologies: ["PHP", "Laravel", "Python", "FastAPI", "Kotlin", "Spring Boot", "PostgreSQL", "Tailwind", "TypeScript", "React", "Docker"],
      url: "https://taskhub.jp"
    },
    {
      company: "Nuco. Inc",
      role: "Backend Engineer Internship",
      period: "2022/12 - 2024/6",
      description: "Developed TV program management software focusing on API implementation, testing, and debugging.",
      technologies: ["Python", "FastAPI", "Docker", "AWS"]
    }
  ],
  projects: [
  ]
}