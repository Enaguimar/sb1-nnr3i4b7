import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

interface AppProviderProps {
  children: ReactNode;
}

export default function AppProvider({ children }: AppProviderProps) {
  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  );
}