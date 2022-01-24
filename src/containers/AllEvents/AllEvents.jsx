import React, { useEffect, useState } from "react";
import "./AllEvents.scss";
import SearchBox from "../../components/SearchBox/SearchBox";
import ListCard from "../../components/ListCard/ListCard";

export const AllEvents = (props) => {
  const { handleDelete, handleInput, searchTerm, filteredEvents } = props;

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
