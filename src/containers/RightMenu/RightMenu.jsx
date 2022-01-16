import React from "react";
import "./RightMenu.scss";

export const RightMenu = (props) => {
  const { day, date, month, year } = props;

  const days = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesay",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday",
  };

  const months = {
    0: "January",
    1: "Febuary",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  };

  return (
    <div className="rightmenu">
      <h1>Events for:</h1>
      <h2>
        {days[day]} {date} {months[month]} {year}
      </h2>
      <p>0 Result(s)</p>
    </div>
  );
};

export default RightMenu;
