import React, { useEffect, useState } from "react";
import "./FormSociete.css";
import axios from "axios";
import api from "../../../api/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaClipboardList } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import useGetOneSociete from "../../../hooks/useGetOneSociete";
import { IoArrowBackOutline } from "react-icons/io5";

export default function FormSociete() {
  const [addSociete, setaddSociete] = useState();
  const { id } = useParams();
  const { getSociete } = useGetOneSociete(id);
  const navigate = useNavigate();

  const handleAddSociete = (e) => {
    e.preventDefault();
    let frm = document.getElementsByName("Societe")[0];
    axios
      .post(api + "/societe", addSociete)
      .then((res) => {
        toast(res.data.message);
        frm.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (getSociete) {
      setaddSociete({
        designation: getSociete.designation || "",
      });
    }
  }, [getSociete]);

  const handlePutSociete = (e) => {
    e.preventDefault();
    let frm = document.getElementsByName("Societe")[0];
    axios
      .post(api + "/societe/" + id, addSociete)
      .then((res) => {
        toast(res.data.message);
        frm.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="form--societe">
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
        <span>{id ? "Mise à jour d'un societe" : "Nouveau societe"}</span>
        <span>
          <span>
            <FaClipboardList onClick={() => navigate("/societe/list")} />
          </span>
        </span>
      </div>
      <form
        className="form--body"
        onSubmit={(e) => (!id ? handleAddSociete(e) : handlePutSociete(e))}
        name="societe"
      >
        <div className="form--field">
          <label className="form--label"></label>
          <input
            type="text"
            className="form--input"
            onChange={(e) =>
              setaddSociete((prev) => ({
                ...prev,
                designation: e.target.value,
              }))
            }
            value={addSociete && addSociete.designation}
          />
        </div>
        <div className="form--field">
          <input
            type="submit"
            className="form--input"
            value={!id ? "Ajouter un un societe" : "Maj un un societe"}
          />
        </div>
      </form>
    </div>
  );
}
