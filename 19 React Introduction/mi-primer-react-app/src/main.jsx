import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Boton from './Boton.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App nombre="Daniel" />
    <Boton texto="Boton desde el main.jsx"/>
  </StrictMode>,
)
