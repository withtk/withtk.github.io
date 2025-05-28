import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from './../../public/vite.svg';
import Test1 from './../page/Test1.jsx';
import Othelo from './Othelo.jsx';

export default function Main() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href='https://vite.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React + github</h1>
      <Test1 />
      <div>
        <Othelo />
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
