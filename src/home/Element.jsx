import React from "react";
import "./Element.css";
import { MdOutlinePlaylistAdd, MdOutlineList } from "react-icons/md";
import { useNavigate } from "react-router";

export default function Element({ element }) {
  const navigate = useNavigate();
  return (
    <div className="element">
      <div
        className="element--form"
        onClick={() => navigate(`/${element}/form`)}
      >
        <div className="logo">
          <MdOutlinePlaylistAdd />
        </div>
        <div className="text">Veuillez ajouter une nouvelle {element}</div>
      </div>
      <div className="element--list">
        <div className="logo">
          <MdOutlineList />
        </div>
        <div className="text">Veuillez consulter la liste des {element}</div>
      </div>
    </div>
  );
}
