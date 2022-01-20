import React from "react";
import Calendar from "react-calendar";
import "./Calendar.scss";
import moment from "moment";

export const Schedule = (props) => {
  const { value, onClickDay, Events } = props;

  const mark = Events.map(event => {
    // console.log(event.date.split("-").reverse().join("-"))
    return `${event.date.split("-").reverse().join("-")}`
  })

  return (
    <div className="calendar">
      <Calendar
        onClickDay={onClickDay}
        value={value}
        tileClassName={({ date, view }) => {
          if (mark.find((x) => x === moment(date).format("DD-MM-YYYY"))) {
            return "highlight";
          }
        }}
      />
    </div>
  );
};

export default Schedule;
