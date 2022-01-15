import "./App.scss";
import Calendar from "./components/Calendar/Calendar";

function App() {
  return (
    <div className="events">
      <div className="events__container">
        <Calendar />
      </div>
    </div>
  );
}

export default App;
