import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [darkMode, setDarkMode] = useState(() => {
    // 로컬 스토리지에서 테마 설정 가져오기
    const savedTheme = localStorage.getItem('theme')
    return savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  const { t, i18n } = useTranslation()

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
  
  // 다크 모드 전환 함수
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light')
  }
  
  // 다크 모드 상태가 변경될 때마다 HTML 클래스 업데이트
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="language-selector">
        <p>{t('language')}:</p>
        <button 
          onClick={() => changeLanguage('ko')} 
          className={isCurrentLanguage('ko') ? 'active' : ''}
        >
          한국어
        </button>
        <button 
          onClick={() => changeLanguage('en')}
          className={isCurrentLanguage('en') ? 'active' : ''}
        >
          English
        </button>
        <div className="current-language">
          {t('currentLanguage')}: {getCurrentLanguage()}
        </div>
              </div>
              
              <div className="theme-toggle">
        <button 
          onClick={toggleDarkMode}
          className="theme-button"
        >
          {darkMode ? t('lightMode') : t('darkMode')}
          <span className="theme-icon">{darkMode ? '☀️' : '🌙'}</span>
        </button>
              </div>
              
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          {t('counter', { count })}
        </button>
        <p>
          {t('editText')}
        </p>
      </div>
      <p className="read-the-docs">
        {t('readDocs')}
      </p>
    </>
  )
}

export default App
