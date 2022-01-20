import React from "react";
import "./RightMenu.scss";
import FilteredCard from "../../components/FilteredCard/FilteredCard";

export const RightMenu = (props) => {
  const { day, date, month, year, Events, calendarDay } = props;

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

  const filteredListings = Events.map((event, index) => {
    let monthConvert;
    let dayConvert;
    if (
      month + 1 < 10
        ? (monthConvert = `0${month + 1}`)
        : (monthConvert = `${month + 1}`)
    );

    if (date < 10 ? (dayConvert = `0${date}`) : (dayConvert = `${date}`));

    // console.log(event.date);
    // console.log(`${year}-${monthConvert}-${dayConvert}`);

    if (event.date === `${year}-${monthConvert}-${dayConvert}`) {
      return (
        <div className="filtered" key={index}>
          <FilteredCard
            title={event.title}
            location={event.location}
            time={event.time}
            description={event.description}
          />
        </div>
      );
    }
  });

  return (
    <div className="rightmenu">
      <div className="rightmenu__header">
        <h1 className="rightmenu__header--title">Events for: </h1>
        <h2 className="rightmenu__header--date">
          {days[day]} {date} {months[month]} {year}
        </h2>
      </div>
      <div className="rightmenu__results">{filteredListings}</div>
    </div>
  );
};

export default RightMenu;
