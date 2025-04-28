import Button from "../button/Button";
import styles from "./Product.module.css";

export default function Product({ title, description, isNew, img, reverse, tabletImg, mobileImg }) {
  return (
    <div
      className={styles.productWrapper}
      style={{ flexDirection: reverse ? "row-reverse" : "row" }}>
      <picture>
        <source srcSet={tabletImg} media="(max-width: 790px)" />
        <img src={img} alt={title} className={styles.productImage}/>
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
