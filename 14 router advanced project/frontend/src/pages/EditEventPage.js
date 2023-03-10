import React from "react";
import { useLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

function EditEventPage() {
  const data = useLoaderData();
  return (
    <div>
      <EventForm method="PATCH" event={data.event}></EventForm>
    </div>
  );
}

export default EditEventPage;
