import React from "react";
import "./ListCard.scss";

export const ListCard = (props) => {
  const { title, location, date, time, description } = props;

  return (
    <div className="listcard">
      <h3>{title}</h3>
      <p>Location: {location}</p>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>Description: {description}</p>
      <i className="far fa-trash-alt"></i>
    </div>
  );
};

export default ListCard;
