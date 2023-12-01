import React, { useState } from "react";
import "./FormOrdinateur.css";
import axios from "axios";
import api from "../../../api/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useGetCategory from "../../../hooks/useGetCategory";

export default function FormOrdinateur() {
  const [addOrdinateur, setaddOrdinateur] = useState();
  const { getCategories } = useGetCategory();

  const handleAddOrdinateur = (e) => {
    e.preventDefault();
    let frm = document.getElementsByName("ordinateur")[0];
    axios
      .post(api + "/ordinateur", addOrdinateur)
      .then((res) => {
        toast(res.data.message);
        frm.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="form--ordinateur">
      <ToastContainer />
      <div className="form--title">Nouveau Ordinateur</div>
      <form
        className="form--body"
        onSubmit={(e) => handleAddOrdinateur(e)}
        name="ordinateur"
      >
        <div className="form--field">
          <label className="form--label"></label>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
            }}
          >
            <select
              style={{ width: "30%", height: "2.4rem" }}
              className="form--select"
              onChange={(e) =>
                setaddOrdinateur((prev) => ({
                  ...prev,
                  categorie_id: e.target.value,
                }))
              }
            >
              <option value="">categorie</option>
              {getCategories &&
                getCategories.map((category, index) => (
                  <option key={index} value={category.id}>
                    {category.designation}
                  </option>
                ))}
            </select>
            <div
              className="form--field"
              style={{ width: "65%", marginBottom: "0" }}
            >
              <label className="form--label"></label>
              <input
                type="text"
                className="form--input"
                onChange={(e) =>
                  setaddOrdinateur((prev) => ({
                    ...prev,
                    ip: e.target.value,
                  }))
                }
                placeholder="Ip"
              />
            </div>
          </div>
        </div>

        <div className="form--field">
          <label className="form--label"></label>
          <input
            type="text"
            className="form--input"
            onChange={(e) =>
              setaddOrdinateur((prev) => ({
                ...prev,
                mot_de_passe: e.target.value,
              }))
            }
            placeholder="Societe"
          />
        </div>

        <div className="form--field">
          <input
            type="submit"
            className="form--input"
            value={"Ajouter un Ordinateur"}
          />
        </div>
      </form>
    </div>
  );
}
