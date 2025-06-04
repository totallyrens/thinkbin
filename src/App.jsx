import './App.css';
import Header from './components/Header';
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
      <div className="container">
        <h2>Main Content</h2>
      </div>
    </div>
  );
}

export default App;
