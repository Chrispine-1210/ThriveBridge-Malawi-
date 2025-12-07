# ThriveBridge Malawi - Replit Configuration

## Overview

ThriveBridge Malawi is a comprehensive youth empowerment and family development platform built as a full-stack web application. The application serves as a strategic incubator for self-reliant, value-driven leadership across generations in Malawi, focusing on youth mentorship, family transformation, and community outreach.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with Shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state
- **Build Tool**: Vite for development and production builds
- **UI Components**: Radix UI primitives with custom styling

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Built-in session handling
- **API Design**: RESTful API with JSON responses

### Key Technology Decisions
- **Monorepo Structure**: Single repository with shared types and schemas
- **Full-stack TypeScript**: Type safety across client and server
- **Modern React**: Functional components with hooks
- **Serverless Database**: Neon for scalable PostgreSQL hosting
- **Component Library**: Shadcn/ui for consistent design system

## Key Components

### Database Schema (`shared/schema.ts`)
- **Users Table**: Authentication and user management
- **Contacts Table**: Contact form submissions with categorization
- **Newsletters Table**: Email subscription management
- **Validation**: Zod schemas for runtime type checking

### API Endpoints (`server/routes.ts`)
- `POST /api/contact` - Contact form submission
- `POST /api/newsletter` - Newsletter subscription
- `GET /api/contacts` - Retrieve contact submissions (admin)
- `GET /api/newsletters` - Retrieve newsletter subscriptions (admin)

### Frontend Pages
- **Home**: Hero section with statistics and news
- **About**: Organization story and team information
- **Programs**: Youth empowerment and family development programs
- **Stories**: Impact stories and testimonials
- **Resources**: Research reports and training materials
- **Get Involved**: Donation, volunteer, and partnership opportunities
- **Contact**: Contact form and organization information

### Storage Layer (`server/storage.ts`)
- **Interface**: IStorage for database operations abstraction
- **Implementation**: Memory storage for development (can be extended to Drizzle)
- **Operations**: CRUD operations for users, contacts, and newsletters

## Data Flow

1. **User Interaction**: Users interact with React components
2. **Form Submission**: Forms use React Hook Form with Zod validation
3. **API Calls**: TanStack Query manages server communication
4. **Backend Processing**: Express routes handle API requests
5. **Database Operations**: Storage layer manages data persistence
6. **Response Handling**: Success/error states update UI accordingly

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Router (Wouter)
- **UI Components**: Radix UI primitives, Lucide React icons
- **Styling**: Tailwind CSS, Class Variance Authority
- **Forms**: React Hook Form, Hookform Resolvers
- **State Management**: TanStack React Query
- **Utilities**: Date-fns, CLSX, Tailwind Merge

### Backend Dependencies
- **Server**: Express.js, Node.js HTTP module
- **Database**: Drizzle ORM, Neon Database serverless
- **Validation**: Zod for schema validation
- **Session**: Connect-pg-simple for PostgreSQL sessions
- **Development**: TSX for TypeScript execution

### Development Tools
- **Build**: Vite, ESBuild
- **TypeScript**: TSC for type checking
- **Database**: Drizzle Kit for migrations
- **Replit**: Custom plugins for development environment

## Deployment Strategy

### Development Environment
- **Command**: `npm run dev` - Runs development server with hot reload
- **Port**: 5000 (configured in .replit)
- **Database**: Uses DATABASE_URL environment variable

### Production Build
- **Frontend**: Vite builds static assets to `dist/public`
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Command**: `npm run build` followed by `npm run start`

### Replit Configuration
- **Modules**: Node.js 20, Web, PostgreSQL 16
- **Auto-deployment**: Configured for autoscale deployment
- **Environment**: Development and production modes supported

## Changelog

```
Changelog:
- June 19, 2025: Career coaching integration and brand enhancement
  - Added dedicated Career Coaching page with comprehensive service details
  - Integrated career coaching into main navigation and footer
  - Added prominent career coaching highlight section on home page
  - Updated hero section to feature "Free Career Coaching" as primary CTA
  - Enhanced brand colors with custom ThriveBridge theme (emerald, blue, amber)
  - Created updated downloadable package: thrivebridge-malawi-updated.zip
- June 19, 2025: Complete ThriveBridge Malawi website development
  - Built comprehensive 7-page website with professional design
  - Implemented all core features: contact forms, newsletter signup, responsive design
  - Created downloadable zip package for user distribution
- June 19, 2025: Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```