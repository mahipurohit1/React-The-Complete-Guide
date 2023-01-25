import React from "react";
import { useLoaderData, json, useNavigate } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();
  const navigate = useNavigate();
  // if (data.isError) {
  //   return <p> {data.message}</p>;
  // }
  const addNewEventHandler = () => {
    navigate("new");
  };

  return (
    <>
      <button
        style={{
          padding: "10px",
          margin: "5px",
          cursor: "pointer",
        }}
        onClick={addNewEventHandler}
      >
        Add New Event
      </button>
      <div>
        <EventsList events={data.events} />
      </div>
    </>
  );
}
export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    ///
    // return { isError: true, message: "error is occurred " };

    throw json({ message: "error is occurred " }, { status: 500 });
  } else {
    // const resData = await response.json();
    // return resData.events;
    return response;
  }
}
