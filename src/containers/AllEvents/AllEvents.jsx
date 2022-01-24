import React, { useEffect, useState } from "react";
import "./AllEvents.scss";
import SearchBox from "../../components/SearchBox/SearchBox";
import ListCard from "../../components/ListCard/ListCard";

export const AllEvents = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEvents, setFilteredEvents] = useState([]);

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  //DELETE
  const getEvents = () => {
    fetch(`http://localhost:8080/events/${searchTerm}`)
      .then((res) => res.json())
      .then((json) => setFilteredEvents(json))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getEvents();
  }, [searchTerm]);

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/event/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log({ response });
        getEvents();
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const showEvents = filteredEvents.map((event, index) => {
    return (
      <div className="listcards" key={index}>
        <ListCard
          id={event.id}
          handleDelete={handleDelete}
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
      <div className="all-events__heading">
        <h1>Events</h1>
        <SearchBox
          label={"search-Events"}
          searchTerm={searchTerm}
          handleInput={handleInput}
          placeholder="Search for Event"
        />
      </div>
      <div className="all-events--container">
        <div className="all-events__events">{showEvents}</div>
      </div>
    </div>
  );
};

export default AllEvents;
