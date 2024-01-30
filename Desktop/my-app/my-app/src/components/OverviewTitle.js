import React from "react";
import TitleComponent from "./TitleComponent";

function OverviewTitle() {
  const containerStyle = {
    padding: '20px',
    fontSize: '18px',
  };

  return (
    <div style={containerStyle}>
      {"Experienta actuala este cea mai provocatoare de până acum, în mare parte din cauza evaluării propriilor cunoștințe și lucrului cu React. Îmi place partea practică a React, dar încă întâmpin dificultăți în înțelegerea sa profundă și aplicarea eficientă în proiect."} 
    </div>
  );
}

export default OverviewTitle;