import React from "react";
import { json, redirect, useLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetailPage() {
  const data = useLoaderData();

  return (
    <div>
      <EventItem event={data.event} />
    </div>
  );
}

export default EventDetailPage;

export async function eventDetailLoader({ request, params }) {
  const id = params.id;
  console.log(id);
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json({ message: "error is occurred " }, { status: 500 });
  } else {
    return response;
  }
}

export async function eventDeleteAction({ request, params }) {
  const id = params.id;
  const response = await fetch("http://localhost:8080/events/" + id, {
    method: request.method,
  });

  if (!response.ok) {
    throw json({ message: "data delete failed" }, { status: 500 });
  } else {
    return redirect("/events");
  }
}
