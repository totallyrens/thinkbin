import './App.css';
import Header from './components/Header';
import Main from './components/mainSection'
import { useState } from 'react';

function App() {

  //currently setting the variable to false, as it is not in Light Mode
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleTheme = () => {
    setIsLightMode(prev => !prev);
  }


  return (
    <div className={isLightMode ? 'light' : 'dark'}>
      <Header toggleTheme={toggleTheme} />
      <Main />
    </div>
  );
}

export default App;
