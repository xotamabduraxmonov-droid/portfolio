import { NavLink } from 'react-router-dom'

import {
  useLanguage
} from '../../context/LanguageContext'

import './navbar.scss'

interface NavbarProps {
  theme: string
  toggleTheme: () => void
}

const Navbar = ({
  theme,
  toggleTheme
}: NavbarProps) => {

  const {
    lang,
    toggleLanguage
  } = useLanguage()

  return (

    <header className="navbar">

      <div className="logo">
        Portfolio
      </div>

      <nav className="nav-links">

        <NavLink to="/">
          {lang === 'RU'
            ? 'Главная'
            : 'Home'}
        </NavLink>

        <NavLink to="/about">
          {lang === 'RU'
            ? 'Обо мне'
            : 'About'}
        </NavLink>

        <NavLink to="/projects">
          {lang === 'RU'
            ? 'Проекты'
            : 'Projects'}
        </NavLink>

        <NavLink to="/contacts">
          {lang === 'RU'
            ? 'Контакты'
            : 'Contacts'}
        </NavLink>

      </nav>

      <div className="nav-actions">

        <button
          className="lang-btn"
          onClick={toggleLanguage}
        >
          {lang}
        </button>

        <button
          className="theme-btn"
          onClick={toggleTheme}
        >
          {theme === 'dark'
            ? '☀ '
            : '🌙'}
        </button>

      </div>

    </header>

  )
}

export default Navbar