import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../../api/api";
import "../Auth.css";

export default function Login() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [userIn, setUserIn] = useState({
    usernameIn: "",
    passwordIn: "",
  });

  const signinUser = () => {
    axios
      .post(api + "/auth/signin", {
        username: userIn.usernameIn,
        password: userIn.passwordIn,
      })
      .then((res) => {
        setError("");
        if (res.data.Login) {
          sessionStorage.setItem("token", res.data.token);
          sessionStorage.setItem("access_token", res.data.accessToken);
          navigate("/");
        } else {
          navigate("/auth/login");
        }
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  };

  const handleChangeIn = (e) => {
    setUserIn({
      ...userIn,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (token) {
      navigate("/");
    } else {
      navigate("/auth/login");
    }
  }, [navigate]);

  return (
    <div>
      {
        <div className="k-container-home--auth">
          <div className="k-container-auth--auth">
            <div className="red-line"></div>
            <div className="k-container-intern">
              <div className="k-logo"></div>
              <h1
                style={{
                  marginTop: "1.5rem",
                  fontFamily: "arial",
                  color: "rgb(10, 10, 10)",
                }}
              >
                Connectez-vous
              </h1>
              <input
                className="k-input-auth"
                type="text"
                name="usernameIn"
                placeholder="Nom d'utilisateur"
                onChange={handleChangeIn}
                value={userIn.usernameIn}
              />
              <input
                className="k-input-auth"
                type="password"
                name="passwordIn"
                placeholder="Mot de passe"
                onChange={handleChangeIn}
                value={userIn.passwordIn}
              />
              <button className="k-btn-auth" onClick={signinUser}>
                Se connecter
              </button>
              {error && <div style={{ color: "red" }}>{error}</div>}
              {
                <p>
                  Vous n'avez pas de compte?{" "}
                  <Link to="/auth/register">s'inscrire</Link>
                </p>
              }
            </div>
          </div>
        </div>
      }
    </div>
  );
}
