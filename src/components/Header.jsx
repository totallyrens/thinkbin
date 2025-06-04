import { CgDarkMode } from 'react-icons/cg';

const Header = () => {
  return (
    <header>
      <div className="container">
        <img src="/logo.png" alt="logo Image" />
        <h1 className="logo">Thinkbin</h1>
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
          <CgDarkMode className="theme-toggle" />
        </div>
      </div>
    </header>
  );
};

export default Header;
