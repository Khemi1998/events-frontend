import "./App.scss";
import Calendar from "./components/Calendar/Calendar";
import LeftMenu from "./containers/LeftMenu/LeftMenu";
import RightMenu from "./containers/RightMenu/RightMenu";

function App() {
  return (
    <div className="events">
      <div className="events__container">
        <LeftMenu />
        <Calendar />
        <RightMenu />
      </div>
    </div>
  );
}

export default App;
