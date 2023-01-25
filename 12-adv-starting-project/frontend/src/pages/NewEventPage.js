import React from "react";
import { json, Link, redirect } from "react-router-dom";
import EventForm from "../components/EventForm";

function NewEventPage() {
  return (
    <div>
      <EventForm />
    </div>
  );
}

export default NewEventPage;

export async function addEventAction({ request, params }) {
  const data = await request.formData();
  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };
  // https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=428&q=80
  console.log(eventData);

  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });
  if (!response.ok) {
    throw json({ message: "data no sent!!" }, { status: 500 });
  }
  return redirect("/events");
}
