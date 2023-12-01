import React from "react";
import "./FormCategory.css";

export default function FormCategory() {
  return (
    <div className="form">
      <div className="form--title"></div>
      <form className="form--body">
        <div className="form--field">
          <label className="form--label"></label>
          <input type="text" className="form--input" />
        </div>
      </form>
    </div>
  );
}
