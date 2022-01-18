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

  const getEvents = () => {
    fetch("http://localhost:8080/events")
      .then((res) => res.json())
      .then((json) => setEvents(json))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getEvents();
  }, [events]);

  const toggleAll = () => {
    setShowAllEvents(!showAllEvents);
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
        {showAllEvents && <AllEvents />}
      </div>
    </div>
  );
}

export default App;