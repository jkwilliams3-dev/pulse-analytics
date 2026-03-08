# StreamlineAI — AI-Powered Analytics Dashboard

**🚀 Live Demo:** https://streamline-ai-beta.vercel.app  
**📁 GitHub:** https://github.com/jkwilliams3-dev/streamline-ai

> A production-quality analytics dashboard with an integrated AI chat assistant. Built as a portfolio showcase for enterprise-level React + TypeScript development.

---

## Features

- **📊 Real-time Analytics Dashboard** — KPI cards, revenue charts, traffic breakdown, device metrics, and live transaction table
- **🤖 AI Chat Panel** — Slide-in assistant with simulated streaming responses, conversation starters, and context-aware data analysis
- **📈 Reports Page** — Date-filtered summaries with CSV export capability
- **⚙️ Settings Page** — Profile management, notification preferences, theme toggle, API configuration
- **♿ 508 / WCAG Compliant** — Full ARIA support, keyboard navigation, 4.5:1+ contrast ratios
- **📱 Fully Responsive** — Collapsible sidebar, mobile-first grid layouts

---

## Tech Stack

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?logo=tailwindcss&logoColor=white)
![Recharts](https://img.shields.io/badge/Recharts-2-22d3ee)
![Zustand](https://img.shields.io/badge/Zustand-5-brown)

---

## Getting Started

```bash
git clone https://github.com/jkwilliams3-dev/streamline-ai.git
cd streamline-ai
npm install
npm run dev
```

Open http://localhost:5173

---

## Architecture

```
src/
├── components/
│   ├── ai/           # ChatPanel, ChatMessage, ChatInput
│   ├── dashboard/    # KPICard, RevenueChart, TrafficChart, DeviceChart, TransactionsTable
│   └── layout/       # Layout, Sidebar, TopBar
├── data/
│   ├── mockData.ts   # Realistic sample data
│   └── aiResponses.ts # AI response patterns
├── pages/            # Analytics, Reports, Settings
└── store/            # Zustand global state
```

---

## Built by

**Jonathan Williams** — Senior Full-Stack Developer  
[LinkedIn](https://linkedin.com/in/jkwilliams3) · [GitHub](https://github.com/jkwilliams3-dev)
