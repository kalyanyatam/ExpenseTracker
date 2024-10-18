import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GlobalStyle } from './styles/GlobalStyles.jsx'
import { GlobalProvider } from './context/globalContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <GlobalProvider>
    <App />
    </GlobalProvider>
  </StrictMode>,
)
