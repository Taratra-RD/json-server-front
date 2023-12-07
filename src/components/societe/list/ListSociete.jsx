import React from "react";
import useGetSociete from "../../../hooks/useGetSociete";
import { FiEdit } from "react-icons/fi";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import api from "../../../api/api";
import { ToastContainer, toast } from "react-toastify";
import { IoArrowBackOutline } from "react-icons/io5";
import { MdFormatListBulletedAdd } from "react-icons/md";

export default function ListSociete() {
  const { getSociete } = useGetSociete();
  const navigate = useNavigate();
  const handlDelete = (id) => {
    axios
      .delete(api + "/societe/" + id)
      .then((res) => toast(res.data.message))
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="list--service">
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
        <span>Liste des societes</span>
        <span>
          <MdFormatListBulletedAdd onClick={() => navigate("/societe/form")} />
        </span>
      </h2>
      {getSociete &&
        getSociete.map((service, index) => (
          <div className="service--field" key={index}>
            <div className="service--left">
              <div className="service--nom">{service.designation}</div>
            </div>

            <div className="service--right" style={{ fontSize: "22px" }}>
              <FiEdit
                style={{ color: "green" }}
                onClick={() => navigate("/societe/form/" + service.id)}
              />
              <FaTrashAlt
                style={{ color: "red" }}
                onClick={() => handlDelete(service.id)}
              />
            </div>
          </div>
        ))}
    </div>
  );
}
