import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import reactLogo from '../assets/react.svg';
import viteLogo from './../../public/vite.svg';

export default function Home() {
    const [count, setCount] = useState(0);
    const navigate = useNavigate();

    return (
        <>
            <div>
                <a href='https://vite.dev' target='_blank'>
                    <img src={viteLogo} className='logo' alt='Vite logo'/>
                </a>
                <a href='https://react.dev' target='_blank'>
                    <img src={reactLogo} className='logo react' alt='React logo'/>
                </a>
            </div>
            <h1>MILK {import.meta.env.VITE_APP_TITLE} {import.meta.env.VITE_BASE_URL}</h1>
            <div className="game-section">
                <div className="game-card">
                    <h2>리버시 게임</h2>
                    <button className="game-button" onClick={() => navigate('/reversi')}>게임 시작하기
                    </button>
                </div>
            </div>
            <div className="game-section">
                <div className="game-card">
                    <h2>오셀로 게임</h2>
                    <p>전략적인 보드 게임 오셀로를 즐겨보세요!</p>
                    <button className="game-button" onClick={() => navigate('/othello')}>게임 시작하기
                    </button>
                </div>
            </div>
            <div className='card'>
                <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR11
                </p>
            </div>
            <p className='read-the-docs'>Click on the Vite and React logos to learn more123</p>
        </>
    );
}
