export const personalInfo = {
  name:         "KAMAL P",
  role:         "Aspiring Developer",
  bio:          "Passionate About Application Development and Database Management to Build Innovative Solutions🚀. My journey in coding started out of curiosity and has grown into a mission to continuously learn, build, and contribute to impactful projects.",
  email:        "kamalpkamalp435@gmail.com",
  github:       "https://github.com/15-Kamal",
  linkedin:     "https://linkedin.com/in/kamal15",
  profileImage: "/Profile.jpg",
};

/* ── Education ──────────────────────────────────────────────── */
export const education = [
  {
    degree:      "B.E - Computer Science & Engineering",
    institution: "Sri Venkateshwara College of Engineering, Bengaluru",
    period:      "2022 – 2026",
  },
];

/* ── Skills (grouped by category) ─────────────────────────── */
export const skillCategories = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "Javascript", "Next.js", "Kotlin"],
  },
  {
    category: "Backend",
    items: ["Python", "MySQL", "Firebase", "Fast APIs"],
  },
  {
    category: "Tools & Libraries",
    items: ["VS Code","Android Studio", "Google Cloud", "Git", "NumPy", "Pandas"],
  },
];

/* ── Projects ───────────────────────────────────────────────── */
export const projects = [
  {
    title:       "Kutira-Kushala (Self-Employment)",
    description: "A full-stack Android application (Kotlin + Jetpack Compose) that digitises cottage industries - basket weavers, agarbatti rollers, papad makers - as searchable micro-factory profiles visible to bulk buyers.",
    tech:        ["Kotlin","Jetpack Compose","Firebase","Gemini API","MVVM"],
    github:      "https://github.com/15-Kamal/KutiraKushala",
    live:        "https://appdistribution.firebase.dev/i/cc52cff11f8a44ad",
  },
  {
    title:       "ZooVision-Animal Image Classification",
    description: "A Computer Vision pipeline using TensorFlow and OpenCV to preprocess, augment, and classify images of various animal species.",
    tech:        ["Python", "OpenCV", "NumPy", "Matplotlib", "Jupyter"],
    github:      "https://github.com/15-Kamal/ZooVision-Animal-Image-Classification",
    live:        "https://zoovision-ai.streamlit.app/",
  },
  {
    title:       "Portfolio",
    description: "A responsive professional portfolio using Next.js, Framer Motion, and Lenis smooth scrolling",
    tech:        ["Next.js", "Framer Motion", "Lenis", "TailwindCSS"],
    github:      "https://github.com/15-Kamal/portfolio",
  },
];

/* ── Experience ─────────────────────────────────────────────── */
export const experience = [
  {
    company: "MindMatrix",
    role:    "Android App Development Using Gen AI (Intern)",
    period:  "Feb 2026 - May 2026",
    bullets: [
      "Learnt Kotlin programming fundamentals, Generative AI basics, and AI agent concepts.",
      "Built Android applications and completed practical development tasks.",
      "Built Kutira-Kushala, a full-stack Android app (Kotlin + Jetpack Compose) that empowers cottage industry entrepreneurs.",
      "Key technical work: Firebase Auth (Email + Phone OTP), Firestore with role-based security rules, Gemini 1.5 Flash API for AI-generated business content, real-time Capacity Meter, Direct Connect phone + SMS integration, and owner dashboard with MVVM + StateFlow.",
    ],
  },
];