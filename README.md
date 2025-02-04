# React + Vite + Tailwind + Express Starter

## Overview

This is a **starter template** for building web apps with **React, Vite, TailwindCSS, and Express**. It provides flexibility without the constraints of frameworks like Next.js or Remix. Serve your frontend and API from a single Express server for easier deployment.

## Benefits

- **No Framework Lock-in** – Customize your app structure without Next.js or Remix constraints.
- **Unified Full-Stack Setup** – Serve frontend and API from the same Express server.
- **Efficient Development** – Vite ensures fast builds and hot reloading.
- **TailwindCSS for Styling** – Quickly create responsive designs.
- **No TypeScript** – This project intentionally avoids TypeScript because it adds unnecessary complexity to small and medium-sized projects. JavaScript is sufficient for this scale, allowing for faster iteration, simpler builds, and fewer dependencies. TypeScript's strict typing can introduce overhead that outweighs its benefits when working on agile, lightweight codebases. You can add it in yourself if you find it necessary.
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

### Deployment Options

- **VPS (DigitalOcean, Linode, AWS EC2)**
- **Heroku** – Use a single **Procfile**
- **Railway, Fly.io, Render.com**

As of right now, we highly recommend Render.com for their ease of use, reliability, and range of offerings, including their Postgres plans.

## Conclusion

This setup keeps things simple and flexible. Modify as needed and deploy where it suits you.
