import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'

import App from './App'

import {
  LanguageProvider
} from './context/LanguageContext'

import './styles/main.scss'

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(

  <React.StrictMode>

    <LanguageProvider>

      <BrowserRouter>
        <App />
      </BrowserRouter>

    </LanguageProvider>

  </React.StrictMode>

)