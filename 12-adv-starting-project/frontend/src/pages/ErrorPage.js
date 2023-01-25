import React from "react";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const err = useRouteError();
  if (err.status === 500) {
    return <p> error : {err.data.message}</p>;
  }
  return <div>ErrorPage</div>;
}

export default ErrorPage;
