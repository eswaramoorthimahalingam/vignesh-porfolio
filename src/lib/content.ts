export const PROFILE = {
  name: "Vignesh S",
  email: "Vigneshthulsi06@gmail.com",
  phone: "+91 73390 20958",
  location: "Coimbatore, Tamil Nadu — 641046",
  dob: "02 Oct 2006",
  age: 19,
  tagline: "BSc Computer Science student · aspiring software developer",
  objective:
    "A sincere and hardworking individual looking for an opportunity to gain real-world experience, contribute to meaningful projects, and grow professionally as a software developer.",
};

export const EDUCATION = [
  {
    degree: "BSc Computer Science",
    institute: "Kongunadu Arts and Science College",
    board: "Bharathiyar University",
    score: "68%",
    year: "Pursuing (2nd Year)",
  },
  {
    degree: "HSC",
    institute: "Government Higher Secondary School",
    board: "State Board",
    score: "62%",
    year: "2024",
  },
  {
    degree: "SSLC",
    institute: "Government Higher Secondary School",
    board: "State Board",
    score: "66%",
    year: "2022",
  },
];

export const SKILLS = [
  { name: "C", level: 75, group: "Languages" },
  { name: "C++", level: 72, group: "Languages" },
  { name: "Java", level: 68, group: "Languages" },
  { name: "Python", level: 70, group: "Languages" },
  { name: ".NET", level: 60, group: "Frameworks" },
  { name: "HTML & CSS", level: 78, group: "Web" },
  { name: "MS Excel", level: 80, group: "Productivity" },
  { name: "MS Office / PPT", level: 82, group: "Productivity" },
];

export const CERTIFICATES = [
  {
    issuer: "IBM",
    title: "Exploring Data, Cybersecurity & more",
    note: "Completed multiple foundational IBM SkillsBuild courses.",
  },
  {
    issuer: "Coursera",
    title: "Design Prompts for Everyday Work Tasks",
    note: "Applied prompt-engineering for everyday productivity.",
  },
  {
    issuer: "Coursera",
    title: "HTML and CSS in Depth",
    note: "Hands-on coursework on modern HTML/CSS fundamentals.",
  },
];

export const ACHIEVEMENTS = [
  "Participated in the inter-college Western Ghats Conservation event at Kongunadu Arts and Science College.",
  "Participated in the Treasure Hunt at Sankara College of Science and Commerce.",
  "Completed multiple IBM certifications including Exploring Data and Cybersecurity.",
  "Completed Coursera certifications in prompt design and HTML/CSS.",
];

export const WORKSHOPS = [
  "DeVos workshop — Kongunadu Arts and Science College.",
  "English communication workshop — Kongunadu Arts and Science College.",
];

// Learning-stage portfolio pieces — honest framing for a 2nd-year student.
export const PROJECTS = [
  {
    slug: "personal-portfolio",
    title: "3D Animated Portfolio",
    tag: "Web · HTML/CSS",
    description:
      "This very site — a multi-theme (Light / Dark / RGB) portfolio with CSS 3D animations, built to showcase my journey.",
    tech: ["HTML", "CSS", "React"],
    accent: "var(--aura-1)",
  },
  {
    slug: "student-records-cpp",
    title: "Student Records Manager",
    tag: "C++ · Coursework",
    description:
      "A console-based student record manager with file I/O, search, and sorting — built while learning OOP in C++.",
    tech: ["C++", "OOP", "File I/O"],
    accent: "var(--aura-2)",
  },
  {
    slug: "data-explorer-python",
    title: "CSV Data Explorer",
    tag: "Python · Learning",
    description:
      "A small Python script that loads CSV datasets and prints summary statistics — practice from my IBM Exploring Data course.",
    tech: ["Python", "Pandas"],
    accent: "var(--aura-3)",
  },
  {
    slug: "excel-dashboard",
    title: "Excel Marks Dashboard",
    tag: "Excel · Productivity",
    description:
      "An Excel dashboard with charts, conditional formatting, and pivot tables for tracking academic performance.",
    tech: ["Excel", "Pivot Tables"],
    accent: "var(--primary)",
  },
];

export const POSTS = [
  {
    slug: "starting-cs-journey",
    title: "Starting My Computer Science Journey",
    date: "2026-03-12",
    read: "4 min",
    excerpt:
      "Why I chose BSc Computer Science, what I'm learning at Kongunadu Arts and Science College, and how I'm building habits to stay consistent.",
  },
  {
    slug: "learning-c-and-cpp",
    title: "Learning C and C++ the Right Way",
    date: "2026-02-20",
    read: "5 min",
    excerpt:
      "Notes from my first year — pointers, memory, and the small programs that finally made OOP click for me.",
  },
  {
    slug: "ibm-skillsbuild-notes",
    title: "What I Took Away from IBM SkillsBuild",
    date: "2026-01-08",
    read: "3 min",
    excerpt:
      "A quick recap of the IBM courses I finished — Exploring Data, Cybersecurity basics — and how they changed how I think about software.",
  },
];
