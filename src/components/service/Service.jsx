import React from "react";
import { Outlet } from "react-router";

export default function Service() {
  return (
    <div
      className="service"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh ",
        color: "aqua",
        backgroundColor: "rgba(31, 29, 29, 0.897)",
      }}
    >
      <Outlet />
    </div>
  );
}
