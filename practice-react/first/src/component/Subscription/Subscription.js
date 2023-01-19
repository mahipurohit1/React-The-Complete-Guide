import React from "react";
import Card from "../UI/Card";
import SubscriptionDate from "./SubscriptionDate";

function Subscription(props) {
  return (
    <Card>
      <SubscriptionDate date={props.data.date} />

      <h2>{props.data.title}</h2>
      <div>{props.data.amount}</div>
    </Card>
  );
}

export default Subscription;
