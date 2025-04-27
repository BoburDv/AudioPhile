import Button from "../button/Button";
import "./Product.css";

export default function Product({ title, description, isNew, img }) {
  return (
    <div className="product">
      <picture>
        {/* <source media="(max-width: 375px)" srcSet={mobile}/>
        <source media="(max-width: 768px" srcSet={tablet}/> */}
        <img src={img} alt={title} width={540} height={560} />
      </picture>
      <div>
        {isNew && <span className="isnew">NEW PRODUCT</span>}
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
        <Button text="See Product"/>
      </div>
    </div>
  );
}
