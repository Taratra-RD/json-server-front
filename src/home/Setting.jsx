import React, { useEffect, useState } from "react";
import { IoHome } from "react-icons/io5";
import Element from "./Element";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Setting() {
  const [elements] = useState([
    "categorie",
    "service",
    "societe",
    "proprietaire",
  ]);
  const navigate = useNavigate();
  const signOut = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("access_token");
    window.location.reload();
  };

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    !token && navigate("/auth/login");
  }, [navigate]);

  return (
    <div
      className="home"
      style={{
        position: "relative",
      }}
    >
      <div className="head">
        <div className="logout" onClick={signOut}>
          Logout
        </div>
        <IoHome className="home--nav" onClick={() => navigate("/")} />
      </div>
      <div className="body">
        <h1 style={{ color: "aqua" }}>GESTION DES MOT DE PASSE</h1>
        {elements.map((element, index) => (
          <Element element={element} key={index} />
        ))}
      </div>
    </div>
  );
}
