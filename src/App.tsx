import { useEffect, useState } from 'react'

import {
  Routes,
  Route
} from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'

import Home from './pages/Home/Home'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'
import Contacts from './pages/Contacts/Contacts'

import './styles/main.scss'

function App() {

  const [theme, setTheme] =
    useState('dark')

  const toggleTheme = () => {

    setTheme(prev =>
      prev === 'dark'
        ? 'light'
        : 'dark'
    )

  }

  useEffect(() => {

    document.documentElement.setAttribute(
      'data-theme',
      theme
    )

  }, [theme])

  return (

    <div className="app-container">

      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <main className="main-content">

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/projects"
            element={<Projects />}
          />

          <Route
            path="/contacts"
            element={<Contacts />}
          />

        </Routes>

      </main>

    </div>

  )
}

export default App