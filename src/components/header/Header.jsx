import "./Header.css";

export default function Header({ links }) {
  return (
    <header className="header">
      <div className="container">
        <img src="../public/HeadPhones/desktop/audiophile.svg" alt="logo" />
        <nav>
          <ul className="links">
            {links.map((link) => (
              <li key={link.name}>
                <a href={link.path}>{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>
        <img src="../public/HeadPhones/desktop/icon-shop.svg" alt="shopping" />
      </div>
      <div className="CategoryTitle">
        <p>HEADPHONES</p>
      </div>
    </header>
  );
}
