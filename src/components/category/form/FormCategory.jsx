import React, { useState } from "react";
import "./FormCategory.css";
import axios from "axios";
import api from "../../../api/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function FormCategory() {
  const [addCategory, setaddCategory] = useState();

  const handleAddCategory = (e) => {
    e.preventDefault();
    let frm = document.getElementsByName("category")[0];
    axios
      .post(api + "/category", addCategory)
      .then((res) => {
        toast(res.data.message);
        frm.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="form--category">
      <ToastContainer />
      <div className="form--title">Nouveau catégorie</div>
      <form
        className="form--body"
        onSubmit={(e) => handleAddCategory(e)}
        name="category"
      >
        <div className="form--field">
          <label className="form--label"></label>
          <input
            type="text"
            className="form--input"
            onChange={(e) =>
              setaddCategory((prev) => ({
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
            value={"Ajouter un categorie"}
          />
        </div>
      </form>
    </div>
  );
}
