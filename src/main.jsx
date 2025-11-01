import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='flex justify-center items-center flex-col text-white bg-neutralNavy-950 font-Rubik 
    md:h-dvh'>
      <App />
    </div>
  </StrictMode>,
)
