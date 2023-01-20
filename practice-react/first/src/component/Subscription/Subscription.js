import React, { useContext } from "react";
import EditContext from "../store/Edit-context";
import Card from "../UI/Card";
import SubscriptionDate from "./SubscriptionDate";

function Subscription(props) {
  const data = useContext(EditContext);

  return (
    <Card>
      <SubscriptionDate date={props.data.date} />
      <h2>{props.data.title}</h2>
      <div>{props.data.amount}</div>
      <div>
        <button type="button" on onClick={data.editHandler}>
          edit
        </button>
      </div>
    </Card>
  );
}

export default Subscription;
