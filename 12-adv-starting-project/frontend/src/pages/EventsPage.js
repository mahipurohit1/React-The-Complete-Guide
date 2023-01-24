import React from "react";
import { Link, useNavigate } from "react-router-dom";
const DUMMY_EVENTs = [
  { id: "e1", name: "diwali" },
  { id: "e2", name: "holiday" },
  { id: "e3", name: "diwali 3" },
];

function EventsPage() {
  const navigate = useNavigate();
  const addEventHandler = () => {
    navigate("new");
  };
  return (
    <div>
      EventsPage
      <ul>
        {DUMMY_EVENTs.map((event) => {
          return (
            <li key={event.id}>
              <Link to={event.id}>{event.name}</Link>
            </li>
          );
        })}
      </ul>
      <button onClick={addEventHandler}>add new event</button>
    </div>
  );
}

export default EventsPage;
