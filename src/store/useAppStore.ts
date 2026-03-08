import { create } from 'zustand';

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  isStreaming?: boolean;
}

interface AppState {
  isChatOpen: boolean;
  isDarkMode: boolean;
  messages: Message[];
  isAIThinking: boolean;
  sidebarCollapsed: boolean;
  toggleChat: () => void;
  toggleDarkMode: () => void;
  toggleSidebar: () => void;
  addMessage: (message: Message) => void;
  updateLastMessage: (content: string) => void;
  setAIThinking: (thinking: boolean) => void;
  clearMessages: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  isChatOpen: false,
  isDarkMode: true,
  messages: [],
  isAIThinking: false,
  sidebarCollapsed: false,

  toggleChat: () => set((state) => ({ isChatOpen: !state.isChatOpen })),
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
  toggleSidebar: () =>
    set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),

  addMessage: (message: Message) =>
    set((state) => ({ messages: [...state.messages, message] })),

  updateLastMessage: (content: string) =>
    set((state) => {
      const messages = [...state.messages];
      if (messages.length === 0) return { messages };
      const last = { ...messages[messages.length - 1] };
      last.content = content;
      messages[messages.length - 1] = last;
      return { messages };
    }),

  setAIThinking: (thinking: boolean) => set({ isAIThinking: thinking }),

  clearMessages: () => set({ messages: [] }),
}));
