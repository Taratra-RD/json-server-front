import React, { useState } from "react";
import "./FormEmplacement.css";
import axios from "axios";
import api from "../../../api/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function FormEmplacement() {
  const [addEmplacement, setaddEmplacement] = useState();

  const handleAddEmplacement = (e) => {
    e.preventDefault();
    let frm = document.getElementsByName("emplacement")[0];
    axios
      .post(api + "/emplacement", addEmplacement)
      .then((res) => {
        toast(res.data.message);
        frm.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="form--emplacement">
      <ToastContainer />
      <div className="form--title">Nouveau emplacement</div>
      <form
        className="form--body"
        onSubmit={(e) => handleAddEmplacement(e)}
        name="emplacement"
      >
        <div className="form--field">
          <label className="form--label"></label>
          <input
            type="text"
            className="form--input"
            onChange={(e) =>
              setaddEmplacement((prev) => ({
                ...prev,
                services: e.target.value,
              }))
            }
            placeholder="Services"
          />
        </div>
        <div className="form--field">
          <label className="form--label"></label>
          <input
            type="text"
            className="form--input"
            onChange={(e) =>
              setaddEmplacement((prev) => ({
                ...prev,
                societe: e.target.value,
              }))
            }
            placeholder="Societe"
          />
        </div>
        <div className="form--field">
          <input
            type="submit"
            className="form--input"
            value={"Ajouter un emplacement"}
          />
        </div>
      </form>
    </div>
  );
}
