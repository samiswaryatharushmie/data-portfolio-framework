import profile from "../assets/profile.png";
import type { PortfolioData } from "../types/portfolio";

import medpredict from "../assets/projects/medpredict.png";
import pathfinder from "../assets/projects/pathfinder.png";
import cinevault from "../assets/projects/cinevault.png";

export const portfolioData: PortfolioData = {
  hero: {
    greeting: "Hello, I'm",
    name: "Your Name",

    roles: [
      "Data Engineer",
      "Data Analyst",
      "Machine Learning Enthusiast",
      "Business Intelligence",
    ],

    technologies: [
      "Python",
      "SQL",
      "Machine Learning",
      "Power BI",
      "React",
      "FastAPI",
    ],

    description:
      "Building intelligent data-driven solutions using Python, SQL, Machine Learning and Analytics.",

    profileImage: profile,
  },

  skills: [
    {
      title: "Python",
      category: "Programming",
      highlights: ["Pandas", "NumPy", "NLP"],
    },
    {
      title: "SQL",
      category: "Database",
      highlights: ["PostgreSQL", "MySQL", "PL/SQL"],
    },
    {
      title: "React",
      category: "Frontend",
      highlights: ["Components", "Hooks", "Responsive UI"],
    },
    {
      title: "FastAPI",
      category: "Backend",
      highlights: ["REST APIs", "Authentication", "Swagger"],
    },
    {
      title: "Machine Learning",
      category: "AI",
      highlights: ["Classification", "Prediction", "Scikit-learn"],
    },
    {
      title: "Power BI",
      category: "Analytics",
      highlights: ["Dashboards", "Power Query", "Data Visualization"],
    },
  ],

  projects: [
    {
      title: "MedPredict AI",

      subtitle: "AI Healthcare Platform",

      role: "AI Engineer & Full Stack Developer",

      description:
        "An AI-powered healthcare platform focused on disease prediction, intelligent analytics, and clinical decision support.",

      image: medpredict,

      featured: true,

      status: "In Progress",

      badge: "🚀 Featured",

      technologies: [
        "Python",
        "FastAPI",
        "React",
        "PostgreSQL",
      ],

      highlights: [
        "AI Prediction",
        "Analytics Dashboard",
        "Role-Based Access",
      ],

      github: "",

      live: "",

      linkedin: "",
    },

    {
      title: "PathFinder",

      subtitle: "IoT Assistive System",

      role: "IoT Developer",

      description:
        "An IoT-based wearable assistive system that helps visually impaired individuals detect ground, chest, and head-level obstacles using smart glasses and a smart stick.",

      image: pathfinder,

      featured: false,

      status: "Completed",

      badge: "🏅 Top 10 Finalist",

      technologies: [
        "ESP32",
        "ThingSpeak",
        "IoT",
        "Arduino",
      ],

      highlights: [
        "Dual Obstacle Detection",
        "Cloud Monitoring",
        "Real-time Alerts",
      ],

      github: "",

      live: "",

      linkedin: "",
    },

    {
      title: "CineVault",

      subtitle: "Movie Rental & Review Platform",

      role: "Backend Developer (User Management)",

      description:
        "A full-stack movie rental and review platform developed as a university group project using Angular, Spring Boot, and MySQL.",

      image: cinevault,

      featured: false,

      status: "Completed",

      badge: "🏅 Top 10 Finalist",

      technologies: [
        "Angular",
        "Spring Boot",
        "Java",
        "MySQL",
      ],

      highlights: [
        "User Management",
        "REST APIs",
        "Responsive UI",
      ],

      github: "",

      live: "",

      linkedin: "",
    },
  ],

  social: {
    github: "https://github.com/YOUR_USERNAME",
    linkedin: "https://linkedin.com/in/YOUR_PROFILE",
    email: "your@email.com",
  },
};