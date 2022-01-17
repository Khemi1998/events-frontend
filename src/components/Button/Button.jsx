import React from "react";
import "./Button.scss";

const Button = props => {
  const { buttonText, isSecondary, click } = props;

  let buttonStyle = "button";

  if (isSecondary) {
    buttonStyle += " secondary";
  } else {
    buttonStyle += " primary";
  }

  return <button onClick= {click} type="submit" className={buttonStyle}>{buttonText}</button>;
};

export default Button;
