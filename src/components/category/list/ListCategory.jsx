import React from "react";
import "./ListCategory.css";
import useGetCategory from "../../../hooks/useGetCategory";
import { FiEdit } from "react-icons/fi";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import api from "../../../api/api";
import { ToastContainer, toast } from "react-toastify";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { MdFormatListBulletedAdd } from "react-icons/md";

export default function ListCategory() {
  const { getCategories } = useGetCategory();
  const navigate = useNavigate();
  const handlDelete = (id) => {
    axios
      .delete(api + "/category/" + id)
      .then((res) => toast(res.data.message))
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="list--category">
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
        <span>Liste des Category</span>
        <span>
          <MdFormatListBulletedAdd
            onClick={() => navigate("/categorie/form")}
          />
        </span>
      </h2>
      {getCategories &&
        getCategories.map((category, index) => (
          <div className="category--field" key={index}>
            <div className="category--left">
              <div className="category--nom">{category.designation}</div>
            </div>

            <div className="category--right" style={{ fontSize: "22px" }}>
              <FiEdit
                style={{ color: "green" }}
                onClick={() => navigate("/categorie/form/" + category.id)}
              />
              <FaTrashAlt
                style={{ color: "red" }}
                onClick={() => handlDelete(category.id)}
              />
            </div>
          </div>
        ))}
    </div>
  );
}
