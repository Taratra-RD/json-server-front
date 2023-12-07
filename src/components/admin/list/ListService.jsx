import React from "react";
import "./ListService.css";
import useGetService from "../../../hooks/useGetService";
import { FiEdit } from "react-icons/fi";
import { FaTrashAlt } from "react-icons/fa";

export default function ListService() {
  const { getService } = useGetService();
  return (
    <div className="list--Service">
      <h2>Liste des Service</h2>
      {getService &&
        getService.map((service, index) => (
          <div className="service--field" key={index}>
            <div className="service--left">
              <div className="service--nom">{service.designation}</div>
            </div>

            <div className="service--right" style={{ fontSize: "22px" }}>
              <FiEdit style={{ color: "green" }} />
              <FaTrashAlt style={{ color: "red" }} />
            </div>
          </div>
        ))}
    </div>
  );
}
