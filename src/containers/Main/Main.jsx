import React, { useState } from "react";
import "./Main.scss";
import Calendar from "../../components/Calendar/Calendar";
import LeftMenu from "../../containers/LeftMenu/LeftMenu";
import RightMenu from "../../containers/RightMenu/RightMenu";
import AllEvents from "../AllEvents/AllEvents";

function App() {
  const [value, onClickDay] = useState(new Date());
  const [showAllEvents, setShowAllEvents] = useState(false);

  const toggleAll = () => {
    setShowAllEvents(!showAllEvents);
  };

  console.log(value);

  return (
    <div className="events">
      <div className="events__container">
        <LeftMenu toggleAllEvents={toggleAll} />
        {!showAllEvents && (
          <>
            <Calendar onClickDay={onClickDay} value={value} />
            <RightMenu
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
