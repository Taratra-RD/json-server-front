import React from "react";
import { Outlet } from "react-router-dom";

export default function Proprietaire() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh ",
      }}
    >
      <Outlet />
    </div>
  );
}
