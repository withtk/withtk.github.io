import './App.css'
import { ModalProvider } from './page/ModalContext';
import Main from './page/Main.jsx';

function App() {
  return (
    <ModalProvider>
      <Main />
    </ModalProvider>
  );
}

export default App;