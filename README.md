# 💻 Fifi's Portfolio — Interactive 3D Developer Portfolio

An interactive, animated personal portfolio website built with React, Three.js, and React Three Fiber. Featuring a fully rigged 3D computer model that displays live project preview videos on its screen, smooth GSAP-powered animations, and a responsive, modern UI.

🔗 **Live site:** https://portfolio-fifi-nc5fdq2x8-fadwa-aitbaalis-projects.vercel.app/
🔗 **Repo:** https://github.com/fadwabaali/portfolio_fifi

---

## 📋 Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Project Structure](#project-structure)
5. [Getting Started](#getting-started)
6. [Environment Variables](#environment-variables)
7. [Available Scripts](#available-scripts)
8. [Roadmap](#roadmap)
9. [Author](#author)

---

## Overview

This portfolio showcases my work as a full-stack developer through an immersive 3D experience rather than a static page. The centerpiece is a custom 3D computer model (GLTF) whose monitor screen dynamically plays a video preview of each featured project as you browse — built with `@react-three/fiber`, `drei`, and a hand-tuned video-texture / UV-mapping pipeline to get the "cover fit" look right on a baked texture atlas.

## Features

- 🖥️ **3D computer showcase** — project videos render live on the monitor mesh using `THREE.VideoTexture`, with cover-fit scaling so videos fill the screen without distortion
- 🎞️ **Project carousel** — cycle through projects with animated transitions (GSAP)
- 🌀 **Scroll & reveal animations** powered by GSAP
- 🎨 **Responsive design** with Tailwind CSS
- ⚡ **Fast dev/build** via Vite
- 📱 **Mobile-optimized** 3D rendering with fallback loading states
- 📬 **Contact section** wired up with EmailJS

## Tech Stack

| Category | Tech |
|---|---|
| Framework | React 19 |
| 3D | Three.js, React Three Fiber, @react-three/drei |
| Animation | GSAP (`@gsap/react`) |
| Styling | Tailwind CSS |
| Build tool | Vite |
| Contact form | EmailJS |
| Language | JavaScript (JSX) |

## Project Structure

```
portfolio_fifi/
├── public/
│   ├── models/          # GLTF/GLB 3D models (e.g. computer.glb)
│   ├── textures/         # Project preview videos/images
│   └── images/
├── src/
│   ├── components/       # Reusable components (DemoComputer, Loading, etc.)
│   ├── sections/          # Page sections (Hero, Projects, About, Contact)
│   ├── constants/         # Project data, nav links, etc.
│   └── App.jsx
├── index.html
├── vite.config.js
└── package.json
```

> Note: adjust this tree to match your actual folder names if they differ.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- npm (comes with Node.js)
- [Git](https://git-scm.com/)

### Installation

```bash
git clone https://github.com/fadwabaali/portfolio_fifi.git
cd portfolio_fifi
npm install
```

### Run locally

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

## Environment Variables

Create a `.env` file in the project root:

```env
VITE_APP_EMAILJS_SERVICE_ID=
VITE_APP_EMAILJS_TEMPLATE_ID=
VITE_APP_EMAILJS_PUBLIC_KEY=
```

Get these from your [EmailJS](https://www.emailjs.com/) dashboard so the contact form can send messages.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the local dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Author

**Fifi (Fadwa Baali)**
Full-stack developer (JavaScript & Python) · Student at FSBM Hassan II
📫 Reach out via the contact form on the site, or connect on GitHub: [@fadwabaali](https://github.com/fadwabaali)

---

*Built on top of a 3D portfolio foundation, customized with original 3D screen video-texture logic, project content, and design tweaks.*