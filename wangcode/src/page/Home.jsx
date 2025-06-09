import React from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../styles/Home.css'
import { useTheme } from '../context/ThemeContext'

export default function Home() {
  const navigate = useNavigate()
  const [count, setCount] = useState(0)
  const { t, i18n } = useTranslation()
  const { isDarkMode, toggleTheme } = useTheme()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  // 현재 설정된 언어 코드 반환
  const getCurrentLanguage = () => {
    return i18n.language
  }

  // 현재 언어가 지정된 언어와 일치하는지 확인
  const isCurrentLanguage = (lng) => {
    return getCurrentLanguage().startsWith(lng)
  }

  return (
    <div className="design-root">
      <div className="layout-container">
        <header className="header">
          <h1 className="header-title">King Game</h1>
          <nav className="nav-links">
            <a href="/" className="nav-link active">Home</a>
            <a href="/how" className="nav-link">How to Play</a>
            <a href="/dash" className="nav-link">Dashboard</a>
          </nav>
        </header>
        <main className="content-container">
          <h2 className="page-title">Welcome to King Game</h2>
          <p className="page-description">
            Experience the ultimate strategy game where you can become the King! Challenge your friends and compete for the throne.
          </p>
          <div className="button-group">
            <button className="primary-button">
              <span>Play Now</span>
            </button>
            <button className="secondary-button">
              <span>Learn More</span>
            </button>
          </div>
        </main>
      </div>
    </div>
  )
}
