# Web Project – ElisleyMakeup


<img width="1899" height="935" alt="image" src="https://github.com/user-attachments/assets/6d9631ce-653c-4cec-8421-ea8a006915c6" />


![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![CSS Modules](https://img.shields.io/badge/CSS_Modules-000000?style=flat&logo=css3&logoColor=white)

![Strapi](https://img.shields.io/badge/Strapi-2E7EEA?style=flat&logo=strapi&logoColor=white)

![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=flat&logo=render&logoColor=000000)


![UI/UX](https://img.shields.io/badge/UI%2FUX-Design-ff69b4?style=flat)
![Branding](https://img.shields.io/badge/Branding-Strategy-purple?style=flat)


This repository contains the **end‑to‑end development** of a professional website, conceived, designed, coded, and structured entirely from scratch.

The project went through **two major technical phases** and includes not only front‑end and back‑end development, but also **branding, UI/UX, and launch strategy**.

---

## Project Overview

This website was developed **from start to finish**, including:

* Brand research and concept definition
* Visual identity creation (brand guide)
* Color palette and aesthetic guidelines
* UI/UX design
* Front‑end implementation
* Back‑end integration (CMS)
* Launch strategy

The goal of this project was to create a **modern, scalable, responsive application aligned with professional market standards**.

---

## Technical Evolution

### First Version

The first version of the website was built using:

* **HTML**
* **CSS**
* **Vanilla JavaScript**

This phase focused on:

* Idea validation
* Initial page structure
* Layout definition and user flow

https://github.com/MayzaMendesRodrigues/elisleyMakeup

---

### Second Version (Current)

After initial validation, the project was **fully refactored** to a modern stack, aiming for:

* Better code organization
* Component reusability
* Scalability
* Performance
* Maintainability

Current front‑end stack:

* **Next.js (App Router)**
* **React**
* **TypeScript**
* **CSS Modules**

---

## Front‑end

### Architecture

The front‑end follows a **component‑based architecture**, with clear separation of concerns:

* Reusable UI components
* Well‑defined sections (Home, Services, Gallery, etc.)
* Encapsulated styling using CSS Modules

### UI Components

Some of the main reusable components include:

* `Title`
* `Paragraph`
* `Button`
* `ServiceItem`

TypeScript interface example:

```ts
interface ServiceItemProps {
  title: string;
  text?: string;
  variant?: "brown" | "white";
  buttonText?: string;
  imageSrc?: StaticImageData;
}
```

These components ensure:

* Visual consistency
* Easier maintenance
* Scalable design system

---


## Technical Decisions

### Why Next.js

The choice of **Next.js** was strategic and based on performance, scalability, and user experience.

Main reasons:

* **Significant performance improvements** compared to the initial vanilla implementation
* Built‑in optimizations such as:

  * Code splitting
  * Lazy loading
  * Image optimization
* Improved **SEO**, essential for a service‑based and institutional website
* Modern architecture using **App Router**, improving project organization

The refactor from the first version (HTML, CSS, and Vanilla JavaScript) to Next.js was mainly driven by:

* **Slow image loading** in the initial version
* Lack of automatic optimizations for heavy visual assets
* Need for better **navigation fluidity** and overall user experience
* Improved handling of image and content loading
* Better code organization and maintainability
* Component reusability
* Preparing the project for future growth

---

### Why Strapi (Back‑end)

**Strapi** was chosen as the back‑end (Headless CMS) based on a **real client need**.

Identified requirement:

* The client needed to **frequently publish photos of completed work**
* Update content without relying on code changes
* Maintain autonomy over website content management

Why Strapi was the best choice:

* Simple and intuitive admin interface
* Allows the client to:

  * Add new projects and services
  * Upload and manage images
  * Update content dynamically
* Clear separation between content and presentation
* Seamless integration with Next.js
* Scalable for future needs

With Strapi, the website transitions from a static site into a **living product**, easily managed by the client.

https://github.com/MayzaMendesRodrigues/elileymakeup_next-backend

---

## Branding & Design

The project includes a complete **branding process**, covering:

* Visual identity creation
* Primary and secondary color definitions
* Brand usage guidelines
* Visual consistency across all screens

The design was carefully crafted to communicate:

* Modernity
* Sophistication
* Clarity
* Trust
https://www.figma.com/design/sqKYP6aByWxztNVeK2Hk4d/ELISLEYMAKEUP?node-id=0-1&p=f&t=rAPcR2UT8CSGukBX-0
https://www.figma.com/design/y4PQtsLTZMEyl4tSyEVSBl/LogoElisleyMakeup?node-id=0-1&p=f&t=mIGCMuXjUZQatyT0-0
https://www.figma.com/design/iDPzJ0dZEV6Uj6P6gt1HmC/Manual-de-marca-EV?node-id=0-1&p=f&t=iPIY6wUt0CnSMbZK-0
---

## Deployment & Infrastructure

The project is deployed using a modern and reliable cloud infrastructure, with a clear separation between front‑end and back‑end.

### Front‑end Hosting

* Deployed on **Vercel**
* Optimized for **Next.js** applications
* Benefits include:

  * Automatic builds on deploy
  * Edge‑ready performance
  * Image and asset optimization
  * Global CDN for fast content delivery

### Back‑end Hosting

* Deployed on **Render**
* Hosts the **Strapi Headless CMS**
* Provides:

  * Stable API hosting
  * Environment configuration
  * Scalability for future growth

This separation ensures:

* Independent scaling of front‑end and back‑end
* Better performance and reliability
* Clear architectural boundaries

---

## Launch Strategy

Beyond technical development, the project also included:

* Brand positioning
* Launch strategy planning
* A lean first version (MVP)
* Gradual evolution based on validation and real usage

---

## Commit Convention

The repository follows a clear and semantic commit convention:

* `feat:` new features
* `fix:` bug fixes
* `style:` visual and CSS adjustments
* `refactor:` structural improvements without changing behavior

Examples:

* `style: adjust navbar spacing for mobile`
* `fix: correct scroll behavior on client navigation`
* `refactor: migrate ServiceItem to typed component`

---

## Final Considerations

This project represents a **complete development process**, going far beyond simple coding.

It demonstrates the ability to:

* Think in terms of product
* Build a strong visual identity
* Design and implement interfaces
* Structure scalable and maintainable code
* Refactor and technically evolve a real‑world project


