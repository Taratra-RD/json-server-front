import React, { useEffect, useState } from "react";
import "./FormAutres.css";
import axios from "axios";
import api from "../../../api/api";
import { ToastContainer, toast } from "react-toastify";
import useGetService from "../../../hooks/useGetService";
import useGetSociete from "../../../hooks/useGetSociete";
import useGetCategory from "../../../hooks/useGetCategory";
import useGetProprietaire from "../../../hooks/useGetProprietaire";
import { FaClipboardList } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import useGetOneAutre from "../../../hooks/useGetOneAutre";
import { IoArrowBackOutline } from "react-icons/io5";

export default function FormAutres() {
  const [addAutres, setaddAutres] = useState({
    nom: "",
    mdp: "",
    categorie_id: "",
    proprietaire_id: "",
    service_id: "",
    societe_id: "",
  });
  const { getService } = useGetService();
  const { getSociete } = useGetSociete();
  const { getCategories } = useGetCategory();
  const { getProprietaire } = useGetProprietaire();
  const { id } = useParams();
  const { getAutre } = useGetOneAutre(id);
  const navigate = useNavigate();

  const handleAddAutres = (e) => {
    e.preventDefault();
    let frm = document.getElementsByName("autres")[0];
    axios
      .post(api + "/autre", addAutres)
      .then((res) => {
        toast(res.data.message);
        frm.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (getAutre) {
      setaddAutres({
        nom: getAutre.nom,
        mdp: getAutre.mdp,
        categorie_id: getAutre.Categorie,
        proprietaire_id: getAutre.Proprietaire,
        service_id: getAutre.Service,
        societe_id: getAutre.Societe,
      });
    }
  }, [getAutre]);

  const handlePutAutres = (e) => {
    e.preventDefault();
    let frm = document.getElementsByName("autres")[0];
    axios
      .put(api + "/autre/" + id, addAutres)
      .then((res) => {
        toast(res.data.message);
        frm.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="form--autres">
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
      <div className="form--title">
        <span>{id ? "Mise à jour d'un matériel" : "Nouveau matériel"}</span>
        <span>
          <FaClipboardList onClick={() => navigate("/autre/list")} />
        </span>
      </div>
      <form
        className="form--body"
        onSubmit={(e) => (!id ? handleAddAutres(e) : handlePutAutres(e))}
        name="autres"
      >
        <div className="form--field">
          <label className="form--label"></label>
          <input
            type="text"
            className="form--input"
            onChange={(e) =>
              setaddAutres((prev) => ({
                ...prev,
                nom: e.target.value,
              }))
            }
            placeholder="Désignation"
            value={addAutres && addAutres.nom}
          />
        </div>
        <div className="form--field">
          <label className="form--label"></label>
          <input
            type="text"
            className="form--input"
            onChange={(e) =>
              setaddAutres((prev) => ({
                ...prev,
                mdp: e.target.value,
              }))
            }
            placeholder="Mot de passe"
            value={addAutres && addAutres.mdp}
          />
        </div>
        <div className="form--field">
          <select
            style={{ height: "2.4rem" }}
            className="form--select"
            onChange={(e) =>
              setaddAutres((prev) => ({
                ...prev,
                categorie_id: e.target.value,
              }))
            }
            value={addAutres && addAutres.categorie_id}
          >
            <option value="">categorie</option>
            {getCategories &&
              getCategories.map((category, index) => (
                <option key={index} value={category.id}>
                  {category.designation}
                </option>
              ))}
          </select>
          <select
            style={{ height: "2.4rem" }}
            className="form--select"
            onChange={(e) =>
              setaddAutres((prev) => ({
                ...prev,
                proprietaire_id: e.target.value,
              }))
            }
            value={addAutres && addAutres.proprietaire_id}
          >
            <option value="">proprietaire</option>
            {getProprietaire &&
              getProprietaire.map((proprietaire, index) => (
                <option key={index} value={proprietaire.id}>
                  {proprietaire.designation}
                </option>
              ))}
          </select>
        </div>

        <div className="form--field">
          <select
            style={{ height: "2.4rem" }}
            className="form--select"
            onChange={(e) =>
              setaddAutres((prev) => ({
                ...prev,
                service_id: e.target.value,
              }))
            }
            value={addAutres && addAutres.service_id}
          >
            <option value="">service</option>
            {getService &&
              getService.map((service, index) => (
                <option key={index} value={service.id}>
                  {service.designation}
                </option>
              ))}
          </select>
          <select
            style={{ height: "2.4rem" }}
            className="form--select"
            onChange={(e) =>
              setaddAutres((prev) => ({
                ...prev,
                societe_id: e.target.value,
              }))
            }
            value={addAutres && addAutres.societe_id}
          >
            <option value="">societe</option>
            {getSociete &&
              getSociete.map((societe, index) => (
                <option key={index} value={societe.id}>
                  {societe.designation}
                </option>
              ))}
          </select>
        </div>

        <div className="form--field">
          <input
            type="submit"
            className="form--input"
            value={!id ? "Ajouter un matériel" : "Maj un matériel"}
          />
        </div>
      </form>
    </div>
  );
}
