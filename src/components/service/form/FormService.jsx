import React, { useEffect, useState } from "react";
import "./FormService.css";
import axios from "axios";
import api from "../../../api/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaClipboardList } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import useGetOneService from "../../../hooks/useGetOneService";
import { IoArrowBackOutline } from "react-icons/io5";

export default function FormService() {
  const [addService, setaddService] = useState();
  const { id } = useParams();
  const { getService } = useGetOneService(id);
  const navigate = useNavigate();

  const handleAddService = (e) => {
    e.preventDefault();
    let frm = document.getElementsByName("service")[0];
    axios
      .post(api + "/service", addService)
      .then((res) => {
        toast(res.data.message);
        frm.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (getService) {
      setaddService({
        designation: getService.designation || "",
      });
    }
  }, [getService]);

  const handlePutService = (e) => {
    e.preventDefault();
    let frm = document.getElementsByName("service")[0];
    axios
      .post(api + "/service/" + id, addService)
      .then((res) => {
        toast(res.data.message);
        frm.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="form--service">
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
        <span>{id ? "Mise à jour d'un service" : "Nouveau service"}</span>
        <span>
          <span>
            <FaClipboardList onClick={() => navigate("/service/list")} />
          </span>
        </span>
      </div>
      <form
        className="form--body"
        onSubmit={(e) => (!id ? handleAddService(e) : handlePutService(e))}
        name="service"
      >
        <div className="form--field">
          <label className="form--label"></label>
          <input
            type="text"
            className="form--input"
            onChange={(e) =>
              setaddService((prev) => ({
                ...prev,
                designation: e.target.value,
              }))
            }
            value={addService && addService.designation}
          />
        </div>
        <div className="form--field">
          <input
            type="submit"
            className="form--input"
            value={!id ? "Ajouter un un service" : "Maj un un service"}
          />
        </div>
      </form>
    </div>
  );
}
