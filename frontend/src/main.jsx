import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactQueryClientProvider from './common/providers/ReactQueryClientProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReactQueryClientProvider>
    <App />
    </ReactQueryClientProvider>
  </StrictMode>,
)
