import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ModalProvider } from "./page/ModalContext.jsx";
import Home from './page/Home.jsx';
import Othelo from "./page/Othelo.jsx";

export default function App() {
    return (
        <ModalProvider>
            <BrowserRouter basename={import.meta.env.VITE_BASE_URL}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="othelo" element={<Othelo/>}/>
                </Routes>
            </BrowserRouter>
        </ModalProvider>
    );
}
