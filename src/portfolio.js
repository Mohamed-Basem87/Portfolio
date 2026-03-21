/* Change this file to get your personal portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section

const illustration = {
  animated: true
};

const greeting = {
  username: "Mohamed-Basem87",
  title: "Hi, I'm Mohamed Basem",
  subTitle: emoji(
    "A passionate Machine Intelligence & Data Science student 🤖 who loves turning raw data into clear, actionable insights — using Python, Power BI, PyTorch, and more."
  ),
  resumeLink: "resume.pdf",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Mohamed-Basem87",
  linkedin: "https://www.linkedin.com/in/mohamed-basem1/",
  gmail: "mohamedbasem518@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle:
    "Machine Intelligence & Data Science student who explores AI, data analysis, and everything in between.",
  skills: [
    emoji("📊 Build interactive dashboards and reports using Power BI & Excel"),
    emoji("🐍 Analyze and clean datasets using Python, Pandas & NumPy"),
    emoji("🤖 Develop and train machine learning models using PyTorch"),
    emoji("⚙️ Solve algorithmic problems and build efficient solutions in C++"),
    emoji("🔍 Transform and model data using Power Query")
  ],

  softwareSkills: [
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "PyTorch", fontAwesomeClassname: "fas fa-fire" },
    { skillName: "Pandas", fontAwesomeClassname: "fas fa-table" },
    { skillName: "NumPy", fontAwesomeClassname: "fas fa-calculator" },
    { skillName: "Power BI", fontAwesomeClassname: "fas fa-chart-bar" },
    { skillName: "Excel", fontAwesomeClassname: "fas fa-file-excel" },
    { skillName: "C++", fontAwesomeClassname: "fas fa-code" },
    { skillName: "GitHub", fontAwesomeClassname: "fab fa-github" },
    { skillName: "SQL", fontAwesomeClassname: "fas fa-database" }
  ],
  display: true
};

// Tech Stack / Skill Bars

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Data Analysis", progressPercentage: "85%" },
    { Stack: "Python / Pandas / NumPy", progressPercentage: "80%" },
    { Stack: "Machine Learning / PyTorch", progressPercentage: "70%" },
    { Stack: "Power BI / Excel", progressPercentage: "80%" },
    { Stack: "C++", progressPercentage: "65%" }
  ],
  displayCodersrank: false
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Menoufia University",
      logo: require("./assets/images/facultyAILogo.jpg"),
      subHeader:
        "Bachelor of Science in Artificial Intelligence — Machine Intelligence Department",
      duration: "2025 — Present",
      desc: "Faculty of Artificial Intelligence. Studying machine intelligence, data science, neural networks, and algorithms.",
      descBullets: [
        "Machine Intelligence & Deep Learning",
        "Data Science & Analysis",
        "Algorithms & Data Structures",
        "Neural Networks & PyTorch"
      ]
    }
  ]
};

// Work Experience Section

const workExperiences = {
  display: false,
  experience: []
};

// Open Source Section

const openSource = {
  showGithubProfile: "true",
  display: false
};

// Big Projects Section

const bigProjects = {
  title: "Projects",
  subtitle:
    "Data analysis and AI projects I've built — each one a story told through numbers.",
  projects: [
    {
      image: require("./assets/images/salesDashboard.png"),
      projectName: "Sales & Salesperson Ranking Analysis Dashboard",
      projectDesc:
        "Full Power BI analytics project — raw data to star schema model to interactive dashboard tracking $17.9M in revenue, 52K orders, and salesperson performance against targets.",
      footerLink: [
        { name: "More Info", url: "/project-sales-dashboard.html" }
      ]
    },
    {
      image: require("./assets/images/revenueMarginDashboard.png"),
      projectName: "Revenue & Gross Margin Analysis Dashboard",
      projectDesc:
        "Power BI project analyzing $9.68M in operational revenue and $4.02M gross margin across 5 suppliers — with DAX measures for cost, margin %, and monthly trend analysis.",
      footerLink: [
        { name: "More Info", url: "/project-revenue-margin.html" }
      ]
    },
    {
      image: require("./assets/images/fitbitDashboard.png"),
      projectName: "FitBit Activity & Health Analysis Dashboard",
      projectDesc:
        "Power BI health analytics dashboard tracking daily calories, steps, distance, floors, and activity intensity across 2015–2016 — with KPI targets, gauge charts, and dynamic day-range slicers.",
      footerLink: [
        { name: "More Info", url: "/project-fitbit.html" }
      ]
    }
  ],
  display: true
};

// Achievement Section

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle: "Courses and certifications I'm currently working on.",
  achievementsCards: [
    {
      title: "NVIDIA Deep Learning Course",
      subtitle: "NVIDIA Deep Learning Institute — In Progress",
      image: require("./assets/images/nvidiaLogo.png"),
      imageAlt: "NVIDIA",
      footerLink: [
        { name: "Course Info", url: "https://www.nvidia.com/en-us/training/" }
      ]
    },
    {
      title: "DEPI Microsoft Power BI Specialist",
      subtitle: "Digital Egypt Pioneers Initiative — In Progress",
      image: require("./assets/images/depiLogo.png"),
      imageAlt: "DEPI",
      footerLink: [
        { name: "Program Info", url: "https://depi.gov.eg/" }
      ]
    }
  ],
  display: true
};

// Blog Section
const blogSection = { display: false };

// Talks Section
const talkSection = { display: false };

// Podcast Section
const podcastSection = { display: false };

// Resume Section
const resumeSection = { display: false };

// Contact Section

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Open to internships, data projects, and collaborations. My inbox is always open!",
  number: "",
  email_address: "mohamedbasem518@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  techStack,
  educationInfo,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  resumeSection,
  contactInfo,
  twitterDetails,
  isHireable
};