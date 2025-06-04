const Header = () => {
  return (
    <header>
      <div className="container">
        <img src="/logo.png" alt="logo Image" />
        <h1 className="logo">Thinkbin</h1>
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
      </div>
    </header>
  );
};

export default Header;
