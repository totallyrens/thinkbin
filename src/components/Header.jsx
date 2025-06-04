import { CgDarkMode } from 'react-icons/cg';

const Header = ({ toggleTheme }) => {
  return (
    <header>
      <div className="container navbar">
        <a href="#">
          <div className="logo-wrapper">
            <img src="/logo.png" alt="logo Image" />
            <span className="logo">Thinkbin</span>
          </div>
        </a>
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
        </div>
      </div>
    </header>
  );
};

export default Header;
