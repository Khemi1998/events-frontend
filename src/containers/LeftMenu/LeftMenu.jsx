import React from "react";
import "./LeftMenu.scss";
import Form from "../../components/Form/Form";
import Button from "../../components/Button/Button";
import { useState } from "react/cjs/react.development";

export const LeftMenu = (props) => {
  const { toggleAllEvents } = props;
  const [showForm, setShowForm] = useState(false);

  const currentHour = new Date().getHours();
  let greetingTime = "Morning";

  if (currentHour >= 12) {
    greetingTime = "Afternoon";
  }

  if (currentHour >= 18) {
    greetingTime = "Evening";
  }

  const toggleForm = () => {
    setShowForm(!showForm)
  }

  return (
    <div className="leftmenu">
        <h1 className="greeting__heading">Good {greetingTime}</h1>
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
