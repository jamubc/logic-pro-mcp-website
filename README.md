# Logic Pro MCP Website

This is the official website for the Logic Pro MCP (Model Context Protocol) server, showcasing the AI-powered music production tool for Logic Pro.

## Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Project Structure
```
website/
├── app/              # Next.js app directory
│   ├── page.tsx      # Landing page
│   ├── docs/         # Documentation pages
│   └── roadmap/      # Roadmap page
├── components/       # React components
│   ├── layout/       # Header, Footer
│   └── landing/      # Hero, Features, etc.
├── lib/              # Utilities and data
└── public/           # Static assets
```

### Key Features
- Modern Next.js 14 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Framer Motion for animations
- Responsive design
- SEO optimized

### Deployment
The site is configured for deployment on Vercel:
1. Push to main branch
2. Vercel automatically deploys
3. Custom domain: logicpromcp.dev (when configured)

### Contributing
1. Create feature branch
2. Make changes
3. Test locally
4. Submit PR

## License
Same as main project