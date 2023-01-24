import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function EventDetailPage() {
  const param = useParams();
  const navigate = useNavigate();
  const editEventHandler = () => {
    navigate("edit");
  };
  return (
    <div>
      EventDetailPage
      <h1>{param.id}</h1>
      <button onClick={editEventHandler}> edit event</button>
    </div>
  );
}

export default EventDetailPage;
