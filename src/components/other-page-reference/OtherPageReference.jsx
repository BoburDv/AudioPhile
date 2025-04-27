import styles from "./OtherPageReference.module.css";

export default function OtherPageReference({ categories }) {
  return (
    <section className={styles.categories}>
      {/* wraperCards */}

      <div className={styles.categoryWrapper}>
            {categories.map((item, i) => (
            <div key={i} className={styles.card}>

            {/* title/img */}
            <img src={item.img} alt={item.title} className={styles.cardImage} />
            <p className={styles.cardTitle}>{item.title}</p>

            {/* Shop */}
            <div>
              <a href="/" className={styles.cardShop}>Shop</a>
              <img src="/HeadPhones/desktop/arrow.svg" alt="arrow" />
            </div>

            </div>
            ))}
      </div>

    </section>
  );
}
