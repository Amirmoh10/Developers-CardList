// this component will be responsible for rendering the cards.

import React from "react";
import "./cards_container.css";
import Card from "../card/card";

const CardContainer = ({filteredDevelopersArray}) => {
  return (
    <div className="card-list">
      {filteredDevelopersArray.map((developerObject) => {
        return (
          <Card key={developerObject.id} developerObject={developerObject} />
        );
      })}
    </div>
  );
};
export default CardContainer;
