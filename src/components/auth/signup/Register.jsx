import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../../api/api";
import { ToastContainer, toast } from "react-toastify";

export default function Register() {
  const navigate = useNavigate();
  const [userIn, setUserIn] = useState({
    usernameIn: "",
    passwordIn: "",
  });

  const signupUser = () => {
    axios
      .post(api + "/auth/signup", {
        username: userIn.usernameIn,
        password: userIn.passwordIn,
      })
      .then((res) => {
        toast(res.data.message);
        navigate("/auth/login");
      })
      .catch((err) => {
        toast(err.response.data.message);
      });
  };

  const handleChangeIn = (e) => {
    setUserIn({
      ...userIn,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {
        <div className="k-container-home--auth">
          <ToastContainer />
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
                Inscrivez-vous
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
              <button className="k-btn-auth" onClick={signupUser}>
                Se connecter
              </button>
              <p>
                Vous n'avez pas de compte?{" "}
                <Link to="/auth/login">se connecter</Link>
              </p>
            </div>
          </div>
        </div>
      }
    </div>
  );
}
