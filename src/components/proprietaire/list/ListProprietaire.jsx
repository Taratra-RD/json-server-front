import React from "react";
import "./ListProprietaire.css";
import useGetProprietaire from "../../../hooks/useGetProprietaire";
import { FiEdit } from "react-icons/fi";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import api from "../../../api/api";
import { ToastContainer, toast } from "react-toastify";
import { IoArrowBackOutline } from "react-icons/io5";
import { MdFormatListBulletedAdd } from "react-icons/md";

export default function ListProprietaire() {
  const { getProprietaire } = useGetProprietaire();
  const navigate = useNavigate();
  const handlDelete = (id) => {
    axios
      .delete(api + "/proprietaire/" + id)
      .then((res) => toast(res.data.message))
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="list--proprietaire">
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
      <h2 className="back">
        <span>Liste des Proprietaire</span>
        <span>
          <MdFormatListBulletedAdd
            onClick={() => navigate("/proprietaire/form")}
          />
        </span>
      </h2>
      {getProprietaire &&
        getProprietaire.map((Proprietaire, index) => (
          <div className="proprietaire--field" key={index}>
            <div className="proprietaire--left">
              <div className="proprietaire--nom">
                {Proprietaire.designation}
              </div>
            </div>

            <div className="proprietaire--right" style={{ fontSize: "22px" }}>
              <FiEdit
                style={{ color: "green" }}
                onClick={() =>
                  navigate("/proprietaire/form/" + Proprietaire.id)
                }
              />
              <FaTrashAlt
                style={{ color: "red" }}
                onClick={() => handlDelete(Proprietaire.id)}
              />
            </div>
          </div>
        ))}
    </div>
  );
}
