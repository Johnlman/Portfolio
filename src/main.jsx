import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Bootstrap theme early: default to dark if no stored preference
try {
  const stored = localStorage.getItem('theme');
  const isDark = stored ? stored === 'dark' : true;
  document.documentElement.classList.toggle('dark', isDark);
  document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
  if (!stored) localStorage.setItem('theme', 'dark');
} catch {
  document.documentElement.classList.add('dark');
  document.documentElement.style.colorScheme = 'dark';
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
