# 🚀 Personal Portfolio

A modern, interactive developer portfolio built with Next.js, Framer Motion, and Tailwind CSS.

## ✨ Features

- **Smooth scrolling** powered by Lenis
- **Scroll-triggered animations** with Framer Motion
- **Active section highlighting** in the navbar
- **Contact form** with mailto integration
- **Fully responsive** — mobile, tablet, desktop
- **Dark theme** with accent color customization

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org) | Framework (App Router) |
| [React 19](https://react.dev) | UI Library |
| [TypeScript](https://www.typescriptlang.org) | Type safety |
| [Tailwind CSS v4](https://tailwindcss.com) | Styling |
| [Framer Motion](https://www.framer.com/motion) | Animations |
| [Lenis](https://lenis.darkroom.engineering) | Smooth scroll |

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with Lenis
│   │   ├── page.tsx         # Main page
│   │   └── globals.css      # Tailwind v4 theme config
│   ├── components/
│   │   ├── Navbar.tsx       # Fixed navbar with active section tracking
│   │   ├── Home.tsx         # Hero section with profile image
│   │   ├── About.tsx        # About + stat cards
│   │   ├── Skills.tsx       # Skill pills by category
│   │   ├── Projects.tsx     # Project cards grid
│   │   ├── Experience.tsx   # Timeline
│   │   └── Contact.tsx      # Contact form + social icons
│   └── lib/
│       └── data.ts          # All personal content (edit this!)
└── public/
    ├── profile.jpg          # Your profile photo
    └── resume.pdf           # Your resume
```

# Install dependencies
npm install

# Start dev server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.