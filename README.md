For a more opinionated version, see the v2 [here](https://github.com/goodalchemy/react-vite-tailwind-express-starter-2).

# React + Vite + Tailwind + Express Starter

_aka, Luckenbach_

## Overview

A flexible starter template for building web apps with React, Vite, TailwindCSS, and Express—without the complexity of meta-frameworks like Next.js, Remix, Astro, etc. This setup prioritizes simplicity, control, and performance, making it ideal for SaaS apps, dashboards, and internal tools.

While frameworks like Next.js, Remix, and Astro shine for content-driven sites, their abstractions can add unnecessary overhead for web apps. This template keeps things lean: a single Express server seamlessly serving both frontend and API for easier deployment and maintenance.

## 🎵 Back to the Basics of React

Modern React development often feels overcomplicated. While abstractions have their place, sometimes you just need a simple, flexible setup without unnecessary constraints.

In the spirit of Waylon Jennings’ _Luckenbach, Texas_:

> Maybe it’s time we got back to the basics of love.

Let’s strip away the bloat and focus on what matters: building great React apps with Vite, TailwindCSS, and Express—without the extra noise.

## client

To create the `client/` folder - our React frontend - we ran the Vite setup command inside the project, choosing "React" as the framework:

`npm create vite@latest`

We also chose **Javascript + SWC** during setup as well, which we recommend.

## Development

We use **concurrently** in development to run both the frontend and server simultaneously. During development, the full app (frontend + server) is available at localhost:3000, while the frontend alone runs at localhost:5173 with hot module reloading. If you're only making frontend or styling changes, localhost:5173 is the better option for a faster workflow.

In production, only the server needs to be running.

## Benefits

- **No Framework Lock-in** – Customize your app structure without Next.js or Remix constraints.
- **Unified Full-Stack Setup** – Serve frontend and API from the same Express server.
- **Efficient Development** – Vite ensures fast builds and hot reloading.
- **TailwindCSS for Styling** – Quickly create responsive designs.
- **No TypeScript** – This project sticks to JavaScript for simplicity, speed, and fewer dependencies. TypeScript can add unnecessary overhead for small to medium projects, but you're free to add it if needed.
- **Simple Deployment** – Easily deploy to a single server or separate services as needed.

## API Development with Express

Define routes under `src/routes/`. Example:

```js
// src/routes/hello.js
const express = require("express");
const router = express.Router();

router.get("/hello", (req, res) => {
  res.json({ message: "Hello World!" });
});

module.exports = router;
```

On the homepage - `/client/page/Home.js` - you will see an example of making a call to your server API from the frontend.

Going forward, you will likely want to enhance these fetches with support from packages like **zustand** for global state management and **@tanstack/react-query** for caching/refetching.

### Deployment Options

- **VPS (DigitalOcean, Linode, AWS EC2)**
- **Heroku** – Use a single **Procfile**
- **Railway, Fly.io, Render.com**

As of right now, we highly recommend Render.com for their ease of use, reliability, and strong range of offerings - especially their Postgres plans. This is not an ad, we just really like them.

## Conclusion

This setup keeps things simple and flexible. Modify as needed and deploy where it suits you.
