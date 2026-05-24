# Vaishali ENT & Vertigo Clinic Website

A premium, highly interactive, and culturally optimized Single Page Web Application (SPA) built for **Dr. Vaishali Sangole's ENT & Vertigo Clinic** in Kharghar, Navi Mumbai.

## Features

- ⚜️ **Bespoke Theme Switcher**: Instant transition between three custom-designed layouts:
  - **Default**: Modern glassmorphic clinical portal (Navy/Teal).
  - **Boutique Elegance**: Classic serif-based luxurious aesthetic (Warm Alabaster/Gold).
  - **Telehealth Dark**: Futuristic midnight dashboard style (Slate/Cyan).
- 💬 **WhatsApp Booking Wizard**: A client-side scheduler that formats patient data and coordinates direct confirmation via WhatsApp API.
- 🕒 **Live operational status (IST)**: Calculates clinic open/closed states dynamically based on Indian Standard Time.
- 👂 **Tinnitus Sound Spa**: Web Audio API-synthesized sound masker (White, Pink, Brown noise).
- 📋 **Interactive Diagnostic Prep Checklists**: Step-by-step checklists for VNG, BERA, and Audiometry with one-click sharing to WhatsApp.

## Project Structure

- `index.html` - Semantic structure, meta SEO tags, viewport styling.
- `styles.css` - HSL color variables and layout system.
- `app.js` - Client-side hash routing, audio synthesis, and checklist engines.
- `images/` - Real clinic gallery assets and doctor portrait.
- `.github/workflows/` - CI/CD pipeline configuration for Firebase Hosting.

## Deployment

Pushes and merges to the `main` branch automatically build and deploy the application to Firebase Hosting.
