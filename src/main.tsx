import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import "./index.css";          // Tailwind
import "./styles/global.css";  // Your custom CSS

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
