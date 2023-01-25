import React from "react";

export default function Verses({ words }) {
  return <div>{words[Math.floor(Math.random() * words.length) + 1]}</div>;
}
