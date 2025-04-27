import React from "react";
import "./Button.css";

export default function Button({ href, variant, text }) {
  return <button href={href} className="button">{text}</button>;
}