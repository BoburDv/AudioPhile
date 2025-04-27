import Product from "../product/Product";
import "./Main.css";

export default function Main() {
  const products = [
    {
      title: "XX99 Mark II Headphones",
      description:
        "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
      isNew: true,
      img: "/HeadPhones/desktop/group-1.png",
    },
    {
      title: "ZX7 Speaker",
      description:
        "The ZX7 speaker offers a clean, high-quality audio experience.",
      isNew: false,
      img: "/HeadPhones/desktop/group-2.png",
    },
    {
      title: "YX1 Earphones",
      description:
        "The YX1 earphones offer great sound quality and portability.",
      isNew: true,
      img: "/HeadPhones/desktop/group-3.png",
    },
  ];

  return (
    <main className="main">
      {products.map((product, index) => (
        <Product
          key={index}
          title={product.title}
          description={product.description}
          isNew={product.isNew}
          img={product.img}
        />
      ))}
    </main>
  );
}
