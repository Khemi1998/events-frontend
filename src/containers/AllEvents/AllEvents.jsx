import React, { useEffect, useState } from "react";
import "./AllEvents.scss";
import SearchBox from "../../components/SearchBox/SearchBox";
import ListCard from "../../components/ListCard/ListCard";

export const AllEvents = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEvents, setFilteredEvents] = useState([]);

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    // const superCleanInput = cleanInput
    //   .split("")
    //   .map((word) => word.replace(/" "/g, "_"))
    //   .join("");
    setSearchTerm(cleanInput);
  };

  const getEvents = () => {
    fetch(`http://localhost:8080/events/${searchTerm}`)
      .then((res) => res.json())
      .then((json) => setFilteredEvents(json))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getEvents();
  }, [filteredEvents]);

  const showEvents = filteredEvents.map((event, index) => {
    return (
      <div className="listcard" key={index}>
        <ListCard
          title={event.title}
          location={event.location}
          date={event.date.split("-").reverse().join("/")}
          time={event.time}
          description={event.description}
        />
      </div>
    );
  });

  return (
    <div className="all-events">
      <h1>Events</h1>
      <SearchBox
        label={"search-Events"}
        searchTerm={searchTerm}
        handleInput={handleInput}
        placeholder="Search for Event"
      />
      <div className="all-events__events">{showEvents}</div>
    </div>
  );
};

export default AllEvents;
