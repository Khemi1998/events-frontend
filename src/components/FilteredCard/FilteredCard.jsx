import React from "react";
import "./FilteredCard.scss";

export const FilteredCard = (props) => {
  const { title, location, time, description } = props;

  return (
    <div className="Filteredcard">
      <h3>{title}</h3>
      <p>Location: {location}</p>
      <p>Time: {time}</p>
      <p>Description: {description}</p>
      <i className="far fa-trash-alt"></i>
    </div>
  );
};

export default FilteredCard;
