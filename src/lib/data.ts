export const personalInfo = {
  name:         "KAMAL P",
  role:         "Aspiring Machine Learning Engineer",
  bio:          "Passionate About Applying Machine Learning Technologies to Build Innovative Solutions🚀. My journey in coding started out of curiosity and has grown into a mission to continuously learn, build, and contribute to impactful projects.",
  email:        "kamalpkamalp435@gmail.com",
  github:       "https://github.com/15-Kamal",
  linkedin:     "https://linkedin.com/in/kamal15",
  profileImage: "/Profile.jpg",
};

/* ── Education ──────────────────────────────────────────────── */
export const education = [
  {
    degree:      "B.E in Computer Science & Engineering",
    institution: "Sri Venkateshwara College of Engineering, Bengaluru",
    period:      "2022 – 2026",
  },
];

/* ── Skills (grouped by category) ─────────────────────────── */
export const skillCategories = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "Javascript", "React.js", "Next.js", "Kotlin"],
  },
  {
    category: "Backend",
    items: ["Python", "Node.js", "MySQL", "MongoDB", "Firebase", "Fast APIs"],
  },
  {
    category: "Tools & Libraries",
    items: ["Google-AI Studio","Android Studio", "Google Cloud", "Git", "NumPy", "Pandas", "TensorFlow", "Scikit-learn"],
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
    title:       "GuardianAI-Financial Fraud Detection",
    description: "A Machine Learning pipeline using Random Forest to classify fraudulent transactions within a highly imbalanced dataset of 1.75 million records.",
    tech:        ["Python", "Flask", "Scikit-Learn", "React.js"],
    github:      "https://github.com/15-Kamal/GuardianAI-Financial-Fraud-Detection",
    live:        "https://guardianai-financial-fraud-detection.onrender.com",
  },
  {
    title:       "ZooVision-Animal Image Classification",
    description: "A Computer Vision pipeline using TensorFlow and OpenCV to preprocess, augment, and classify images of various animal species.",
    tech:        ["Python", "OpenCV", "NumPy", "Matplotlib", "Jupyter"],
    github:      "https://github.com/15-Kamal/ZooVision-Animal-Image-Classification",
    live:        "https://zoovision-ai.streamlit.app/",
  },
  {
    title:       "Synthetic Data-Driven Testing for AI-Based Crop Recommendation Systems",
    description: "A Machine Learning model for precision agriculture, applying synthetic data-driven validation for robustness.",
    tech:        ["Python", "Scikit-learn", "Pandas", "HTML",],
    github:      "https://github.com/15-Kamal/Synthetic-Data-Driven-Testing-for-AI-Based-Crop-Recommendation-Systems",
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
    company: "Unified Mentor Private Limited",
    role:    "Machine Learning Intern",
    period:  "Jan 2026 - Mar 2026",
    bullets: [
      "I worked on several practical projects that helped me strengthen my analytical, problem-solving, and model development skills.",
      "🎯 Projects I Worked On - ZooVision AI, Financial Fraud Detection, Vehicle Price Prediction",
      "Skills Gained - Data Cleaning & Preprocessing, Exploratory Data Analysis (EDA), Machine Learning & Model Building, Feature Engineering, Model Evaluation & Optimization.",
    ],
  },
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