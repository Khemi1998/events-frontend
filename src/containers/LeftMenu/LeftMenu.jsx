import React from "react";
import "./LeftMenu.scss";
import Form from "../../components/Form/Form";
import sunrise from "../../assets/images/sunrise.png";
import sun from "../../assets/images/sun.png";
import moon from "../../assets/images/moon.png";
import Button from "../../components/Button/Button";
import { useState } from "react/cjs/react.development";

export const LeftMenu = (props) => {
  const { toggleAllEvents } = props;
  const [showForm, setShowForm] = useState(false);

  const currentHour = new Date().getHours();
  let greetingImg = sunrise;
  let greetingTime = "Morning";

  if (currentHour >= 12) {
    greetingImg = sun;
    greetingTime = "Afternoon";
  }

  if (currentHour >= 18) {
    greetingImg = moon;
    greetingTime = "Evening";
  }

  const toggleForm = () => {
    setShowForm(!showForm)
  }

  return (
    <div className="leftmenu">
      <header className="greeting">
        <img src={greetingImg} className="greeting__img" alt={greetingTime} />
        <h1 className="greeting__heading">Good {greetingTime}</h1>
      </header>
      <div className="leftmenu__btns">
        <Button
          click={toggleAllEvents}
          isSecondary={false}
          buttonText="Toggle All Events"
        />
        <div className="leftmenu--toggleform">
          <Button
            click={toggleForm}
            isSecondary={true}
            buttonText="New Event"
          />
        </div>
      </div>
      <div className="leftmenu--form">
          <Form />
        </div>
      {showForm && <div className="leftmenu--mobileform">
          <Form />
      </div>}
    </div>
  );
};

export default LeftMenu;
