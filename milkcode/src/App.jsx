import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ModalProvider } from "./page/ModalContext.jsx";
import './App.css'

const Home = lazy(() => import('./page/Home.jsx'));
const Othello = lazy(() => import('./page/Othello.jsx'));
const Reversi = lazy(() => import('./page/Reversi.jsx'));

export default function App() {
    return (
        <ModalProvider>
            <BrowserRouter basename={import.meta.env.VITE_BASE_URL}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="othello" element={<Othello/>}/>
                    <Route path="reversi" element={<Reversi/>}/>
                </Routes>
            </BrowserRouter>
        </ModalProvider>
    );
}
