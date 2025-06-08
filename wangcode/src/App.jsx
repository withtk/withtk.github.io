import { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Home = lazy(() => import('./page/Home.jsx'))
const GameHome = lazy(() => import('./page/GameHome.jsx'))
const Dash = lazy(() => import('./page/Dash.jsx'))
const How = lazy(() => import('./page/How.jsx'))

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="game" element={<GameHome />} />
        <Route path="dash" element={<Dash />} />
        <Route path="how" element={<How />} />
      </Routes>
    </BrowserRouter>
  )
}