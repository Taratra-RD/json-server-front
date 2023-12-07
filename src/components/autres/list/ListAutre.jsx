import React, { useEffect, useState } from "react";
import "./ListAutre.css";
import useGetAutre from "../../../hooks/useGetAutre";
import { FiEdit } from "react-icons/fi";
import { FaTrashAlt } from "react-icons/fa";
import Details from "./Details";
import axios from "axios";
import api from "../../../api/api";
import { ToastContainer, toast } from "react-toastify";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import useGetCategory from "../../../hooks/useGetCategory";

export default function ListAutre() {
  const { getAutre } = useGetAutre();
  const [category, setCategory] = useState("");
  const { getCategories } = useGetCategory();
  const [showAutre, setShowAutre] = useState({ id: 0, choice: false });
  const navigate = useNavigate();

  const handlDelete = (id) => {
    axios
      .delete(api + "/autre/" + id)
      .then((res) => toast(res.data.message))
      .catch((err) => {
        console.log(err);
      });
  };

  const filteredAutre =
    category === ""
      ? getAutre
      : getAutre.filter((value) => value.Categorie === category);

  useEffect(() => {}, [showAutre, getAutre, getCategories]);

  return (
    <div className="list--autre">
      <IoArrowBackOutline
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          paddingBlock: "2rem 0",
          paddingInline: "2rem 0",
          fontSize: "2rem",
        }}
        onClick={() => navigate("/")}
      />
      <ToastContainer />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        className="back"
      >
        <h2>Liste des Autre</h2>
        <select
          style={{
            height: "2.2rem",
            fontSize: "14px",
            paddingBlock: "0.2rem 0.2rem",
            width: "8rem",
          }}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Tous</option>
          {getCategories &&
            getCategories.map((category, index) => (
              <option key={index} value={category.designation}>
                {category.designation}
              </option>
            ))}
        </select>
      </div>

      {getAutre &&
        filteredAutre.map((autre, index) => (
          <div key={index}>
            <div className="autre--field">
              <div
                className="autre--left"
                onClick={() =>
                  setShowAutre({ id: autre.AutreID, choice: true })
                }
              >
                <div className="autre--nom">{autre.nom}</div>
                <div className="autre--mdp">{autre.mdp}</div>
              </div>

              <div className="autre--right" style={{ fontSize: "22px" }}>
                <FiEdit
                  style={{ color: "green" }}
                  onClick={() => navigate("/autre/form/" + autre.AutreID)}
                />
                <FaTrashAlt
                  style={{ color: "red" }}
                  onClick={() => handlDelete(autre.AutreID)}
                />
              </div>
            </div>
            <div
              style={
                showAutre.id === autre.AutreID && showAutre.choice
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              <Details autre={autre} setShowAutre={setShowAutre} />
            </div>
          </div>
        ))}
    </div>
  );
}
