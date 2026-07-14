# Shreyansh Tripathi — Portfolio (React 

Neo-brutalist developer portfolio built with React 18 + Vite + CSS Modules.

## 📁 Project Structure

```
shreyansh-portfolio/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx              ← React entry point
    ├── App.jsx               ← Root component, wires everything
    ├── data/
    │   └── portfolio.js      ← ALL your content lives here (edit this!)
    ├── styles/
    │   └── global.css        ← CSS variables, keyframes, shared utilities
    └── components/
        ├── Cursor.jsx        ← Custom square cursor
        ├── Particles.jsx     ← Floating square particles background
        ├── ScrollUtils.jsx   ← Scroll progress bar + back-to-top button
        ├── Navbar.jsx/.module.css     ← Sticky nav, mobile hamburger
        ├── Hero.jsx/.module.css       ← Letter glitch canvas, typewriter
        ├── Marquee.jsx                ← Reusable scrolling marquee strip
        ├── About.jsx/.module.css      ← Animated stat counters
        ├── Skills.jsx/.module.css     ← Stack cards with shine animation
        ├── Projects.jsx/.module.css   ← Project cards with GitHub links
        ├── Contact.jsx/.module.css    ← Controlled form with sent state
        └── Footer.jsx/.module.css     ← Social links, copyright
```

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open http://localhost:5173
```

## 🏗️ Build for Production

```bash
npm run build
# Output goes to /dist — deploy to Vercel, Netlify, GitHub Pages, etc.
```

## ✏️ Customising Content

**All your portfolio content is in one place:**

```
src/data/portfolio.js
```

Edit these exports:
- `SOCIALS` — your email, GitHub, LinkedIn links
- `STATS` — the animated number cards (targets + labels)
- `PROJECTS` — project cards (name, desc, tech, github link, badge colour)
- `SKILLS` — skill category cards with tag items
- `TYPEWRITER_PHRASES` — the rotating role text in the hero
- `MARQUEE_TECH` / `MARQUEE_ROLES` — the scrolling marquee text

## 🔗 Updating Project GitHub Links

In `src/data/portfolio.js`, update the `github` field for each project:

```js
{
  num: "01",
  name: "TruScope",
  github: "https://github.com/PaceRunerz/VeriFact",  // ← change this
  ...
}
```

## 📦 Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo to vercel.com for auto-deployments.

## 🎨 Design System

All colours are CSS variables in `src/styles/global.css`:

```css
--accent:  #FF6B6B   /* hot red  */
--yellow:  #FFD93D   /* vivid yellow */
--violet:  #C4B5FD   /* soft violet */
--cream:   #FFFDF5   /* paper background */
--dark:    #13131f   /* skills section bg */
```
