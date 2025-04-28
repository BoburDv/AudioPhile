import Product from "../product/Product";
import OtherPageReference from "../other-page-reference/OtherPageReference";
import BestAudioGear from "../best-audio-gear/BestAudioGear";
import styles from "./Main.module.css";

export default function Main() {
  //Products
  const products = [
    {
      title: "XX99 Mark II Headphones",
      description:
        "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
      isNew: true,
      img: "/HeadPhones/desktop/group-1.png",
      tabletImg: "/HeadPhones/tablet/product-t-1.png",
      // mobileImg: "/HeadPhones/mobile/product-m-2.png"
    },
    {
      title: "XX99 Mark I Headphones",
      description:
        "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
      isNew: false,
      img: "/HeadPhones/desktop/group-2.png",
      tabletImg: "/HeadPhones/tablet/product-t-2.png",
      // mobileImg: "/HeadPhones/mobile/product-m-2.png"
    },
    {
      title: "XX59 Headphones",
      description:
        "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
      isNew: false,
      img: "/HeadPhones/desktop/group-3.png",
      tabletImg: "/HeadPhones/tablet/product-t-3.png",
      // mobileImg: "/HeadPhones/mobile/product-m-2.png"
    },
  ];

  //CategoryCards
  const categories = [
    { img: "/HeadPhones/desktop/card-1.png", title: "Headphones" },
    { img: "/HeadPhones/desktop/card-3.png", title: "Speakers" },
    { img: "/HeadPhones/desktop/card-2.png", title: "Earphones" },
  ];

  return (
    <main className={styles.main}>
      {products.map((product, index) => (
        <Product
          key={index}
          title={product.title}
          description={product.description}
          isNew={product.isNew}
          img={product.img}
          reverse={index == 1}
          tabletImg={product.tabletImg}
          mobileImg={product.mobileImg}
        />
      ))}

      <OtherPageReference categories={categories} />

      <BestAudioGear />
    </main>
  );
}
