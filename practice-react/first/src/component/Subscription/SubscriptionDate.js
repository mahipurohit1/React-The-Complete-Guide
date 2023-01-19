import React from "react";

function SubscriptionDate(props) {
  const month = props.date.toLocaleString("default", { month: "long" });
  const day = props.date.toLocaleString("default", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div>
      {month}
      {day}
      {year}
    </div>
  );
}

export default SubscriptionDate;
