import profile from "../assets/profile.png.jpeg";
import type { PortfolioData } from "../types/portfolio";

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
    description:
      "Building intelligent data-driven solutions using Python, SQL, Machine Learning and Analytics.",
    profileImage: profile,
  },

  social: {
    github: "YOUR_GITHUB_LINK",
    linkedin: "YOUR_LINKEDIN_LINK",
    email: "example@email.com",
  },
};