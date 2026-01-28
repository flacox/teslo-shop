import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { TelosShopApp } from './TelosShopApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <TelosShopApp />
  </StrictMode>,
)
