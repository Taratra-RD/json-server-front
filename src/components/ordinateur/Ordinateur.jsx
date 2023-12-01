import React from "react";
import { Outlet } from "react-router-dom";

export default function Ordinateur() {
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
