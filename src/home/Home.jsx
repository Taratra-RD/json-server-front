import React, { useEffect, useState } from "react";
import Element from "./Element";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { IoSettingsSharp } from "react-icons/io5";

export default function Home() {
  const [elements] = useState(["autre"]);
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
        <IoSettingsSharp
          className="setting"
          onClick={() => navigate("/setting")}
        />
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
