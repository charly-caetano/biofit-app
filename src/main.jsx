import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Smartphone from './Smartphone'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Smartphone />
  </StrictMode>,
)
