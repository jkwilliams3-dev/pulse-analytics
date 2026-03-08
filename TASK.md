# StreamlineAI — AI-Powered Analytics Dashboard

Build a **production-quality** React + TypeScript analytics dashboard with an integrated AI chat assistant. This is a portfolio showcase project for a senior full-stack developer targeting $100-150/hr freelance clients.

## Tech Stack
- React 18+ with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Recharts for data visualization (install: `npm install recharts`)
- Zustand for state management (install: `npm install zustand`)
- React Router v6 (install: `npm install react-router-dom`)

## What to Build

### 1. Dashboard Layout
- Dark professional theme (dark gray/slate backgrounds, not pitch black)
- Responsive sidebar navigation with icons
- Top bar with user avatar, notifications bell, and settings gear
- Main content area with grid layout

### 2. Analytics Page (Default)
- **4 KPI cards** at top: Revenue ($142.8K, +12.4%), Active Users (8,294, +5.2%), Conversion Rate (3.8%, -0.3%), Avg Order ($67.50, +8.1%)
- **Line chart**: Revenue over 12 months (use mock data, make it realistic)
- **Bar chart**: Traffic by source (Direct, Organic, Social, Referral, Email)
- **Donut chart**: Device breakdown (Desktop 58%, Mobile 32%, Tablet 10%)
- **Table**: Recent transactions (date, customer, amount, status with colored badges)

### 3. AI Chat Panel (Right Sidebar)
- Toggleable slide-in panel from right side
- Chat interface with message bubbles
- Input field with send button
- **Simulated streaming responses** — type out AI responses character by character with a slight delay (50ms per word)
- Pre-loaded conversation starters: "Analyze revenue trends", "Compare traffic sources", "Predict next month"
- When user types a question about the data, generate a smart-looking response that references the dashboard metrics
- Use a simple pattern-matching system for responses (no real API needed — this is a demo)
- Show "AI is thinking..." loading animation before responses

### 4. Reports Page
- Date range picker at top
- Summary cards
- Exportable table (just show a "Download CSV" button that generates a basic CSV)

### 5. Settings Page
- Profile section with editable fields
- Notification preferences (toggles)
- Theme toggle (dark/light mode)
- API configuration section (showing webhook URLs, API keys placeholder)

## Design Requirements
- **Professional and polished** — this needs to look like a real SaaS product, not a tutorial
- Smooth transitions and animations (Tailwind + CSS transitions)
- Loading states with skeleton screens
- Empty states with helpful messages
- 508 accessibility compliance (ARIA labels, keyboard navigation, proper contrast ratios 4.5:1+)
- Mobile responsive (sidebar collapses to hamburger menu)

## File Structure
```
src/
  components/
    layout/
      Sidebar.tsx
      TopBar.tsx
      Layout.tsx
    dashboard/
      KPICard.tsx
      RevenueChart.tsx
      TrafficChart.tsx
      DeviceChart.tsx
      TransactionsTable.tsx
    ai/
      ChatPanel.tsx
      ChatMessage.tsx
      ChatInput.tsx
    reports/
      ReportsPage.tsx
    settings/
      SettingsPage.tsx
  data/
    mockData.ts (all mock data here)
    aiResponses.ts (AI response patterns)
  store/
    useAppStore.ts
  App.tsx
  main.tsx
  index.css
```

## After Building
1. Run `npm install` (initialize with `npm create vite@latest . -- --template react-ts` first if needed)
2. Install deps: `npm install recharts zustand react-router-dom`
3. `npm run build` — fix any build errors
4. Make sure `npm run dev` works cleanly
5. Create a README.md with:
   - Project title + description
   - Screenshot placeholder
   - Tech stack badges
   - Features list
   - Getting started instructions
   - "Built by Jonathan Williams" footer with LinkedIn link
6. `git add -A && git commit -m "feat: StreamlineAI analytics dashboard with AI chat"`

## IMPORTANT
- Make the mock data REALISTIC — use believable company names, dollar amounts, dates
- The AI chat responses should sound intelligent and reference actual dashboard data
- No placeholder "Lorem ipsum" anywhere — everything should look real
- This project needs to make an enterprise CTO say "I want this person on my team"
