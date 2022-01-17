import React from "react";
import "./LeftMenu.scss";
import Form from "../../components/Form/Form";
import sunrise from "../../assets/images/sunrise.png";
import sun from "../../assets/images/sun.png";
import moon from "../../assets/images/moon.png";
import Button from "../../components/Button/Button";

export const LeftMenu = (props) => {
  const { toggleAllEvents } = props;

  const currentHour = new Date().getHours();
  let greetingImg = sunrise;
  let greetingTime = "Morning!";

  if (currentHour >= 12) {
    greetingImg = sun;
    greetingTime = "Afternoon!";
  }

  if (currentHour >= 18) {
    greetingImg = moon;
    greetingTime = "Evening!";
  }

  return (
    <div className="leftmenu">
      <header className="greeting">
        <img src={greetingImg} className="greeting__img" alt={greetingTime} />
        <h1 className="greeting__heading">Good {greetingTime}</h1>
      </header>
      <Button click={toggleAllEvents} isSecondary={false} buttonText="Toggle All Events" />
      <Form />
    </div>
  );
};

export default LeftMenu;
