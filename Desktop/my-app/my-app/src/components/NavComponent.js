import React from "react";

const navComponentStyle = {
 color: "pink",
  fontSize: "15px",
  display: "flex",
  justifyContent: "space-between",
  maxWidth: "1200px",
  margin: "auto",
};

function NavComponent() {
  return (
    <>
      <div style={navComponentStyle}>
        <h2>" Nu e niciodată prea târziu pentru a învăța."</h2>
      </div>
    </>
  );
}

export default NavComponent;