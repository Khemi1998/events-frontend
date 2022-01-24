import React, { useState, useEffect } from "react";
import "./Main.scss";
import Calendar from "../../components/Calendar/Calendar";
import LeftMenu from "../../containers/LeftMenu/LeftMenu";
import RightMenu from "../../containers/RightMenu/RightMenu";
import AllEvents from "../AllEvents/AllEvents";

function App() {
  const [value, onClickDay] = useState(new Date());
  const [showAllEvents, setShowAllEvents] = useState(false);
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  //GET
  useEffect(() => {
    fetch("http://localhost:8080/events")
      .then((res) => res.json())
      .then((json) => setEvents(json))
      .catch((err) => console.log(err));
  }, [filteredEvents]);

  const toggleAll = () => {
    setShowAllEvents(!showAllEvents);
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
        // window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="events">
      <div className="events__container">
        <LeftMenu toggleAllEvents={toggleAll} />
        {!showAllEvents && (
          <>
            <Calendar onClickDay={onClickDay} value={value} Events={events} />
            <RightMenu
              Events={events}
              day={value.getUTCDay()}
              date={value.getUTCDate()}
              month={value.getUTCMonth()}
              year={value.getUTCFullYear()}
            />
          </>
        )}
        {showAllEvents && (
          <AllEvents
            handleDelete={handleDelete}
            handleInput={handleInput}
            searchTerm={searchTerm}
            filteredEvents={filteredEvents}
          />
        )}
      </div>
    </div>
  );
}

export default App;
