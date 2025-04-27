import React from "react";
import styles from "./Button.module.css";

export default function Button({ href, text }) {
  return <button className={styles.button}>{text}</button>
}