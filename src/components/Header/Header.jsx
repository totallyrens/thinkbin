import './Header.css';
import { CgDarkMode } from 'react-icons/cg';
import Button from '../Button/Button';
import { useNavigate, Link } from 'react-router-dom';

const Header = ({ toggleTheme }) => {

  const navigate = useNavigate();
  
  const navigateLogin = () =>{
    navigate("/login")
  }

  return (
    <header>
      <div className="container navbar">
        <Link to="/">
          <div className="logo-wrapper">
            <img src="/logo.png" alt="logo Image" />
            <span className="logo">Thinkbin</span>
          </div>
        </Link>
        <div className="nav-right">
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Notes</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <CgDarkMode className="theme-toggle" onClick={toggleTheme} />
          <Button label="Login" onClick={navigateLogin}/>
        </div>
      </div>
    </header>
  );
};

export default Header;
