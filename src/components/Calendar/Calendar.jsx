import React, { useState } from "react";
import Calendar from "react-calendar";
import "./Calendar.scss";
import 'react-calendar/dist/Calendar.css';

export const Schedule= () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};

export default Schedule;
