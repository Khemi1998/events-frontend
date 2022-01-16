import React from "react";
import Calendar from "react-calendar";
import "./Calendar.scss";

export const Schedule = (props) => {
  const { value, onClickDay } = props;

  return <Calendar onClickDay={onClickDay} value={value} />;
};

export default Schedule;
