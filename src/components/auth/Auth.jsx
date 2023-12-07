import React from "react";
import { Outlet } from "react-router-dom";

export default function Auth() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        minWidth: "100vw",
        backgroundColor: "rgba(31, 29, 29, 0.897)",
      }}
    >
      <Outlet />
    </div>
  );
}
