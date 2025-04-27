import React from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import "./index.css";

//HeaderLinks
const navLinks = [
  { name: "HOME", path: "/" },
  { name: "HEADPHONES", path: "/" },
  { name: "SPEAKERS", path: "/" },
  { name: "EARPHONES", path: "/" },
];

export default function App() {
  return (
    <>
      <Header links={navLinks} />
      <Main />
      <Footer links={navLinks} />
    </>
  );
}
