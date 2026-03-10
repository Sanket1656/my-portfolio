# My Developer Portfolio

Welcome to my personal portfolio! This project is a modern, responsive, and performant web application built to showcase my projects, skills, and experience as a software developer.

## Features
- **Responsive Design**: Carefully crafted to look perfect on mobile, tablet, and desktop devices.
- **Modern UI**: Implements a dark mode aesthetic with rich gradients, glassmorphism, and micro-animations using Framer Motion.
- **Performance Optimized**: Implements lazy loading for React components and images to ensure fast load times. Built using Vite to provide an extremely fast development and build experience.
- **Modular Components**: Architecture divided into clean, reusable React components (`Hero`, `About`, `Skills`, `Projects`, `Contact`).

## Technologies Used
- **Frontend**: React 19 (Vite)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: React Icons (Feather Icons, Simple Icons)

## Getting Started Locally

To run this project on your local machine, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build for production:**
   To verify and optimize the project for deployment:
   ```bash
   npm run build
   ```
   You can preview the production build using `npm run preview`.

## Deployment Instructions

This project is optimized to be deployed seamlessly on modern hosting platforms.

### Vercel (Recommended)
1. Push your code to a GitHub repository.
2. Sign up or log into [Vercel](https://vercel.com/).
3. Click **Add New** -> **Project**.
4. Import your GitHub repository.
5. Vercel will auto-detect **Vite**. Leave the default build command (`npm run build`) and output directory (`dist`) as they are.
6. Click **Deploy**. Vercel will automatically generate a free SSL certificate and provide a deployment URL.
7. To add a custom domain, navigate to your Project Settings > Domains and enter your custom domain.

### Netlify
1. Log into [Netlify](https://netlify.com/) and click **Add new site** -> **Import an existing project**.
2. Connect your GitHub account and select your repository.
3. Build Settings:
   - Build Command: `npm run build`
   - Publish directory: `dist`
4. Click **Deploy site**.
5. You can configure a custom domain and SSL from the Netlify site settings.

## Challenges & Solutions

1. **Performance Optimization with Large Component Trees**
   - *Challenge*: As the application grew, the initial bundle size started to increase, leading to a slightly longer Time to Interactive (TTI).
   - *Solution*: Implemented React lazy loading (`React.lazy` and `Suspense`) in `App.jsx` for all section components (`Hero`, `Projects`, etc.). This split the code into smaller chunks, loading sections on demand and improving initial load speed significantly.

2. **Complex Layout Shifts via Default Styles**
   - *Challenge*: The base Vite template generated `display: flex` and `min-width` rules on the `body` tag in `index.css`, which broke the standard block layout required by Tailwind.
   - *Solution*: Identified the conflicting global layout styles through cross-browser previewing, removed them, and fully transitioned to Tailwind utilities using CSS custom properties via the new `@theme` API in Tailwind CSS v4.

3. **Responsive Mobile Menu Animations**
   - *Challenge*: Creating a smooth, performant mobile menu that expands and collapses elegantly on low-end devices.
   - *Solution*: Employed `AnimatePresence` from Framer Motion to handle mount and unmount animations with highly optimized GPU-accelerated transforms (`y` and `opacity`).

## Live Demo & Repository
- **Deployed Website**: [Insert Live URL Here]
- **Repository**: [https://github.com/your-username/my-portfolio](https://github.com/your-username/my-portfolio)

# my-portfolio
A modern responsive portfolio website built with React to showcase my projects, skills, and experience. Includes sections for About Me, Projects, Skills, Resume, and Contact. Optimized for performance with lazy loading and deployed for production.
