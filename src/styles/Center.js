import React from "react";

export const Center = ({ children }) => (
  <div
    style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
  >
    {children}
  </div>
);
