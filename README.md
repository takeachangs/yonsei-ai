# Yonsei.AI Website

## Project Structure
```
yonsei-ai/
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/           # Next.js pages
│   ├── lib/            # Utility functions and APIs
│   ├── styles/         # Global styles and CSS modules
│   └── types/          # TypeScript type definitions
├── public/             # Static files
└── content/           # Markdown content for blog posts
```

## Features
- Research: arXiv API integration for AI papers
- News & Events: Custom CMS for news updates
- Blog: Static site generation from markdown
- AI Tools: Placeholder for future chatbot integration
- About: Static content

## Getting Started
1. Install dependencies: `npm install`
2. Run development server: `npm run dev`
3. Build for production: `npm run build`

## API Integration
- arXiv API setup in `src/lib/arxiv.ts`
- News aggregation in `src/lib/news.ts`
- Blog post processing in `src/lib/blog.ts`