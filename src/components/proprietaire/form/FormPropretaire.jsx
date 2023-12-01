import React, { useState } from "react";
import axios from "axios";
import api from "../../../api/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./FormProprietaire.css";

export default function FormPropretaire() {
  const [addPropretaire, setaddPropretaire] = useState();

  const handleAddPropretaire = (e) => {
    e.preventDefault();
    let frm = document.getElementsByName("propretaire")[0];
    axios
      .post(api + "/proprietaire", addPropretaire)
      .then((res) => {
        toast(res.data.message);
        frm.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="form--propretaire">
      <ToastContainer />
      <div className="form--title">Nouveau propretaire</div>
      <form
        className="form--body"
        onSubmit={(e) => handleAddPropretaire(e)}
        name="propretaire"
      >
        <div className="form--field">
          <label className="form--label"></label>
          <input
            type="text"
            className="form--input"
            onChange={(e) =>
              setaddPropretaire((prev) => ({
                ...prev,
                designation: e.target.value,
              }))
            }
          />
        </div>
        <div className="form--field">
          <input
            type="submit"
            className="form--input"
            value={"Ajouter un propretaire"}
          />
        </div>
      </form>
    </div>
  );
}
