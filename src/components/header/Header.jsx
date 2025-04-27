import styles from "./Header.module.css";

export default function Header({ links }) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img src="../public/HeadPhones/desktop/audiophile.svg" alt="logo" />

        <nav>
          <ul className={styles.links}>
            {links.map((link) => (
              <li key={link.name}>
                <a href={link.path}>{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>

        <img src="../public/HeadPhones/desktop/icon-shop.svg" alt="shopping" />
      </div>
      <div className={styles.headerTitle}>
        <p>HEADPHONES</p>
      </div>
    </header>
  );
}
