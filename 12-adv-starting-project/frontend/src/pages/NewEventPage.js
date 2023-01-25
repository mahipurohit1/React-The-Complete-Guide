import React from "react";
import { json, Link, redirect } from "react-router-dom";
import EventForm from "../components/EventForm";

function NewEventPage() {
  return (
    <div>
      <EventForm method="POST" />
    </div>
  );
}

export default NewEventPage;
