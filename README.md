# All Souls' Church, Lekki: public website

The public landing page for All Souls' Church, Lekki, built with Next.js and Tailwind CSS.

## Getting started

```bash
cp .env.example .env
npm install
npm run dev
```

## Editing content

Service times, clergy, links and store URLs all live in `components/content.ts`.

The verse of the day, theme of the year and upcoming events come from the church API
(`NEXT_PUBLIC_API_URL`) and refresh every 10 minutes. If the API is unavailable, the page
uses a fallback verse and hides the theme and events.
