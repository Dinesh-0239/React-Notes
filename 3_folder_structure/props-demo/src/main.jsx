import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const name = "Dinesh";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App name={name}/>
  </StrictMode>,
)
