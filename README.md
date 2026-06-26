# Ashutosh Singh Portfolio

Personal portfolio built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion.

The site showcases founder work at Rigour Labs, production AI platforms, and recent Turing platform engineering work including CTP, identity, GCP infrastructure, Terraform, Workload Identity Federation, Keycloak, Kubernetes, GitHub Actions, observability, and event-driven task operations.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

## Content Model

Most profile content lives in `data/profile.ts`.

Main page sections are in `components/`:

- `Hero.tsx`
- `About.tsx`
- `Experience.tsx`
- `Skills.tsx`
- `Projects.tsx`
- `Contact.tsx`

SEO metadata and JSON-LD structured data are in `app/layout.tsx`.
