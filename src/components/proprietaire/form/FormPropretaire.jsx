import React, { useEffect, useState } from "react";
import axios from "axios";
import api from "../../../api/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./FormProprietaire.css";
import { FaClipboardList } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import useGetOneProprietaire from "../../../hooks/useGetOneProprietaire";
import { IoArrowBackOutline } from "react-icons/io5";

export default function FormPropretaire() {
  const [addPropretaire, setaddPropretaire] = useState();
  const { id } = useParams();
  const { getProprietaire } = useGetOneProprietaire(id);
  const navigate = useNavigate();

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

  useEffect(() => {
    if (getProprietaire) {
      setaddPropretaire({
        designation: getProprietaire.designation || "",
      });
    }
  }, [getProprietaire]);

  const handlePutPropretaire = (e) => {
    e.preventDefault();
    let frm = document.getElementsByName("propretaire")[0];
    axios
      .post(api + "/proprietaire/" + id, addPropretaire)
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
        <span>
          {id ? "Mise à jour d'un propretaire" : "Nouveau propretaire"}
        </span>
        <span>
          <span>
            <FaClipboardList onClick={() => navigate("/proprietaire/list")} />
          </span>
        </span>
      </div>
      <form
        className="form--body"
        onSubmit={(e) =>
          !id ? handleAddPropretaire(e) : handlePutPropretaire(e)
        }
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
            value={addPropretaire && addPropretaire.designation}
          />
        </div>
        <div className="form--field">
          <input
            type="submit"
            className="form--input"
            value={!id ? "Ajouter un propretaire" : "Maj un propretaire"}
          />
        </div>
      </form>
    </div>
  );
}
