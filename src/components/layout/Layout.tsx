import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import ChatPanel from '../ai/ChatPanel';

export default function Layout() {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', backgroundColor: '#0f1117' }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main column */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', minWidth: 0 }}>
        <TopBar />
        <main
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '24px',
            backgroundColor: '#0f1117',
          }}
        >
          <Outlet />
        </main>
      </div>

      {/* Chat panel (always in DOM, toggled by store) */}
      <ChatPanel />
    </div>
  );
}
