// React imports
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// FS imports
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
