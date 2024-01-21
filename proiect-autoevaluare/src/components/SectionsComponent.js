import React from "react";
import TitleComponent from "./TitleComponent";
import DescriptionComponent from "./DescriptionComponent";


function SectionsComponent({ sectionTitle, leftContent, rightContent }) {
  return (
    <div className="section">
      <div className="column">
        {sectionTitle && (
          <TitleComponent title={sectionTitle} />
        )}
        
        <div className="content my-section-component">
          <div className="column-content">
            <div className="column-1">
              {leftContent.map((item, index) => (
                <DescriptionComponent key={index} description={item} />
              ))}
            </div>
            <div className="column-2">
              {rightContent.map((item, index) => (
                <DescriptionComponent key={index} description={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionsComponent;
