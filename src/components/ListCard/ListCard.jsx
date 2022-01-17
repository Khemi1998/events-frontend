import React from "react";
import "./ListCard.scss";

export const ListCard = (props) => {
  const { title, location, time, description } = props;

  return (
    <div className="listcard">
      <h3>{title}</h3>
      <p>Location: {location}</p>
        <p>Time: {time}</p>
      <p>Description: {description}</p>
    </div>
  );
};

export default ListCard;
