# 🌟 Premium Interactive Professional Portfolio

An immersive, highly-interactive, and visually-stunning professional portfolio application built on a modern **React 19 + Vite** stack. Featuring advanced WebGL canvas backgrounds, mouse-reactive physics, smooth micro-animations, and sleek dark mode aesthetics.

> 💡 **Design Credit:** The visual design, layouts, services accordion, and interactive elements of this portfolio were inspired by the exceptionally sleek and modern portfolio design of [Oscar Andrés Hernández Pineda](https://oscarhernandez.vercel.app).

---

## ✨ Features

- 🌌 **Volumetric WebGL Light Rays**: A dynamic Canvas/WebGL-based background (`LightRays`) that responds to mouse cursor movement, adding depth and ambient motion.
- 🧬 **Interactive Physics Ball Pit**: A highly-performant 2D physics-based canvas simulation (`BallPit`) where bouncers react to mouse contact and gravity.
- ⚡ **Futuristic Glitch Aesthetics**: Customizable glitch-text components (`LetterGlitch`) using a matrix-style terminal text rain/reveal effect.
- 📈 **High-Fidelity Animations**: Built with Framer Motion, GSAP, and custom cubic-bezier transitions for buttery-smooth visual feedback.
- 📂 **Accordian Services Grid**: Beautiful, minimalist folding panels for describing service domains (Web Dev, Mobile Dev, UI/UX).
- ✉️ **Integrated Contact Form**: Direct client communication channel powered by **EmailJS**, allowing clients to contact you directly with immediate delivery.
- 📱 **Fully Responsive Layout**: Optimally adapted across standard desktops, tablets, and mobile layouts.

---

## 🛠️ Technology Stack

| Category | Technologies |
| :--- | :--- |
| **Core & Framework** | React 19, Vite, ES6+ Javascript |
| **Styling & Theme** | Vanilla CSS, Flexbox/Grid layouts, HSL customized palette |
| **Graphics & Canvas** | Three.js, OGL (WebGl framework), HTML5 2D Context |
| **Animation Libraries** | Framer Motion (`motion`), GSAP (GreenSock Animation Platform) |
| **APIs & Tools** | EmailJS, Lucide React, React Text Transition |

---

## 🧩 Core Interactive Components

This repository contains a suite of premium reusable UI components:

1. **`LightRays`**: Controls canvas shader rendering of dynamic ambient light columns. It calculates mouse distances to guide rays and adjusts noise distortion in real-time.
2. **`BallPit`**: A complete physics playground featuring gravity settings, customized boundaries, canvas resizing, and drag-and-pull physics for glowing spherical elements.
3. **`LetterGlitch`**: Uses high-performance HTML5 canvas context text drawing to cycle randomly through character-shuffling glitched sequences.
4. **`ShinyText`**: An elegant typography component that runs a customized radial linear-gradient animation over headers and buttons.
5. **`InfiniteSliding`**: Continuous marquees displaying tech skill logos and stacks with seamless loops.
6. **`WhatIDo (Accordion)`**: Handles dynamic state tracking of services with elegant expanding drawers and Lucide iconography.

---

## 📂 Folder Structure

```filepath
src/
├── components/
│   ├── Accordian/         # Folding service section ("What I do?")
│   │   ├── Accordian.jsx
│   │   └── WhatIDo.jsx
│   ├── BallPit/           # Physics-based interactive particle field
│   ├── Contact/           # Contact outer wrapper and section grid
│   ├── Email/             # Form capturing and forwarding messages using EmailJS
│   ├── Home/              # Main hero container & core layouts
│   ├── InfiniteSliding/   # Infinite rolling ticker banner for skills
│   ├── LetterGlitch/      # Sleek Canvas matrix-glitch background 
│   ├── LightRays/         # Mouse-interactive WebGL backdrop
│   ├── Nav/               # Floating navigation with smooth scrolling
│   ├── Project/           # Main Projects display layout & configuration
│   ├── ProjectCard/       # Individual interactive showcases with repository links
│   ├── ScrollVelocity/    # Scroll-speed-driven text transition components
│   └── ShinyText/         # Radiant shining typography effect
├── App.css                # Layout layout settings & responsive spacing
├── App.jsx                # Main entry component wrapping sections
├── index.css              # Reset rules and global styling definitions
└── main.jsx               # React 19 rendering hook and strict mode
```

---

## 🚀 Getting Started

Follow these steps to set up and run the portfolio locally on your machine.

### 📋 Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (v18+ recommended) along with `npm`.

### 🔧 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Pranav00076/reactbits.git
   cd reactbits
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory to store your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Launch the development server:**
   ```bash
   npm run dev
   ```
   The local development server will start at `http://localhost:5173`.

5. **Build for Production:**
   To compile and optimize your project for hosting:
   ```bash
   npm run build
   ```

---

## 🎖️ Acknowledgements

- Visual design and sleek minimal components inspired by [Oscar Andrés Hernández Pineda's Portfolio](https://oscarhernandez.vercel.app).
- Canvas physics and volumetric shaders designed with the assistance of [Three.js](https://threejs.org/) and [OGL](https://github.com/o-g-l/ogl).
