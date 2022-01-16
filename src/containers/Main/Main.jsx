import React, { useState } from "react";
import "./Main.scss";
import Calendar from "../../components/Calendar/Calendar";
import LeftMenu from "../../containers/LeftMenu/LeftMenu";
import RightMenu from "../../containers/RightMenu/RightMenu";

function App() {
  const [value, onClickDay] = useState(new Date());
  console.log(value);
  //Thu Jan 20 2022 00:00:00 GMT+0000 (Greenwich Mean Time)

  return (
    <div className="events">
      <div className="events__container">
        <LeftMenu />
        <Calendar onClickDay={onClickDay} value={value}/>
        <RightMenu test={value.getUTCDate()} />
      </div>
    </div>
  );
}

export default App;
