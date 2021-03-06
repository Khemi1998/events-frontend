import React from "react";
import "./ListCard.scss";

export const ListCard = (props) => {
  const { title, location, date, time, description, handleDelete, id } = props;

  return (
    <div className="listcard">
      <h3><i onClick={()=>handleDelete(id)} className="far fa-trash-alt"></i> {title}</h3>
      <p>Location: {location}</p>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>Description: {description}</p>
    </div>
  );
};

export default ListCard;
