import React from "react";
import "./ListService.css";
import useGetService from "../../../hooks/useGetService";
import { FiEdit } from "react-icons/fi";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import api from "../../../api/api";
import { ToastContainer, toast } from "react-toastify";
import { IoArrowBackOutline } from "react-icons/io5";
import { MdFormatListBulletedAdd } from "react-icons/md";

export default function ListService() {
  const { getService } = useGetService();
  const navigate = useNavigate();
  const handlDelete = (id) => {
    axios
      .delete(api + "/service/" + id)
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
        <span>Liste des Service</span>
        <span>
          <MdFormatListBulletedAdd onClick={() => navigate("/service/form")} />
        </span>
      </h2>
      {getService &&
        getService.map((service, index) => (
          <div className="service--field" key={index}>
            <div className="service--left">
              <div className="service--nom">{service.designation}</div>
            </div>

            <div className="service--right" style={{ fontSize: "22px" }}>
              <FiEdit
                style={{ color: "green" }}
                onClick={() => navigate("/service/form/" + service.id)}
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
