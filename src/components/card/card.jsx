import React from "react";
import "./card.css";

const Card = ({developerObject}) => {
  return (
    <div className="card">
      <h1>{developerObject.name}</h1>
      <h2>{developerObject.profession}</h2>
      <h5>{developerObject.email}</h5>
    </div>
  );
};

export default Card;
