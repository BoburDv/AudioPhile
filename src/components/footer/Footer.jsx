import styles from "./Footer.module.css";
import headerStyles from "../header/Header.module.css";

export default function Footer({ links }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>

        <div className={styles.footerNav}>
          <img src="../public/HeadPhones/desktop/audiophile.svg" alt="logo" />
          <nav>
            <ul className={headerStyles.links}>
              {links.map((link) => (
                <li key={link.name}>
                  <a href={link.path}>{link.name}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={styles.footerMain}>
          <div>
            <p>
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
            <span>Copyright 2021. All Rights Reserved</span>
          </div>

          <div className={styles.social}>
            <img
              src="../public/HeadPhones/desktop/facebook.svg"
              alt="facebook"
            />
            <img src="../public/HeadPhones/desktop/twitter.svg" alt="twitter" />
            <img
              src="../public/HeadPhones/desktop/instagram.svg"
              alt="instagram"
            />
          </div>
        </div>
        
      </div>
    </footer>
  );
}
