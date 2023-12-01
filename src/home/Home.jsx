import React, { useState } from "react";
import Element from "./Element";
import "./Home.css";

export default function Home() {
  const [elements] = useState([
    "categorie",
    "proprietaire",
    "emplacement",
    "ordinateur",
    "wifi",
    "email",
    "autres",
    "employe",
    "serveur",
    "admin",
  ]);

  return (
    <div className="home">
      {elements.map((element, index) => (
        <Element element={element} key={index} />
      ))}
    </div>
  );
}
