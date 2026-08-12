# EduRecruitment.co.uk

University application support for mature students. Free, personal guidance for adults returning to education.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** Tailwind CSS v4, shadcn/ui, Motion (Framer Motion)
- **Fonts:** Instrument Serif (headings), Plus Jakarta Sans (body)
- **Email:** Resend
- **Data:** Google Sheets (lead tracking)
- **Icons:** Lucide React, Tabler Icons

## Getting Started

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your API keys

# Run development server
npm run dev
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Next.js dev server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run format` | Format with Prettier |
| `npm run typecheck` | Run TypeScript type checking |

## Project Structure

```
├── app/
│   ├── about/          # About page
│   ├── actions/        # Server actions (lead submission)
│   ├── api/            # API routes (lead submission)
│   ├── contact/        # Contact page
│   ├── legal/          # Privacy, Terms, Cookies
│   ├── resources/      # Blog/resources listing + [slug] pages
│   └── universities/   # University partner pages
├── components/
│   ├── ui/             # shadcn/ui components
│   └── *.tsx           # Custom components
├── data/               # University data
├── lib/                # Utility functions
└── public/             # Static assets (logos)
```

## Environment Variables

See `.env.example` for all required variables:

- `RESEND_API_KEY` — For email notifications
- `FOUNDERS_EMAIL` — Where leads are sent
- `GOOGLE_*` — Optional Google Sheets integration

## Deployment

```bash
npm run build
npm run start
```

The site can be deployed to any Node.js hosting platform (Vercel, Railway, etc.).