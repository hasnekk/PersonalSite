/* ============================================================
   SITE CONTENT
   Edit everything here. index.js renders it onto the page.
   For any link, leave it out (or set to "") to hide that button.
   ============================================================ */

const SITE = {
  // Hero "Stack" strip
  stack: [
    "TypeScript",
    "Node.js",
    "React.js",
    "React Native",
    "Vue.js",
    "PostgreSQL",
    "MongoDB",
    "Supabase",
    "Git",
  ],

  // Work experience (most recent first)
  experience: [
    {
      role: "Software Engineer",
      org: "Coreline",
      date: "Jul 2025 — Mar 2026",
      description:
        "Engineered full-stack applications with React.js, React Native and Node.js, owning features from design through delivery.",
      tags: ["React.js", "React Native", "Node.js"],
    },
    {
      role: "Software Engineer",
      org: "EveryMatrix",
      date: "Dec 2023 — Jul 2025",
      description:
        "Engineered robust full-stack features with Node.js and Vue.js. Collaborated with multinational teams, refactored and took ownership of multiple smaller projects, and learned from senior engineers.",
      tags: ["Node.js", "Vue.js", "TypeScript"],
    },
    {
      role: "Intern Software Engineer",
      org: "Zeraxo",
      date: "Jun 2022 — Jul 2022",
      description:
        "Developed a dynamic web application using the ASP.NET framework with Razor Pages and the Umbraco CMS.",
      tags: ["ASP.NET", "Razor Pages", "Umbraco"],
    },
  ],

  // Highlighted shipped app shown under experience
  featuredApp: {
    label: "Shipped to the App Store",
    title: "NP Plitvička Jezera — Mobile App",
    description:
      "Built a full React Native application for an agency, published on the iOS App Store.",
    link: {
      label: "View on the App Store",
      href: "https://apps.apple.com/us/app/np-plitvicka-jezera/id1588901836",
    },
  },

  // Freelance / client work
  freelance: [
    {
      title: "NiceClear",
      description:
        "Marketing website that ranks in the top 10 of Croatian search results for several target phrases.",
      tags: ["Web", "SEO"],
      live: "https://www.niceclear.hr/naslovnica",
    },
    {
      title: "AI Assistant for a Music App",
      description:
        "A ChatGPT-powered wrapper built for a client's music application using FlutterFlow.",
      tags: ["FlutterFlow", "OpenAI API"],
      note: "Private client",
    },
    {
      title: "Custom ERP System",
      description:
        "A bespoke ERP for managing payments, client session scheduling and employees, built for a biotherapist.",
      tags: ["React", "Supabase"],
      note: "Private client",
    },
  ],

  // Personal projects (cover: image path, or null for a mono placeholder)
  projects: [
    {
      title: "Bakery Stephanie",
      description: "A full web application for a bakery business.",
      cover: "./images/projectsCovers/projectBakeryStephanie.jpg",
      github: "https://github.com/hasnekk/bakeryStephanie",
      live: "https://hasnekk.github.io/bakeryStephanie/",
    },
    {
      title: "ScoreBet",
      description: "A sports score and betting-focused application.",
      cover: "./images/projectsCovers/projectScoreBet.png",
      github: "",
      live: "",
    },
    {
      title: "Mediki",
      description:
        "A personal full-stack project exploring product ideas end to end.",
      cover: "./images/projectsCovers/projectMediki.png",
      coverFit: "top",
      github: "",
      live: "https://mediki.io",
    },
  ],

  // Academic / open-source repos
  openSource: [
    {
      title: "Machine Learning Course",
      description:
        "Coursework, notebooks and implementations from a university machine learning course.",
      tags: ["Python", "Machine Learning"],
      github: "https://github.com/hasnekk/Machine-Learning-Course",
      live: "",
    },
    {
      title: "Thyroid Disease Classifier",
      description:
        "A classification model for detecting thyroid disease from clinical data.",
      tags: ["Python", "Classification"],
      github: "https://github.com/hasnekk/Thyroid-Disease-Classifier",
      live: "",
    },
  ],

  // Education (shown as cards)
  education: [
    {
      period: "2024 — present",
      degree: "Master of Computer Science",
      school: "FER — University of Zagreb",
      note: "Faculty of Electrical Engineering and Computing.",
    },
    {
      period: "Graduate",
      degree: "Master's Studies",
      school: "Comillas Pontifical University — Madrid",
      note: "Graduate studies in Madrid, Spain.",
    },
    {
      period: "2021 — 2024",
      degree: "Bachelor of Computer Science",
      school: "FER — University of Zagreb",
      note: "Faculty of Electrical Engineering and Computing.",
    },
  ],

  // Courses & certifications
  courses: [
    {
      title: "The Ultimate React Course 2023: React, Redux & More",
      meta: "Udemy · Jonas Schmedtmann · 67 hours",
      date: "Sep 2023",
      certificate: "./pdfs/ultimateReactCourse.pdf",
    },
    {
      title: "The Complete 2023 Web Development Bootcamp",
      meta: "Udemy · Dr. Angela Yu · 66 hours",
      date: "Aug 2023",
      certificate: "./pdfs/webDevelopmentBootcamp.pdf",
    },
    {
      title: "Build Web Apps with Vue JS 3 & Firebase",
      meta: "Udemy · The Net Ninja · 31.5 hours",
      date: "Feb 2024",
      certificate: "./pdfs/Vue.pdf",
    },
    {
      title: "Understanding TypeScript",
      meta: "Udemy · Maximilian Schwarzmüller · 15 hours",
      date: "Feb 2024",
      certificate: "./pdfs/Typescript.pdf",
    },
    {
      title: "Programming for Complete Beginners in C#",
      meta: "Udemy · Eric Wise · 6.5 hours",
      date: "Jul 2020",
      certificate: "./pdfs/c%23.pdf",
    },
  ],

  // Contact rows
  contact: [
    {
      label: "Email",
      text: "kristijanhasnek3@gmail.com",
      href: "mailto:kristijanhasnek3@gmail.com",
    },
    { label: "Phone", text: "+385 91 365 0449", href: "tel:+385913650449" },
    {
      label: "GitHub",
      text: "github.com/hasnekk ↗",
      href: "https://github.com/hasnekk",
      external: true,
    },
  ],
};
