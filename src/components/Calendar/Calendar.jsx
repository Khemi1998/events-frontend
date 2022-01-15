import React, { useState } from "react";
import Calendar from "react-calendar";
import "./Calendar.scss";

export const Schedule= () => {
  const [value, onClickDay] = useState(new Date());
console.log(value);
//Thu Jan 20 2022 00:00:00 GMT+0000 (Greenwich Mean Time)

  return (
      <Calendar onClickDay={onClickDay} value={value} />
  );
};

export default Schedule;
