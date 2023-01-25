import React from "react";
import { useLoaderData, json } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();

  // if (data.isError) {
  //   return <p> {data.message}</p>;
  // }

  return (
    <>
      <EventsList events={data.events} />
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
