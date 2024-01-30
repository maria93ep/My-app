
import React from "react";
import { FooterItem } from "./FooterItem";

const footerStyle = {
  textAlign: "center",
  color: "pink",
  fontSize: "20px",
  backgroundColor: "#FFF0F5",
};

function FooterComponent() {
  return (
    <div style={footerStyle}>
      <p>It School, 2023-2024</p>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
      </div>
    </div>
  );
}

export default FooterComponent;