import React from "react";
import Calendar from "react-calendar";
import "./Calendar.scss";
import moment from "moment";

export const Schedule = (props) => {
  const { value, onClickDay } = props;

  const mockData = [
    {
      id: 1,
      title: "Testing Event 1",
      location: "Home",
      date: "2022-01-01",
      time: "00:00:00",
      description: "first event",
    },
    {
      id: 2,
      title: "Testing Event 2",
      location: "Home",
      date: "2022-01-02",
      time: "00:00:00",
      description: "second event",
    },
    {
      id: 3,
      title: "Testing Event 3",
      location: "Home",
      date: "2022-01-03",
      time: "00:00:00",
      description: "third event",
    },
  ];
  
  const mark = mockData.map(event => {
    // console.log(event.date.split("-").reverse().join("-"))
    return `${event.date.split("-").reverse().join("-")}`
  })

  return (
    <Calendar
      onClickDay={onClickDay}
      value={value}
      tileClassName={({ date, view }) => {
        if (mark.find((x) => x === moment(date).format("DD-MM-YYYY"))) {
          return "highlight";
        }
      }}
    />
  );
};

export default Schedule;
