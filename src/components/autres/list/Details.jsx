import React from "react";

export default function Details({ autre, setShowAutre }) {
  return (
    <div
      className="details"
      style={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        backgroundColor: "rgba(31, 29, 29, 0.897)",
        top: "0",
        left: "0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      onClick={() => setShowAutre({ id: 0, choice: false })}
    >
      <h2>Details: &nbsp;{autre.nom}</h2>
      <ul>
        <li>
          <span>Categorie: &nbsp;</span>
          {autre.Categorie}
        </li>
        <li>
          <span>Proprietaire: &nbsp;</span>
          {autre.Proprietaire}
        </li>
        <li>
          <span>Societe: &nbsp;</span>
          {autre.Societe}
        </li>
        <li>
          <span>Service: &nbsp;</span>
          {autre.Service}
        </li>
      </ul>
    </div>
  );
}
