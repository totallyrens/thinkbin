import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { useState } from 'react';

function App() {
  // Default: Lightmode
  const [isLightMode, setIsLightMode] = useState(true);

  const toggleTheme = () => {
    setIsLightMode((prev) => !prev);
  };

  return (
    <div className={isLightMode ? 'light' : 'dark'}>
      <Header toggleTheme={toggleTheme} />
      <Main />
    </div>
  );
}

export default App;
