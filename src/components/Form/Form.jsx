import { useState } from "react";
import "./Form.scss";
import Button from "../Button/Button";

const Form = () => {
  const [event, setEvent] = useState({
    title: "",
    location: "",
    date: "",
    time: "",
    description: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:8080/event', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(event)
    })
    .then((response) => response.json())
    .then((json => console.log(json)))
    .catch(err => console.log(err))
    e.target.reset();
  }

  return (
    <div className="log-form">
      <h2>Create New Event</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" onInput={(e) => setEvent({ ...event, title: e.target.value })} required/>
        <input type="text" placeholder="Location" onInput={(e) => setEvent({ ...event, location: e.target.value })} required/>
        <input type="date" placeholder="Date" onInput={(e) => setEvent({ ...event, date: e.target.value })} required/>
        <input type="time" placeholder="Time" onInput={(e) => setEvent({ ...event, time: e.target.value })} required/>
        <input type="text" placeholder="Description" onInput={(e) => setEvent({ ...event, description: e.target.value })} required/>
        <Button isSecondary={true} buttonText="Submit" />
      </form>
    </div>
  );
}

export default Form;