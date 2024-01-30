import React from "react";

const headerStyle = {
  backgroundColor: "pink",
  lineHeight: 1.5,
  letterSpacing: "4px",

  color: "#fafafa",
  fontWeight: 500,
  padding: "20px",
};

function HeaderComponent() {
  return <div style={headerStyle}><h1>Maria Stan</h1></div>;
}

export default HeaderComponent;