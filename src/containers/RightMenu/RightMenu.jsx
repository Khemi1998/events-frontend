import React from "react";
import "./RightMenu.scss";
import FilteredCard from "../../components/FilteredCard/FilteredCard";

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

  const filteredListings = mockData.map((event) => {
    let monthConvert = "";
    let dayConvert = "";
    if (
      month + 1 < 10
        ? (monthConvert = `0${month + 1}`)
        : (monthConvert = `${month + 1}`)
    );
    if (day < 10 ? (dayConvert = `0${date}`) : (dayConvert = `${date}`));
    if (event.date === `${year}-${monthConvert}-${dayConvert}`) {
      return (
        <FilteredCard
          title={event.title}
          location={event.location}
          time={event.time}
          description={event.description}
        />
      );
    }
  });

  return (
    <div className="rightmenu">
      <h1>Events for:</h1>
      <h2>
        {days[day]} {date} {months[month]} {year}
      </h2>
      <div className="rightmenu__results">{filteredListings}</div>
    </div>
  );
};

export default RightMenu;
