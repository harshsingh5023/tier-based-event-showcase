# 🎫 Tier-Based Event Showcase

> A modern Next.js application showcasing tier-based access control with smooth animations and premium user experience.

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css)
![Clerk](https://img.shields.io/badge/Clerk-Auth-6C47FF)
![Supabase](https://img.shields.io/badge/Supabase-DB-3ECF8E?logo=supabase)

## ✨ Features

- 🔐 **Secure Authentication** - Clerk-powered user management
- 🎯 **Tier-Based Access** - Dynamic content filtering by user tier
- 🎨 **Smooth Animations** - Polished UI with entrance animations and micro-interactions
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS
- ⚡ **Real-time Updates** - Live tier changes and event filtering
- 🎭 **Loading States** - Engaging spinners and skeleton screens
- 🛡️ **Error Handling** - Graceful error boundaries and user feedback

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account
- Clerk account

### 1. Clone & Install

```bash
git clone <repository-url>
cd tier-based-event-showcase
npm install
```

### 2. Environment Setup

Create `.env.local` with your keys:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/events
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/events
```

**Get your keys:**

- 🔑 [Clerk Dashboard](https://clerk.dev) → API Keys
- 🗄️ [Supabase Dashboard](https://supabase.com) → Settings → API

### 3. Database Setup

1. Create a new Supabase project
2. Go to SQL Editor
3. Run the commands from `supabase-setup.sql`

### 4. Clerk Configuration

1. In Clerk Dashboard → User & Authentication → Public metadata
2. Add custom field: `tier` (string)
3. Set default value: `"free"`

### 5. Launch

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

## 🏆 Tier System

| Tier            | Access Level                | Badge Color |
| --------------- | --------------------------- | ----------- |
| 🆓 **Free**     | Free events only            | Gray        |
| 🥈 **Silver**   | Free + Silver events        | Silver      |
| 🥇 **Gold**     | Free + Silver + Gold events | Gold        |
| 💎 **Platinum** | All events                  | Purple      |

## 🧪 Demo Accounts

| Tier     | Email                   | Password   |
| -------- | ----------------------- | ---------- |
| Free     | test-free@gmail.com     | `Agra@123` |
| Silver   | test-silver@gmail.com   | `Agra@123` |
| Gold     | test-gold@gmail.com     | `Agra@123` |
| Platinum | test-platinum@gmail.com | `Agra@123` |

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Authentication**: Clerk
- **Database**: Supabase (PostgreSQL)
- **Styling**: Tailwind CSS
- **Animations**: Custom CSS keyframes
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
├── app/
│   ├── events/page.js      # Events dashboard
│   ├── globals.css         # Global styles & animations
│   ├── layout.js          # Root layout
│   └── page.js            # Landing page
├── lib/
│   ├── supabase.js        # Database client
│   └── tiers.js           # Tier logic & utilities
├── supabase-setup.sql     # Database schema
└── middleware.js          # Route protection
```

## 🎨 Animation Features

- **Page Transitions**: Smooth fade-in effects
- **Staggered Cards**: Sequential entrance animations
- **Hover Effects**: Scale, shadow, and color transitions
- **Loading States**: Animated spinners and pulse effects
- **Micro-interactions**: Button feedback and image zoom

## 🚀 Deployment

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/tier-based-event-showcase)

1. Connect your GitHub repository
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push

## 📝 License

MIT License - feel free to use this project for learning and development.

---

**Built with ❤️ using Next.js, Clerk, and Supabase**
