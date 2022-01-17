import React from "react";
import "./AllEvents.scss";
import ListCard from "../../components/ListCard/ListCard";

export const AllEvents = (props) => {
  const { Events } = props;

  const showAll = Events.map((event) => {
    return (
      <ListCard
        title={event.title}
        location={event.location}
        time={event.time}
        description={event.description}
      />
    );
  });

  return (
    <div className="all-events">
      <h1>test</h1>
      <div className="all-events__events">{showAll}</div>
    </div>
  );
};

export default AllEvents;
