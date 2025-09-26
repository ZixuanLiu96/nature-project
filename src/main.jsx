import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UserProviderWrapper } from './context/user.context.jsx'
import { SpotsProvider } from "./context/spots.context";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UserProviderWrapper>
        <SpotsProvider>
        <App />
         </SpotsProvider> 
      </UserProviderWrapper>
    </BrowserRouter>
  </StrictMode>
)
