import React, { useEffect, useState } from "react";
import "./FormCategory.css";
import axios from "axios";
import api from "../../../api/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";
import useGetOneCategory from "../../../hooks/useGetOneCategory";
import { FaClipboardList } from "react-icons/fa";
import { IoArrowBackOutline } from "react-icons/io5";

export default function FormCategory() {
  const { id } = useParams();
  const { getCategorie } = useGetOneCategory(id);
  const navigate = useNavigate();

  const [addCategory, setaddCategory] = useState({ designation: "" });

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

  // Update addCategory when getCategorie changes
  useEffect(() => {
    if (getCategorie) {
      setaddCategory({
        designation: getCategorie.designation || "",
      });
    }
  }, [getCategorie]);

  const handlePutCategory = (e) => {
    e.preventDefault();
    let frm = document.getElementsByName("category")[0];
    axios
      .put(api + "/category/" + id, addCategory)
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
      <IoArrowBackOutline
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          paddingBlock: "2rem 0",
          paddingInline: "2rem 0",
          fontSize: "2rem",
        }}
        onClick={() => navigate("/setting")}
      />
      <ToastContainer />
      <div className="form--title">
        <span>{id ? "Mise à jour d'un catégorie" : "Nouveau catégorie"}</span>
        <span>
          <FaClipboardList onClick={() => navigate("/categorie/list")} />
        </span>
      </div>
      <form
        className="form--body"
        onSubmit={(e) => (!id ? handleAddCategory(e) : handlePutCategory(e))}
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
            value={addCategory && addCategory.designation}
          />
        </div>
        <div className="form--field">
          <input
            type="submit"
            className="form--input"
            value={!id ? "Ajouter un categorie" : "Maj un categorie"}
          />
        </div>
      </form>
    </div>
  );
}
