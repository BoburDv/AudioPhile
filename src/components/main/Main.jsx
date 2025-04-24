import Product from "../product/Product";
import "./Main.css";

export default function Main() {
  const { title, description, isNew, img } = {
    title: "XX99 Mark II Headphones",
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    isNew: true,
    img: "https://picsum.photos/id/237/200/300",
  };

  return (
    <main className="main">
      <Product
        title={title}
        description={description}
        isNew={isNew}
        img={img}
      />
    </main>
  );
}
