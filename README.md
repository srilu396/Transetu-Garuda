# Transetu Garuda (Garuda OM)

Marketing site for **Garuda OM** built with **Next.js 14** (App Router) and deployed on **Vercel**.

## Requirements

- Node.js (see `.nvmrc`)
- npm

## Setup

Install deps:

```bash
npm ci
```

Create local env file:

```bash
cp .env.example .env.local
```

Then edit `.env.local` with real values.

## Run locally

```bash
npm run dev
```

Open `http://localhost:3000`.

## Build / run production locally

```bash
npm run build
npm run start
```

## Environment variables

See `.env.example` for the full list.

- **EMAIL_USER**: Gmail address used to send/receive contact emails
- **EMAIL_PASSWORD**: Gmail *App Password* (recommended), not your normal Gmail password
- **SITE_URL**: Canonical site base URL (e.g. `https://your-domain.com`). Used for metadata, `robots.txt`, and `sitemap.xml`.

## Deploy (Vercel)

- Create a new Vercel project from this repo
- Set env vars in Vercel project settings:
  - `EMAIL_USER`, `EMAIL_PASSWORD`, `SITE_URL`
- Deploy

## Notes

- Contact form endpoint: `POST /api/contact`
- This repository is currently **UNLICENSED / proprietary**.
