import { useLocation } from 'react-router-dom';
import { useAppStore } from '../../store/useAppStore';

const pageTitles: Record<string, string> = {
  '/analytics': 'Analytics',
  '/reports': 'Reports',
  '/settings': 'Settings',
};

export default function TopBar() {
  const { toggleSidebar, toggleChat, isChatOpen } = useAppStore();
  const location = useLocation();
  const title = pageTitles[location.pathname] ?? 'Dashboard';

  return (
    <header
      className="border-b border-slate-800 flex items-center justify-between px-6"
      style={{
        height: '64px',
        backgroundColor: 'rgba(15, 23, 42, 0.95)',
        backdropFilter: 'blur(8px)',
        position: 'sticky',
        top: 0,
        zIndex: 40,
        flexShrink: 0,
      }}
    >
      {/* Left side */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="text-slate-400 hover:text-slate-200 p-2 rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Toggle sidebar"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <span>StreamlineAI</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
          <span className="text-slate-200 font-medium">{title}</span>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-2">
        {/* AI Chat toggle */}
        <button
          onClick={toggleChat}
          className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200"
          style={{
            background: isChatOpen
              ? 'rgba(99, 102, 241, 0.2)'
              : 'transparent',
            color: isChatOpen ? '#818cf8' : '#94a3b8',
            border: isChatOpen ? '1px solid rgba(99,102,241,0.4)' : '1px solid transparent',
          }}
          aria-label="Toggle AI assistant"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          <span className="hidden sm:inline">AI Assistant</span>
        </button>

        {/* Notification bell */}
        <button
          className="relative p-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors"
          aria-label="Notifications"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          <span
            className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full"
            style={{ backgroundColor: '#ef4444' }}
          />
        </button>

        {/* User avatar */}
        <button
          className="flex items-center gap-2 p-1 rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="User menu"
        >
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
            style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
          >
            JD
          </div>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </div>
    </header>
  );
}
