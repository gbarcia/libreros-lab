# Libreros Lab Website

Official website for the Libreros Lab at Yale School of Medicine, Department of Pathology.

## About

The Libreros Lab, led by Dr. Stephania Libreros, PhD, focuses on:
- Resolution of inflammation
- Specialized pro-resolving mediators (SPMs)
- Neutrophil biology
- Tissue homeostasis

## Tech Stack

- **Framework**: React + Vite
- **Animations**: GSAP + ScrollTrigger
- **Styling**: CSS with custom properties
- **Deployment**: Vercel

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── desk/       # Desk items (Folder, Terminal, Flask, etc.)
│   ├── ui/         # UI components (Masthead, Panels, etc.)
│   └── shared/     # Shared components
├── sections/       # Content sections (PI, Research, etc.)
├── hooks/          # Custom React hooks
├── data/           # Lab data (publications, team, etc.)
└── styles/         # CSS files
```

## Deployment

Automatic deployment via Vercel on push to `main` branch.

## Contact

- **Principal Investigator**: Stephania Libreros, PhD
- **Email**: stephania.libreros@yale.edu
- **Location**: Yale School of Medicine, New Haven, CT
