import { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Home = lazy(() => import('./page/Home.jsx'))
const GameHome = lazy(() => import('./page/GameHome.jsx'))

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="game" element={<GameHome />} />
      </Routes>
    </BrowserRouter>
  )
}