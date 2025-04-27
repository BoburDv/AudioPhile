import Button from "../button/Button";
import styles from "./Product.module.css";

export default function Product({ title, description, isNew, img, reverse }) {
  return (
    <div className={styles.productWrapper} style={{ flexDirection: reverse ? "row-reverse" : "row" }}>
      
      <picture>
        <img src={img} alt={title} width={540} height={560} />
      </picture>

      {/* ProductMain */}
      <div className={styles.productContent}>
        {isNew && <span className={styles.productLabel}>NEW PRODUCT</span>}
        <h3 className={styles.productTitle}>{title}</h3>
        <p className={styles.productDescription}>{description}</p>
        <Button text="See Product" />
      </div>

    </div>
  );
}
