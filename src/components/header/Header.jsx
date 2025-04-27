import styles from "./Header.module.css";

export default function Header({ links }) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo/List */}
        <div className={styles.ListLogo}>
          <img src="/HeadPhones/desktop/list.svg" className={styles.list} />
          <img src="/HeadPhones/desktop/audiophile.svg" alt="logo" />
        </div>

        {/* Links */}
        <nav>
          <ul className={styles.links}>
            {links.map((link) => (
              <li key={link.name}>
                <a href={link.path}>{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>

        <img src="/HeadPhones/desktop/icon-shop.svg" alt="shopping" />
      </div>

      <div className={styles.headerTitle}>
        <p>HEADPHONES</p>
      </div>
    </header>
  );
}
