import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'
import Learn from './Learn'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Learn />
  </StrictMode>,
)